export interface ApiResponse {
  idServiceOrders: number;
  description: string;
  status: number;
  createdAt: string;
  finishedAt: string | null;
  group: null | GroupInfo;
  pointId: TPointInfos;
}

export interface GroupInfo {
  id: number;
  uuid: string;
  groupName: string;
  createdAt: string;
}

export interface TPointInfos {
  osInfo: ApiResponse | null | undefined;
  id: number;
  lat: string;
  lng: string;
  address: string;
  model: string;
  serialNumber: string;
  lastChange: string | null;
  createdAt: string;
  osInfos: ApiResponse[];
}
export interface IMap {
  onMarkerClick: (pointData: TPointInfos) => void;
  selectedMarkers: TPointInfos[];
  hoverMarkerId: null | number;
  centerPosition?: {
    lat: number;
    lng: number;
  };
}
