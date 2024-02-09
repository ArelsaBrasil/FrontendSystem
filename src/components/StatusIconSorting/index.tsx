import { ClosedIcon, OpenedIcon } from "./styles";

export function StatusIconSorting({status}: {status:string}) {
  if (Number(status) === 0) {
    return (
      <ClosedIcon>
        <div />
        <p>Solucionado</p>
      </ClosedIcon>
    );
  } else {
    return (
      <OpenedIcon>
        <div />
        <p>Aberto</p>
      </OpenedIcon>
    );
  }
}
