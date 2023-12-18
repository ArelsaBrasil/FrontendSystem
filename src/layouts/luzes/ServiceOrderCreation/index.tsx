import { TextField } from "@mui/material";
import { X } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Map } from "../../../components/Map";
import { AuthContext } from "../../../context/AuthContext";
import {
  Address,
  ButtonDeleteItem,
  ContainerInfos,
  ContainerSubmitButtons,
  ContentContainer,
  ContentSection,
  IdentifierNumber,
  InfosOfPoint,
  LastChangeDate,
  MapsContainer,
  PointContainer,
  PointDescription,
  RedIdentifierNumber,
  ServiceSection,
  SubmitButton,
  SubmitButtonFinishAndSend,
  Title,
  WarningSection,
} from "./styles";

import { isWithinInterval } from "date-fns";
import { PrintableProtocol } from "../../../components/PrintableProtocol ";
import { FormDataContext } from "../../../context/FormDataContext";
import { creatingAttendanceWithSO } from "../../../services/FormAttendance";

interface PointInfosI {
  lat: number;
  lng: number;
  address: string;
  power: string;
  model: string;
  serialNumber: number;
  lastChange: Date;
}

interface PointIdI {
  pointId: number;
}

export function ServiceOrderCreation() {
  const navigate = useNavigate();
  const { recoverUserInformation } = useContext(AuthContext);
  const {
    setCurrentAttendanceForm,
    resetAttendanceForm,
    attendanceFormOfContext,
  } = useContext(FormDataContext);

  const [descriptionOfTheRequest, setDescriptionOfTheRequest] = useState("");

  async function returnValidation() {
    await recoverUserInformation();
    if (!recoverUserInformation) {
      return navigate("/luzes");
    }
  }

  useEffect(() => {
    returnValidation();
  }, []);

  const handleDeletePoint = (index: number) => {
    const updatedMarkers = selectedMarkers.filter((_, i) => i !== index);
    setSelectedMarkers(updatedMarkers);
  };

  const [selectedMarkers, setSelectedMarkers] = useState<PointInfosI[]>([]);

  const handleMarkerClick = (pointData: PointInfosI) => {
    if (
      selectedMarkers.some(
        (point) => point.serialNumber === pointData.serialNumber
      )
    ) {
      setSelectedMarkers(
        selectedMarkers.filter(
          (point) => point.serialNumber !== pointData.serialNumber
        )
      );
    } else {
      setSelectedMarkers([...selectedMarkers, pointData]);
    }
  };

  const [hoverMarkerId, setHoverMarkerId] = useState<number | null>(null);

  const currentDate = new Date();

  const [centerPosition, setCenterPosition] = useState({
    lat: -4.9487415,
    lng: -47.4744315,
  });

  useEffect(() => {
    const section = document.getElementById("ContainerSubmitButtons");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedMarkers]);

  const [ServiceOrderCreated, setServiceOrderCreated] =
    useState<boolean>(false);

  async function handleServiceOrderCreated() {
    const pointsArray: PointIdI[] = [];
    selectedMarkers.forEach((number) => {
      const newPointId = { pointId: number.serialNumber };
      pointsArray.push(newPointId);
    });
    // setOsFormatedNumbers(pointsArray);

    const { attendant, ...newCurrentObjectAttendanceForm } =
      attendanceFormOfContext;
    newCurrentObjectAttendanceForm.description = descriptionOfTheRequest;
    newCurrentObjectAttendanceForm.os = pointsArray;
    setCurrentAttendanceForm(newCurrentObjectAttendanceForm);
    const returnCreatingAttendanceWithSO = await creatingAttendanceWithSO(
      newCurrentObjectAttendanceForm
    );
    setCurrentAttendanceForm({
      ...attendanceFormOfContext,
      attendanceProtocol: returnCreatingAttendanceWithSO.attendanceProtocol,
    });

    setServiceOrderCreated(true);
  }

  const handleReturnToAttendance = () => {
    navigate("/luzes/home/atendimento");
  };

  const handleCancelingAttendance = () => {
    resetAttendanceForm();
    navigate("/luzes/home/atendimento");
  };

  return !ServiceOrderCreated ? (
    <ServiceSection>
      <MapsContainer>
        <Map
          centerPosition={centerPosition}
          onMarkerClick={handleMarkerClick}
          selectedMarkers={selectedMarkers}
          hoverMarkerId={hoverMarkerId}
        />
      </MapsContainer>
      <ContentContainer>
        <ContentSection>
          <Title> Geração de Ordem de Serviço. </Title>
          {selectedMarkers.length === 0 && (
            <section>
              <p>Selecione o ponto desejado no mapa ao lado esquerdo.</p>
            </section>
          )}
          <section>
            {selectedMarkers.map(
              ({ address, serialNumber, lat, lng, lastChange }, index) => {
                const formattedDate = lastChange.toLocaleDateString("pt-BR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });
                return (
                  <PointDescription
                    key={index}
                    // onClick={() => setCenterPosition({ lat, lng })}
                    onMouseOver={() => setHoverMarkerId(serialNumber)}
                    onMouseLeave={() => setHoverMarkerId(null)}
                  >
                    <PointContainer
                      onClick={() => setCenterPosition({ lat, lng })}
                    >
                      <IdentifierNumber
                        as={
                          isWithinInterval(lastChange, {
                            start: new Date(
                              currentDate.getTime() - 15 * 24 * 60 * 60 * 1000
                            ),
                            end: currentDate,
                          })
                            ? RedIdentifierNumber
                            : IdentifierNumber
                        }
                      >
                        {index + 1}
                      </IdentifierNumber>
                      <ContainerInfos>
                        <InfosOfPoint>
                          {`#${serialNumber} (Lat: ${lat}, Long: ${lng}) `}
                        </InfosOfPoint>
                        <Address>{`${address}`}</Address>

                        <LastChangeDate>
                          {isWithinInterval(lastChange, {
                            start: new Date(
                              currentDate.getTime() - 15 * 24 * 60 * 60 * 1000
                            ),
                            end: currentDate,
                          })
                            ? `Ultima alteração: ${formattedDate} `
                            : ""}
                        </LastChangeDate>
                      </ContainerInfos>
                    </PointContainer>
                    <ButtonDeleteItem
                      type="button"
                      onClick={() => handleDeletePoint(index)}
                    >
                      <X size={14} weight="bold" color="#fff" />
                    </ButtonDeleteItem>
                  </PointDescription>
                );
              }
            )}
          </section>
          {selectedMarkers.some((point) =>
            isWithinInterval(point.lastChange, {
              start: new Date(currentDate.getTime() - 15 * 24 * 60 * 60 * 1000),
              end: currentDate,
            })
          ) && (
            <WarningSection>
              <p>
                Alguma manutenção foi feita nos pontos acima no intervalo dos
                ultimos 15 dias. Consultar o solicitante e entender se o
                problema apontado foi percebido antes ou após esta data.
              </p>
            </WarningSection>
          )}

          <section>
            <TextField
              sx={{ width: "100%", marginTop: "20px" }}
              id="standard-multiline-flexible"
              label="Descrição da Solicitação. "
              multiline
              maxRows={3}
              variant="standard"
              onChange={(e) => setDescriptionOfTheRequest(e.target.value)}
              value={descriptionOfTheRequest}
            />
          </section>
          <ContainerSubmitButtons id="ContainerSubmitButtons">
            <SubmitButtonFinishAndSend
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleReturnToAttendance();
              }}
            >
              voltar
            </SubmitButtonFinishAndSend>
            <SubmitButtonFinishAndSend
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleCancelingAttendance();
              }}
            >
              cancelar
            </SubmitButtonFinishAndSend>
            <SubmitButton
              type="submit"
              onClick={handleServiceOrderCreated}
              disabled={selectedMarkers.length === 0}
            >
              gerar OS
            </SubmitButton>
          </ContainerSubmitButtons>
        </ContentSection>
      </ContentContainer>
    </ServiceSection>
  ) : (
    ServiceOrderCreated && (
      <PrintableProtocol serviceForm={attendanceFormOfContext} />
    )
  );
}
