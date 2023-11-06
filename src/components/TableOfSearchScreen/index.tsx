import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";
import { HeaderTable, TableContainer, TableRenderContainer } from "./styles";

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
import { searchAndFilter } from "../../services/SearchAndFilter";
import { BasicTable } from "../BasicTable";

export interface IReturnSearchAndFilter {
  idAttendance: Number;
  meansOfAttendance: String;
  attendanceProtocol: String;
  reason: String;
  customerName: String;
  customerEmail: String;
  customerPhoneNumber: String;
  customerPosition: String;
  poleId: String;
  requestDescription: String;
  status: String;
  createdAt: String;
}
 export interface IDataToSearch {
  wordToSearch: string;
  status: string;
  startDate: string | null;
  endDate: string | null;
}

export function TableOfSearchScreen() {
  const [dataToSearch, setDataToSearch] = useState<IDataToSearch>({
    wordToSearch: "",
    status: "Todos",
    startDate: "",
    endDate: "",
  });
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const [resultSearchAndFilter, setResultSearchAndFilter] = useState<
    IReturnSearchAndFilter[]
  >([]);

  const handleStatusChange = (e: SelectChangeEvent) => {
    setDataToSearch({ ...dataToSearch, status: e.target.value as string });
  };

  async function fetchData() {
    const returnSearchAndFilter = await searchAndFilter(dataToSearch);
    setResultSearchAndFilter(returnSearchAndFilter);
    setIsLoading(false);
  }

  async function handleSubmitSearchAndFilter(e: any) {
    e.preventDefault();
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TableContainer>
      <HeaderTable>
        <form onSubmit={handleSubmitSearchAndFilter}>
          <TextField
            id="outlined-basic"
            label="Pesquisar"
            variant="outlined"
            sx={{ width: "400px" }}
            onChange={(e) =>
              setDataToSearch({ ...dataToSearch, wordToSearch: e.target.value })
            }
            value={dataToSearch.wordToSearch}
          />
          <FormControl sx={{ width: "180px" }}>
            <InputLabel>Status</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
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
              sx={{ width: "180px" }}
              label="De"
              format="DD/MM/YYYY"
              onChange={(value) =>
                setDataToSearch({ ...dataToSearch, startDate: value as string})
              }
            />
            <p>-</p>
            <DatePicker
              sx={{ width: "180px" }}
              label="Até"

              format="DD/MM/YYYY"
              onChange={(value) =>
                setDataToSearch({ ...dataToSearch, endDate: value as string})
              }
            />
          </LocalizationProvider>
          <Button
            type="submit"
            variant="contained"
            size="large"
            endIcon={<Search />}
          >
            Pesquisar
          </Button>
        </form>
      </HeaderTable>
      <TableRenderContainer>
        {isLoading ? (
          <p>Carregando... </p>
        ) : (
          <BasicTable resultSearchAndFilter={resultSearchAndFilter} />
        )}
      </TableRenderContainer>
    </TableContainer>
  );
}
