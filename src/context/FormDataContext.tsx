import { nanoid } from "nanoid";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface AttendanceFormI {
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
  setAttendanceFormOfContext?: (currentForm: AttendanceFormI) => void;
}

type ChildreType = {
  children: JSX.Element;
};

export const FormDataContext = createContext({} as FormDataContextI);

export function FormDataProvider({ children }: ChildreType) {
  const initialState = {
    attendant: "",
    attendanceProtocol: "",
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

  return (
    <FormDataContext.Provider
      value={{
        attendanceFormOfContext,
        setCurrentAttendanceForm,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
}