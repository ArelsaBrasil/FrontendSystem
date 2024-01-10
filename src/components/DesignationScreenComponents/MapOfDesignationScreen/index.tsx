import {
  GoogleMap,
  Marker,
  MarkerClusterer,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import { OsInfos } from "../../../api/OsInfos";
import { MapContainer, MapContent } from "./styles";
import { ApiResponse, IMap, TPointInfos } from "./types";

const blueCircle =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Circulo_azul.png/600px-Circulo_azul.png?20200319115844";
const optionsCluster = {
  minimumClusterSize: 6,
  imagePath: blueCircle,
  styles: [
    {
      url: blueCircle,
      height: 40,
      width: 40,
      textColor: "#fff",
      opacity: 0.5,
    },
    {
      url: blueCircle,
      height: 45,
      width: 45,
      textColor: "#fff",
    },
    {
      url: blueCircle,

      height: 50,
      width: 50,
      textColor: "#fff",
    },
    {
      url: blueCircle,
      height: 55,
      width: 55,
      textColor: "#fff",
    },
    {
      url: blueCircle,
      height: 60,
      width: 60,
      textColor: "#fff",
    },
  ],
};

export function MapOfDesignationScreen({
  onMarkerClick,
  selectedMarkers,
  hoverMarkerId,
  centerPosition,
}: IMap) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC6yhQbZldZk3535d-bgJiaR3mus98dtcw",
  });
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const [points, setPoints] = useState<TPointInfos[] | null>([]);
  const [osInfos, setosInfos] = useState<ApiResponse[] | null>([]);

  useEffect(() => {
    async function fetchDataAndSetPoints() {
      try {
        const returnOsInfos = await OsInfos();
        console.log(returnOsInfos);
        setosInfos(returnOsInfos);
        if (returnOsInfos) {
          const extractedPoints = returnOsInfos.map(
            (osInfo: { pointId: ApiResponse }) => osInfo.pointId
          );

          setPoints(extractedPoints);
        }
      } catch (error) {
        console.error("Erro ao buscar informações:", error as any);
      }
    }

    fetchDataAndSetPoints();
  }, []);

  useEffect(() => {
    const handleCenterPositionChange = () => {
      if (mapInstanceRef.current) {
        const zoom = mapInstanceRef.current.getZoom();
        if (zoom !== 18) {
          mapInstanceRef.current.setZoom(18);
        }
      }
    };

    handleCenterPositionChange();
  }, [centerPosition]);

  const handleMarkerClick = (pointInfos: TPointInfos) => {
    const osIdOfPoint =
      osInfos && osInfos.find((osInfo) => osInfo.pointId.id === pointInfos.id);
      pointInfos.osInfo = osIdOfPoint
     onMarkerClick(pointInfos);
  };

  const handleMapLoad = (map: google.maps.Map) => {
    mapInstanceRef.current = map;
  };
  return (
    <>
      {isLoaded && points && (
        <MapContainer>
          <>
            <MapContent>
              <GoogleMap
                clickableIcons={false}
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={centerPosition}
                zoom={18}
                options={{
                  streetViewControl: false,
                }}
                onLoad={handleMapLoad}
              >
                <MarkerClusterer options={optionsCluster}>
                  {(clusterer) => (
                    <>
                      {points &&
                        points.map((point) => {
                          const id = Number(point.serialNumber);
                          const isSelected = selectedMarkers.some(
                            (pointUnit) =>
                              pointUnit.serialNumber === point.serialNumber
                          );

                          return (
                            <Marker
                              key={id}
                              position={{
                                lat: Number(point.lat),
                                lng: Number(point.lng),
                              }}
                              onClick={() => handleMarkerClick(point)}
                              clusterer={clusterer}
                              icon={{
                                url: isSelected
                                  ? "https://maps.google.com/mapfiles/ms/icons/green-dot.png"
                                  : "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                                scaledSize:
                                  isSelected &&
                                  hoverMarkerId?.toString() === id.toString()
                                    ? new window.google.maps.Size(50, 50)
                                    : new window.google.maps.Size(30, 30),
                              }}
                            />
                          );
                        })}
                    </>
                  )}
                </MarkerClusterer>
              </GoogleMap>
            </MapContent>
          </>
        </MapContainer>
      )}
    </>
  );
}
