import {
  DirectionsRenderer,
  GoogleMap,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useContext, useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import {
  ContainerButton,
  SectionOfPage,
  StyledButton,
  StyledLabel,
} from "./styles";

type MapOsServiceOrderScreenProps = {
  buttonStartOS: () => void;
};

export function MapOsServiceOrderScreen({
  buttonStartOS,
}: MapOsServiceOrderScreenProps) {
  const navigate = useNavigate();
  const { recoverUserInformation } = useContext(AuthContext);

  async function returnValidation() {
    await recoverUserInformation();
    if (!recoverUserInformation) {
      return navigate("/luzes");
    }
  }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD6-B0jpVxbauSAnn9Y0exqw3igo_QrQWk",
  });

  const [directionsLoaded, setDirectionsLoaded] = useState(false);
  const [duration, setDuration] = useState<string | null>(null); // Armazena a duração estimada

  useEffect(() => {
    returnValidation();
  }, []);

  useEffect(() => {
    const fetchDirections = async () => {
      if (!directionsLoaded) {
        const directionsService = new window.google.maps.DirectionsService();

        directionsService.route(
          {
            origin: { lat: -4.9402276, lng: -47.4648869 },
            destination: { lat: -4.930417, lng: -47.518136 },
            travelMode: google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK && result) {
              setDirections(result);
              setDirectionsLoaded(true);

              // Obter a duração estimada da rota
              if (
                result.routes &&
                result.routes[0] &&
                result.routes[0].legs &&
                result.routes[0].legs[0] &&
                result.routes[0].legs[0].duration &&
                typeof result.routes[0].legs[0].duration.text === "string"
              ) {
                const estimatedDuration =
                  result.routes[0].legs[0].duration.text;
                setDuration(estimatedDuration);
              } else {
                console.error("Erro ao obter direções:", status);
              }
            }
          }
        );
      }
    };

    if (isLoaded) {
      fetchDirections();
    }
  }, [isLoaded, directionsLoaded]);

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const centerPosition = {
    lat: -4.9402276,
    lng: -47.4648869,
  };

  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);

  return (
    <>
      <SectionOfPage>
        {isLoaded ? (
          <>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={centerPosition}
              zoom={14}
              options={{ gestureHandling: "greedy" }}
            >
              <StyledLabel variant="contained" size="medium">
                Previsão de chegada: {duration}
              </StyledLabel>

              {directions && (
                <DirectionsRenderer
                  directions={directions}
                  options={{
                    preserveViewport: true,
                  }}
                />
              )}
              <ContainerButton>
                <StyledButton variant="contained" size="medium" onClick={buttonStartOS}>
                  Iniciar OS
                </StyledButton>
              </ContainerButton>
            </GoogleMap>
          </>
        ) : (
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
      </SectionOfPage>
    </>
  );
}
