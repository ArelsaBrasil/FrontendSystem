import { api } from "./api";

type finishAttendanceData = {
  userCreator?: number;
  meansOfAttendance: string;
  reason: string;
  customerName: string;
  customerEmail: string;
  customerPhoneNumber: string;
  customerPosition: string;
  poleId: string;
  requestDescription: string;
};

export async function finishAttendance(data: finishAttendanceData ) {
  try {
    const response = await api.post("/finalizar-atendimento", data);
    return response.data;
  } catch (error) {
    throw new Error("Algum dado inconsistente. ");
  }
}


export async function forwardAttendance(data: finishAttendanceData ) {
  try {
    const response = await api.post("/encaminhar-atendimento", data);
    return response.data;
  } catch (error) {
    throw new Error("Algum dado inconsistente. ");
  }
}
