import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import { format } from "date-fns";
import { Oval } from "react-loader-spinner";
import { StatusIconSorting } from "../StatusIconSorting";
import { TableRow } from "./styles";
import { IItemsReturnSearchAndFilter } from "../../layouts/luzes/SearchScreen/type";

interface IBasicTable {
  itemsReturned?: IItemsReturnSearchAndFilter[];
  waitingTheSearch: boolean;
  isLoading: boolean;
}

export function BasicTable({
  itemsReturned,
  isLoading,
  waitingTheSearch,
}: IBasicTable) {
  function formatingDate(dateToFormat: string) {
    const data = new Date(dateToFormat);
    return format(data, "dd/MM/yyyy");
  }

  return (
    <>
      <TableContainer component={Paper}>
        {itemsReturned &&
          !waitingTheSearch &&
          itemsReturned.map((data, i) => (
            <TableRow key={i}>
              {/* <p>{i + 1}</p> */}
              <p>{data.attendanceProtocol}</p>
              <p>{data.customerName}</p>
              <p>{data.customerPosition}</p>
              <p>{formatingDate(data.createdAt.toString())}</p>
              <p>{data.reason}</p>
              <div>
                <StatusIconSorting status={data.status} />
              </div>
              <p>{data.meansOfAttendance}</p>
              <p>{data.customerPhoneNumber}</p>
              <p>{data.customerEmail}</p>
            </TableRow>
          ))}
      </TableContainer>
      {isLoading && (
        <div style={{ marginTop: "30px" }}>
          <Oval
            height={50}
            width={50}
            color="#00A24F"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#00a24e83"
            strokeWidth={5}
            strokeWidthSecondary={5}
          />
        </div>
      )}
    </>
  );
}
