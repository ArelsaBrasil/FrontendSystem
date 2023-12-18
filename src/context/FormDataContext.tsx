import { nanoid } from "nanoid";
import {
  createContext,
  useState
} from "react";

interface PointIdI {
  pointId: number;
}

interface AttendanceFormI {
  userCreator: string;
  attendant?: string;
  attendanceProtocol: string;
  meansOfAttendance: string;
  reason: string;
  customerName: string;
  customerEmail: string;
  customerPhoneNumber: string;
  customerPosition: string;
  poleId: string;
  requestDescription: string;
  description?: string;
  os?: PointIdI[];
}

interface FormDataContextI {
  attendanceFormOfContext: AttendanceFormI;
  setCurrentAttendanceForm: (currentForm: AttendanceFormI) => void;
  resetAttendanceForm: () => void;
}

type ChildreType = {
  children: JSX.Element;
};

export const FormDataContext = createContext({} as FormDataContextI);

export function FormDataProvider({ children }: ChildreType) {
  const { user } = JSON.parse(localStorage.getItem("current_user") || '{"user": {}}');


  const initialState: AttendanceFormI = {
    userCreator: "",
    attendant: "",
    attendanceProtocol: nanoid(),
    meansOfAttendance: "",
    reason: "",
    customerName: "",
    customerEmail: "",
    customerPhoneNumber: "",
    customerPosition: "",
    poleId: "",
    requestDescription: "",
  };

  const [attendanceFormOfContext, setAttendanceFormOfContext] =
    useState(initialState);

  attendanceFormOfContext.userCreator == "" &&
    setAttendanceFormOfContext({
      ...attendanceFormOfContext,
      userCreator: user.id,
    });
  attendanceFormOfContext.attendant == "" &&
    setAttendanceFormOfContext({
      ...attendanceFormOfContext,
      attendant: "teste",
    });

  function setCurrentAttendanceForm(currentForm: AttendanceFormI) {
    setAttendanceFormOfContext(currentForm);
  }

  function resetAttendanceForm() {
    setAttendanceFormOfContext(initialState);
  }

  return (
    <FormDataContext.Provider
      value={{
        attendanceFormOfContext,
        setCurrentAttendanceForm,
        resetAttendanceForm,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
}
