import { api } from "./api";

interface finishAttendanceDataI {
  userCreator?: number;
  meansOfAttendance: string;
  reason: string;
  customerName: string;
  customerEmail: string;
  customerPhoneNumber: string;
  customerPosition: string;
  poleId: string;
  requestDescription: string;
}

export async function finishAttendance(data: finishAttendanceDataI) {
  try {
    const response = await api.post("/finalizar-atendimento", data);
    return response.data;
  } catch (error) {
    throw new Error("Algum dado inconsistente. ");
  }
}

export async function forwardAttendance(data: finishAttendanceDataI) {
  try {
    const response = await api.post("/encaminhar-atendimento", data);
    return response.data;
  } catch (error) {
    throw new Error("Algum dado inconsistente. ");
  }
}

export async function seekingAttendance(attendanceProtocol: string) {
  try {
    const response = await api.get(
      `/buscando-atendimento/${attendanceProtocol}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Atendimento não encontrado. ");
  }
}

export async function updateAttendanceProtocol(
  attendanceProtocol: string,
  newAttendanceProtocol: string
) {
  try {
    const response = await api.put(`alterando-numero-protocolo`, {
      attendanceProtocol,
      newAttendanceProtocol,
    });
    return response.data;
  } catch (error) {
    throw new Error("Atendimento não encontrado. ");
  }
}
