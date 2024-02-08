import {
  GoogleMap,
  Marker,
  MarkerClusterer,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import { OsInfos } from "../../../api/OsInfos";
import { MapContainer, MapContent } from "./styles";
import { ApiResponse, GroupInfo, IMap, TPointInfos } from "./types";

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
    googleMapsApiKey: "AIzaSyD6-B0jpVxbauSAnn9Y0exqw3igo_QrQWk",
  });

  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const [osInfos, setOsInfos] = useState<ApiResponse[] | null>([]);

  useEffect(() => {
    let isMounted = true;

    async function fetchDataAndSetOsInfos() {
      try {
        const returnOsInfos = await OsInfos();
        if (isMounted) {
          setOsInfos(returnOsInfos);
        }
      } catch (error) {
        console.error("Erro ao buscar informações:", error as any);
      }
    }

    fetchDataAndSetOsInfos();

    return () => {
      isMounted = false;
    };
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
    pointInfos.osInfo = osIdOfPoint;
    onMarkerClick(pointInfos);
  };

  return (
    <>
      {isLoaded && osInfos && (
        <MapContainer>
          <MapContent>
            <GoogleMap
              clickableIcons={false}
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={centerPosition}
              zoom={18}
              options={{
                streetViewControl: false,
              }}
              onLoad={(map) => {
                mapInstanceRef.current = map;
              }}
            >
              <MarkerClusterer options={optionsCluster}>
                {(clusterer) => (
                  <>
                    {osInfos.map((osInfo) => {
                      const point = osInfo.pointId;
                      const id = Number(point.serialNumber);
                      const isSelected = selectedMarkers.some(
                        (pointUnit: { serialNumber: string }) =>
                          pointUnit.serialNumber === point.serialNumber
                      );

                      const hasGroup = osInfo.group !== null;

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
                              : hasGroup
                              ? "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
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
        </MapContainer>
      )}
    </>
  );
}
