import { SelectChangeEvent } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { HeaderSearchScreen } from "../../../components/HeaderSearchScreen";
import {
  ContainerOfPage,
  SectionOfPage,
  TitleOfPage,
} from "../../../components/StylesPresentOnAllScreens/styles";
import { TableOfSearchScreen } from "../../../components/TableOfSearchScreen";
import { AuthContext } from "../../../context/AuthContext";
import { searchAndFilter } from "../../../services/SearchAndFilter";
import { NothingFound } from "./styles";
import {
  IDataToSearch,
  IItemsReturnSearchAndFilter,
  IObjSortInfos,
  IResultSearchAndFilter
} from "./type";

export function SearchScreen() {
  const navigate = useNavigate();
  const { recoverUserInformation } = useContext(AuthContext);

  async function returnValidation() {
    await recoverUserInformation();
    if (!recoverUserInformation) {
      return navigate("/luzes");
    }
  }

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [moreToLoad, setMoretoLoad] = useState<boolean>(true);
  const [waitingTheSearch, setWaitingTheSearch] = useState<boolean>(false);

  const [resultSearchAndFilter, setResultSearchAndFilter] =
    useState<IResultSearchAndFilter>();
  const [itemsReturned, setItemsReturned] = useState<
    IItemsReturnSearchAndFilter[]
  >([]);

  const [dataToSearch, setDataToSearch] = useState<IDataToSearch>({
    wordToSearch: "",
    status: "Todos",
    startDate: "",
    endDate: "",
    page: 1,
    sortInfos: {createdAt:"desc"},
  });

  const handleSort = (objSortInfos:IObjSortInfos) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchDataButton(objSortInfos);
  };

  const handleStatusChange = (e: SelectChangeEvent) => {
    setDataToSearch({ ...dataToSearch, status: e.target.value as string });
  };

  const handleSetDataToSearch = (
    value: string | unknown,
    attribute: string
  ) => {
    setDataToSearch((prevData) => ({
      ...prevData,
      [attribute]: value,
    }));
  };

  async function fetchData() {
    setIsLoading(true);

    setTimeout(async () => {
      const returnSearchAndFilter = await searchAndFilter(dataToSearch);

      if (returnSearchAndFilter) {
        setResultSearchAndFilter(returnSearchAndFilter);

        setItemsReturned((prevItems) => [
          ...prevItems,
          ...returnSearchAndFilter.items,
        ]);
        if (dataToSearch.page < returnSearchAndFilter.pagination.totalPages) {
          setDataToSearch((prevData) => ({
            ...prevData,
            page: prevData.page + 1,
          }));
        } else {
          setMoretoLoad(false);
        }
        setIsLoading(false);
      }
    }, 1000);
  }

  async function fetchDataButton(objSortInfos?:IObjSortInfos) {
    dataToSearch.page = 1;
    if (objSortInfos) {
      dataToSearch.sortInfos = objSortInfos;
    }

    setIsLoading(true);
    setWaitingTheSearch(true);

    setTimeout(async () => {
      const returnSearchAndFilter = await searchAndFilter(dataToSearch);

      if (returnSearchAndFilter) {
        setResultSearchAndFilter(returnSearchAndFilter);

        setItemsReturned((prevItems) =>
          dataToSearch.page === 1
            ? returnSearchAndFilter.items
            : [...prevItems, ...returnSearchAndFilter.items]
        );

        if (dataToSearch.page < returnSearchAndFilter.pagination.totalPages) {
          setDataToSearch((prevData) => ({
            ...prevData,
            page: prevData.page + 1,
          }));
          setMoretoLoad(true);
        } else {
          setMoretoLoad(false);
        }
        setIsLoading(false);
        setWaitingTheSearch(false);
      }
    }, 1000);
  }

  async function handleSubmitSearchAndFilter() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchDataButton();
  }

  useEffect(() => {
    return () => {
      returnValidation();
      fetchData();
    };
  }, []);

  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      fetchData();
    }
  }, [inView]);

  return (
    <SectionOfPage>
      <TitleOfPage> Pesquisa de Atendimentos </TitleOfPage>
      <ContainerOfPage>
        <HeaderSearchScreen
          handleSort={handleSort}
          handleStatusChange={handleStatusChange}
          handleSetDataToSearch={handleSetDataToSearch}
          dataToSearch={dataToSearch}
          handleSubmitSearchAndFilter={handleSubmitSearchAndFilter}
          paginationInfos={resultSearchAndFilter?.pagination}
        />
        <TableOfSearchScreen
          isLoading={isLoading}
          itemsReturned={itemsReturned}
          waitingTheSearch={waitingTheSearch}
        />
        {resultSearchAndFilter?.pagination.totalItems === 0 && !isLoading && (
          <NothingFound>Nenhum registro foi encontrado</NothingFound>
        )}
        {/* {!isLoading &&  (
          <Button
            sx={{ width: "160px", boxShadow: "0", marginBottom: "43px" }}
            onClick={fetchData}
            variant="contained"
            size="medium"
            disabled={!moreToLoad}
          >
            Carregar mais
          </Button>
        )} */}
        {!isLoading && moreToLoad && (
          <div
            style={{
              width: "10px",
              height: "10px",
            }}
            ref={ref}
          />
        )}
      </ContainerOfPage>
    </SectionOfPage>
  );
}
