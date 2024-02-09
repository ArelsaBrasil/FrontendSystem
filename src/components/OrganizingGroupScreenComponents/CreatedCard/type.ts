type TGroupComposition = {
  groupName: string;
  car: string;
  manager: number;
  usersName: string[];
};

type TGroupCompositionProps = {
  group: TGroupComposition;
  deletGroup: (group: TGroupComposition) => void;
};
