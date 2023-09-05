import { nanoid } from "nanoid";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface AttendanceFormI {
  userCreator: string;
  attendant: string;
  attendanceProtocol: string;
  meansOfAttendance: string;
  reason: string;
  customerName: string;
  customerEmail: string;
  customerPhoneNumber: string;
  customerPosition: string;
  poleId: string;
  requestDescription: string;
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
  const { user } = JSON.parse(localStorage.getItem("current_user") || "{}");

  const initialState: AttendanceFormI = {
    userCreator: user.id,
    attendant: user.name,
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
