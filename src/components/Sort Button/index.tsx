import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { useState } from "react";
import { ButtonToSort } from "./styles";
import { IButtonsInfos, IHandleSort } from "./type";
import { IObjSortInfos } from "../../layouts/luzes/SearchScreen/type";

interface ISorSortButton {
  handleSort:(objSortInfos:IObjSortInfos) => void;
}

const buttonsInfos: IButtonsInfos[] = [
  {
    buttonName: "Protocolo",
    canOrganize: true,
    nameToSort: "attendanceProtocol",
  },
  {
    buttonName: "Nome",
    canOrganize: true,
    nameToSort: "customerName",
  },
  {
    buttonName: "Cargo",
    canOrganize: true,
    nameToSort: "customerPosition",
  },
  {
    buttonName: "Data",
    canOrganize: true,
    nameToSort: "createdAt",
  },
  {
    buttonName: "Motivo",
    canOrganize: true,
    nameToSort: "reason",
  },
  {
    buttonName: "Status",
    canOrganize: true,
    nameToSort: "status",
  },
  {
    buttonName: "Meio",
    canOrganize: true,
    nameToSort: "meansOfAttendance",
  },
  {
    buttonName: "Telefone",
    canOrganize: false,
  },
  {
    buttonName: "Email",
    canOrganize: false,
  },
];

const positionButonsInit = {
  Protocolo: "asc",
  Nome: "asc",
  Cargo: "asc",
  Data: "desc",
  Motivo: "asc",
  Status: "asc",
  Meio: "asc",
};

let paramsToSend: { [key: string]: string } = {};

export function SortButton({ handleSort }: ISorSortButton) {
  const [selectedButton, setSelectedButton] = useState(["Data"]);
  const [sortPositionOfButtonsState, setSortPositionOfButtonsState] = useState<{
    [key: string]: string;
  }>(positionButonsInit);

  const handleClick = (
    buttonName: string,
    canOrganize: boolean,
    nameToSort?: string
  ) => {
    if (canOrganize) {
      let aux = sortPositionOfButtonsState[buttonName];
      if (selectedButton.includes(buttonName)) {
        aux = sortPositionOfButtonsState[buttonName] == "desc" ? "asc" : "desc";
        setSortPositionOfButtonsState((prevStates) => ({
          ...prevStates,
          [buttonName]: aux,
        }));
      }

      if (nameToSort !== undefined) {
        paramsToSend[nameToSort] = aux;
      }

      console.log(paramsToSend);
      handleSort(paramsToSend);
      setSelectedButton((prevState) => [...prevState, buttonName]);
    }
  };

  return (
    <>
      {buttonsInfos.map((infos) => (
        <ButtonToSort
          key={infos.buttonName}
          canOrganize={infos.canOrganize}
          selectedButton={selectedButton.includes(infos.buttonName)}
          disabled={!infos.canOrganize}
          onClick={() =>
            handleClick(infos.buttonName, infos.canOrganize, infos.nameToSort)
          }
        >
          <p>{infos.buttonName}</p>
          <div>
            {sortPositionOfButtonsState[infos.buttonName] == "desc" ? (
              <CaretDown size={18} />
            ) : (
              <CaretUp size={18} />
            )}
          </div>
        </ButtonToSort>
      ))}
    </>
  );
}
