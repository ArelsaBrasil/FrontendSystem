import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { X } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  MapsContainer,
  PointContainer,
  PointDescription,
  ServiceSection,
  SubmitButton,
  Title,
} from "./styles";

import { CurrentGroups } from "../../../api/CurrentGroups";
import { SendDesignationOS } from "../../../api/SendDesignationOS";
import { MapOfDesignationScreen } from "../MapOfDesignationScreen";
import { TChosenMarker, TGroup } from "./types";
import { TPointInfos } from "../MapOfDesignationScreen/types";

export function DesignateOS() {
  const [currentGroup, setCurrentGroup] = useState<TGroup[]>([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const currentGroupReturn = await CurrentGroups();

    if (currentGroupReturn) {
      setCurrentGroup(currentGroupReturn);
    }
  }

  const navigate = useNavigate();
  const { recoverUserInformation } = useContext(AuthContext);

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

  const [selectedMarkers, setSelectedMarkers] = useState<TPointInfos[]>([]);

  const handleMarkerClick = (pointData: TPointInfos) => {
    if (selectedMarkers.some((point) => point.id === pointData.id)) {
      setSelectedMarkers(
        selectedMarkers.filter((point) => point.id !== pointData.id)
      );
    } else {
      setSelectedMarkers([...selectedMarkers, pointData]);
    }
  };

  const [hoverMarkerId, setHoverMarkerId] = useState<number | null>(null);

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

  const [selectedPoints, setSelectedPoints] = useState<TChosenMarker[]>([]);

  const handleGroupSelection = (
    groupName: string,
    pointId: number,
    osId: number
  ) => {
    console.log("groupName:", groupName, "pointId:", pointId, "osId:", osId);

    const existingPointIndex = selectedPoints.findIndex(
      (point) => point.pointId === pointId
    );

    if (existingPointIndex !== -1) {
      const updatedPoints = [...selectedPoints];
      updatedPoints[existingPointIndex].groupName = groupName;
      setSelectedPoints(updatedPoints);
    } else {
      setSelectedPoints((prevPoints) => [
        ...prevPoints,
        {
          pointId,
          groupName,
          osId,
        },
      ]);
    }
  };

  async function handleAssing() {
    const dataToLink = selectedPoints.map(({pointId,...rest}) => (rest));

    await SendDesignationOS(dataToLink);
  }

  return (
    <ServiceSection>
      <MapsContainer>
        <MapOfDesignationScreen
          centerPosition={centerPosition}
          onMarkerClick={handleMarkerClick}
          selectedMarkers={selectedMarkers}
          hoverMarkerId={hoverMarkerId}
        />
      </MapsContainer>
      <ContentContainer>
        <ContentSection>
          <Title> Designar Ordem de Serviço. </Title>
          {selectedMarkers.length === 0 && (
            <section>
              <p>Selecione o ponto desejado no mapa ao lado esquerdo.</p>
            </section>
          )}
          <section>
            {selectedMarkers.map(
              ({ address, id, osInfo, lat, lng, lastChange }, index) => {
                const formattedDate =
                  lastChange &&
                  lastChange.toLocaleDateString("pt-BR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  });
                return (
                  <PointDescription
                    key={index}
                    onClick={() => setCenterPosition({ lat, lng })}
                    onMouseOver={() => setHoverMarkerId(id)}
                    onMouseLeave={() => setHoverMarkerId(null)}
                  >
                    <PointContainer>
                      <IdentifierNumber>{index + 1}</IdentifierNumber>
                      <ContainerInfos>
                        <section>
                          <div>
                            <InfosOfPoint>
                              {`#${id} (Lat: ${lat}, Long: ${lng}) `}
                            </InfosOfPoint>
                            <Address>{`${address}`}</Address>
                          </div>

                          <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id={`group-label-${id}`}>
                              Grupos
                            </InputLabel>
                            <Select
                              labelId={`group-label-${id}`}
                              id={`group-select-${id}`}
                              value={
                                selectedPoints.find(
                                  (point) => point.pointId === id
                                )?.groupName || ""
                              }
                              onChange={(e) => {
                                const selectedGroupName = e.target
                                  .value as string;
                                handleGroupSelection(
                                  selectedGroupName,
                                  id,
                                  osInfo?.idServiceOrders || 0
                                );
                              }}
                              label="Grupos"
                            >
                              {currentGroup.map((group) => (
                                <MenuItem
                                  key={group.groupName}
                                  value={group.groupName}
                                >
                                  {group.groupName}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </section>
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

          <ContainerSubmitButtons id="ContainerSubmitButtons">
            <SubmitButton
              type="submit"
              onClick={handleAssing}
              disabled={selectedMarkers.length === 0}
            >
              atribuir
            </SubmitButton>
          </ContainerSubmitButtons>
        </ContentSection>
      </ContentContainer>
    </ServiceSection>
  );
}
