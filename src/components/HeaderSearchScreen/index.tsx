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
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import useScrollListener from "../../hooks/useScrollListener";
import { SortButton } from "../Sort Button";
import { IHeaderSearchScreen } from "./type";

export function HeaderSearchScreen({
  handleSubmitSearchAndFilter,
  handleStatusChange,
  handleSetDataToSearch,
  handleSort,
  dataToSearch,
  paginationInfos,
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
          <p>Total: {paginationInfos?.totalItems}</p>
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
        <SortButton handleSort={handleSort} />
      </ColumnTitles>
    </Header>
  );
}
