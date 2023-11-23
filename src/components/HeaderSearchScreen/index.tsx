import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";
import { ColumnTitles, Header } from "./styles";

import Search from "@mui/icons-material/Search";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import useScrollListener from "../../hooks/useScrollListener";
import { IDataToSearch } from "../../layouts/luzes/SearchScreen";
import { SortButton } from "../Sort Button";

interface IHeaderSearchScreen {
  handleSubmitSearchAndFilter: () => void;
  handleStatusChange: (e: SelectChangeEvent) => void;
  handleSetDataToSearch: (value: string | unknown, attribute: string) => void;
  dataToSearch: IDataToSearch;
  quantityOfItems?: number;
}

export function HeaderSearchScreen({
  handleSubmitSearchAndFilter,
  handleStatusChange,
  dataToSearch,
  handleSetDataToSearch,
  quantityOfItems,
}: IHeaderSearchScreen) {
  const [navClassList, setNavClassList] = useState<string[]>([]);
  const scroll = useScrollListener();

  useEffect(() => {
    const classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      classList.push("nav-bar--hidden");

    setNavClassList(classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <Header className={navClassList.join(" ")}>
      <form onSubmit={handleSubmitSearchAndFilter}>
        <div>
          <p>Total: {quantityOfItems}</p>
        </div>
        <TextField
          id="outlined-basic"
          label="Pesquisar"
          variant="standard"
          sx={{ width: "400px" }}
          onChange={(e) =>
            handleSetDataToSearch(e.target.value, "wordToSearch")
          }
          value={dataToSearch.wordToSearch}
        />
        <FormControl sx={{ width: "180px" }}>
          <InputLabel>Status</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            variant="standard"
            id="demo-simple-select"
            defaultValue={"Todos"}
            value={dataToSearch.status}
            onChange={handleStatusChange}
            label="status"
          >
            <MenuItem value={"Todos"}>Todos</MenuItem>
            <MenuItem value={"Solucionados"}>Solucionados</MenuItem>
            <MenuItem value={"Abertos"}>Abertos</MenuItem>
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            slotProps={{
              textField: {
                variant: "standard",
                InputProps: {
                  placeholder: "DD/MM/AAAA",
                },
              },
            }}
            sx={{ width: "180px" }}
            label="De"
            format="DD/MM/YYYY"
            onChange={(value) => handleSetDataToSearch(value, "startDate")}
          />
          <p>-</p>
          <DatePicker
            slotProps={{
              textField: {
                variant: "standard",
                InputProps: {
                  placeholder: "DD/MM/AAAA",
                },
              },
            }}
            sx={{ width: "180px" }}
            label="Até"
            format="DD/MM/YYYY"
            onChange={(value) => handleSetDataToSearch(value, "endDate")}
          />
        </LocalizationProvider>
        <Button
          sx={{ width: "160px", boxShadow: "0" }}
          onClick={handleSubmitSearchAndFilter}
          variant="contained"
          size="medium"
          endIcon={<Search />}
        >
          Pesquisar
        </Button>
      </form>
      <ColumnTitles>
        <SortButton>Protocolo</SortButton>
        <SortButton>Nome</SortButton>
        <SortButton>Cargo</SortButton>
        <SortButton>Data</SortButton>
        <SortButton>Motivo solicitação</SortButton>
        <SortButton>Status</SortButton>
        <SortButton>Meio </SortButton>
        <SortButton>Telefone</SortButton>
        <SortButton>Email</SortButton>
      </ColumnTitles>
    </Header>
  );
}
