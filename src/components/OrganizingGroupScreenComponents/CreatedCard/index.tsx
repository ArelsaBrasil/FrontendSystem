import { X } from "@phosphor-icons/react";
import { ButtonDeleteItem, StyledCreatedCard } from "./styles";

export function CreatedCard({ group, deletGroup }: TGroupCompositionProps) {
  return (
    <StyledCreatedCard>
      <div>
        <ButtonDeleteItem onClick={() => deletGroup(group)}>
          <X size={12} weight="bold" color="#fff" />
        </ButtonDeleteItem>
      </div>
      <h4>Nome do Grupo:{group.groupName}</h4>
      <h4>{group.car}</h4>
      {group.usersName.map((name: string, i) => (
        <p key={i}>{name}</p>
      ))}
    </StyledCreatedCard>
  );
}
