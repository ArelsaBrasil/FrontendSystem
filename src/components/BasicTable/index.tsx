import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IReturnSearchAndFilter } from "../TableOfSearchScreen";
import { format } from "date-fns";

interface BasicTableProps {
  resultSearchAndFilter: IReturnSearchAndFilter[];
}

export function BasicTable({ resultSearchAndFilter }: BasicTableProps) {
  function formatingDate(dateToFormat: string) {
    const data = new Date(dateToFormat);
    return format(data, "dd/MM/yyyy");
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Número de protocolo</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Nome</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Data da solicitação</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Motivo solicitação</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Meio de contato</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Cargo(g)</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Telefone</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resultSearchAndFilter.map((data) => (
            <TableRow
              key={Number(data.attendanceProtocol)}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.attendanceProtocol}
              </TableCell>
              <TableCell >{data.customerName}</TableCell>
              <TableCell>{formatingDate(data.createdAt.toString())}</TableCell>
              <TableCell>{data.reason}</TableCell>
              <TableCell>{data.status}</TableCell>
              <TableCell>{data.meansOfAttendance}</TableCell>
              <TableCell>{data.customerPosition}</TableCell>
              <TableCell>{data.customerPhoneNumber}</TableCell>
              <TableCell>{data.customerEmail}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
