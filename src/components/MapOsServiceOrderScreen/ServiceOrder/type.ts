export interface IItemsReturnSearchAndFilter {
  idAttendance: number;
  meansOfAttendance: string;
  attendanceProtocol: string;
  reason: string;
  customerName: string;
  customerEmail: string;
  customerPhoneNumber: string;
  customerPosition: string;
  poleId: string;
  requestDescription: string;
  status: string;
  createdAt: string;
}

export interface IResultSearchAndFilter {
  items: IItemsReturnSearchAndFilter[];
  pagination: {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    sortDirection: string;
    sortColumn: string;
  };
}

export interface IDataToSearch {
  wordToSearch: string;
  status: string;
  startDate?: string;
  endDate?: string;
  page: number;
  sortInfos?: IObjSortInfos,
}

export interface IObjSortInfos {
  attendanceProtocol?: string;
  customerName?: string;
  customerPosition?: string;
  createdAt?: string;
  reason?: string;
  status?: string;
  meansOfAttendance?: string;
}
