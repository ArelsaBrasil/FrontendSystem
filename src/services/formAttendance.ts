import { api } from "./api";
import { IInitialState } from "../layouts/luzes/CustomerAttendance/index";

export async function finishAttendance(data: IInitialState) {
  try {
    const response = await api.post("/finalizar-atendimento", data);
    return response.data;
  } catch (error) {
    throw new Error("Algum dado inconsistente. ");
  }
}

export async function forwardAttendance(data: IInitialState) {
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

export async function sendEmailProtocol(
  customerEmail: string,
  attendanceProtocol: string,
  requestDescription: string
) {
  try {
    const response = await api.post(`envio-email`, {
      to: customerEmail,
      attendanceProtocol,
      requestDescription,
    });
    return response.data;
  } catch (error) {
    throw new Error("Atendimento não encontrado. ");
  }
}
