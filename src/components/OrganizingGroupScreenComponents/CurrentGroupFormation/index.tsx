import { useEffect, useState } from "react";
import { Card, ContainerCurrentFormationStaff, CardContainer } from "./styles";
import { searchAndFilter } from "../../../services/SearchAndFilter";
import { CurrengGroups } from "../../../services/CurrengGroups";

interface Group {
  groupName: string;
  car: string;
  userName: string[];
}

export function CurrentGroupFormation() {
  const [currentGroup, setCurrentGroup] = useState<Group[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const currentGroupReturn = await CurrengGroups();

    if (currentGroupReturn) {
      setCurrentGroup(currentGroupReturn);
    }
  }
  return (
    <ContainerCurrentFormationStaff>
      <h3>Formação atual das equipes:</h3>
      <CardContainer>
        {currentGroup.map((group) => {
          return (
            <Card key={group.groupName}>
              <h3>Equipe {group.groupName}</h3>
              {group.userName.map((name) => {
                return <h4 key={name}>Técnico:{name}</h4>;
              })}
              <h4>Veiculo:{group.car}</h4>
            </Card>
          );
        })}
      </CardContainer>
    </ContainerCurrentFormationStaff>
  );
}
