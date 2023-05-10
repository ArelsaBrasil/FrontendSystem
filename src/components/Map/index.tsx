import {
  GoogleMap,
  Marker,
  MarkerClusterer,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useEffect, useRef } from "react";
import { points } from "../../services/StaticDb";
import { MapContainer, MapContent } from "./styles";

import blueDotIcon from "../../assets/images/blue-dot.png";
import greenDotIcon from "../../assets/images/green-dot.png";

import { motion } from "framer-motion";

interface PointInfosI {
  lat: number;
  lng: number;
  address: string;
  power: string;
  model: string;
  serialNumber: number;
  lastChange: Date;
}
interface MapI {
  onMarkerClick: (pointData: PointInfosI) => void;
  selectedMarkers: PointInfosI[];
  hoverMarkerId: null | number;
  centerPosition?: {
    lat: number;
    lng: number;
  };
}

export function Map({
  onMarkerClick,
  selectedMarkers,
  hoverMarkerId,
  centerPosition,
}: MapI) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC6yhQbZldZk3535d-bgJiaR3mus98dtcw",
  });

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
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

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

  const handleMarkerClick = (point: PointInfosI) => {
    onMarkerClick(point);
  };

  const handleMapLoad = (map: google.maps.Map) => {
    mapInstanceRef.current = map;
  };

  return isLoaded ? (
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
                  {points.map((point) => {
                    const id = point.serialNumber;
                    const isSelected = selectedMarkers.some(
                      (pointUnit) =>
                        pointUnit.serialNumber === point.serialNumber
                    );

                    return (
                      <Marker
                        key={id}
                        position={{ lat: point.lat, lng: point.lng }}
                        onClick={() => handleMarkerClick(point)}
                        clusterer={clusterer}
                        icon={{
                          url: isSelected
                            ? "https://maps.google.com/mapfiles/ms/icons/green-dot.png"
                            : "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                          scaledSize:
                            isSelected && hoverMarkerId === id
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
  ) : (
    <></>
  );
}
