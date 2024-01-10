export interface ApiResponse {
  idServiceOrders: number;
  description: string;
  status: number;
  createdAt: string;
  finishedAt: string | null;
  pointId: {
    id: number;
    lat: string;
    lng: string;
    address: string;
    model: string;
    serialNumber: string;
    lastChange: string | null;
    createdAt: string;
  };
}

export type TPointInfos = {
  osInfo: ApiResponse | null | undefined;
  lat: number;
  lng: number;
  address: string;
  model: string;
  serialNumber: number;
  lastChange: Date | null;
  createdAt: Date;
  id: number;
};

export interface IMap {
  onMarkerClick: (pointData: TPointInfos) => void;
  selectedMarkers: TPointInfos[];
  hoverMarkerId: null | number;
  centerPosition?: {
    lat: number;
    lng: number;
  };
}
