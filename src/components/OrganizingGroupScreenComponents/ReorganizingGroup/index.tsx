import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

import {
  ButtonCreateGroup,
  Card,
  ContainerOrganizingEmployees,
  ContainerSelect,
  ContainerSelected,
} from "./styles";
import { useState } from "react";
import { CreatedCard } from "../CreatedCard";
import { DefiningNewGroups } from "../../../api/DefiningNewGroups";

const nomes = [
  "Antonio",
  "Claudemir",
  "Geraldo",
  "Hamilton",
  "Ivanaldo",
  "Jailton",
  "Edivaldo",
];

type TGroupComposition = {
  groupName: string;
  car: string;
  manager: number;
  usersName: string[];
};
const initialGroupComposition: TGroupComposition = {
  groupName: "",
  car: "",
  manager: 1,
  usersName: [""],
};

export function ReorganizingGroup() {
  const [groupComposition, setGroupComposition] = useState<TGroupComposition>(
    initialGroupComposition
  );
  const [groupsToSend, setGroupsToSend] = useState<TGroupComposition[]>([]);

  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const handleCheckboxChange = (nome: string) => {
    setSelectedUsers((prevSelectedUsers) => {
      if (prevSelectedUsers.includes(nome)) {
        return prevSelectedUsers.filter((user) => user !== nome);
      } else {
        return [...prevSelectedUsers, nome];
      }
    });

    setGroupComposition((prevGroupComposition) => ({
      ...prevGroupComposition,
      usersName: selectedUsers.includes(nome)
        ? selectedUsers.filter((user) => user !== nome)
        : [...selectedUsers, nome],
    }));
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroupComposition((prevGroupComposition) => ({
      ...prevGroupComposition,
      car: event.target.value,
    }));
  };

  const handleCreateGroup = () => {
    const usersToAdd = selectedUsers.filter(
      (user) => !groupsToSend.some((group) => group.usersName.includes(user))
    );

    const newGroup = {
      ...groupComposition,
      usersName: usersToAdd,
    };

    setGroupsToSend((prevState) => [...prevState, newGroup]);
  };

  const handleDeleteGroup = (groupToDelete: TGroupComposition) => {
    setGroupsToSend((prevGroups) =>
      prevGroups.filter((group) => group !== groupToDelete)
    );
  };

  async function handleDefineNewGroups(e: any) {
    e.preventDefault();
    await DefiningNewGroups(groupsToSend);
    window.location.reload();
  }

  return (
    <ContainerOrganizingEmployees>
      <ContainerSelect>
        <div>
          <div>
            <Card>
              <h3>Eletricistas: </h3>

              <FormGroup>
                {nomes.map((nome) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        disabled={groupsToSend.some((group) =>
                          group.usersName.includes(nome)
                        )}
                        checked={selectedUsers.includes(nome)}
                        onChange={() => handleCheckboxChange(nome)}
                      />
                    }
                    label={nome}
                    key={nome}
                  />
                ))}
              </FormGroup>
            </Card>
          </div>
          <div>
            <Card>
              <h3>Nome da Equipes: </h3>
              <TextField
                sx={{ width: "100%" }}
                id="standard-basic"
                label=""
                variant="standard"
                autoComplete="off"
                type="text"
                value={groupComposition.groupName}
                onChange={(e) => {
                  setGroupComposition({
                    ...groupComposition,
                    groupName: e.target.value,
                  });
                }}
              />
            </Card>
            <Card>
              <h3>Veiculos: </h3>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="Caminhonete"
                  control={<Radio />}
                  label="Caminhonete"
                />
                <FormControlLabel
                  value="Munk"
                  control={<Radio />}
                  label="Munk"
                />
              </RadioGroup>
            </Card>
            <ButtonCreateGroup onClick={handleCreateGroup}>
              Criar Grupo
            </ButtonCreateGroup>
          </div>
        </div>
      </ContainerSelect>
      <ContainerSelected>
        <h3>Equipes:</h3>
        <div>
          <div>
            {groupsToSend.map((group, i) => (
              <CreatedCard
                key={i}
                group={group}
                deletGroup={handleDeleteGroup}
              />
            ))}
          </div>
          <ButtonCreateGroup
            disabled={groupsToSend.length === 0}
            onClick={(e) => handleDefineNewGroups(e)}
          >
            Definir Equipes
          </ButtonCreateGroup>
        </div>
      </ContainerSelected>
    </ContainerOrganizingEmployees>
  );
}
