import { api } from "./Api";
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

export async function sendEmailProtocol(serviceForm:any) {
  try {
    const response = await api.post(`envio-email`, {
      ...serviceForm,
    });


    return response.data;
  } catch (error) {
    throw new Error("Atendimento não encontrado. ");
  }
}

export async function creatingAttendanceWithSO(serviceForm:any) {
  try {
    const response = await api.post(`atendimento-os`, {
      ...serviceForm,
    });


    return response.data;
  } catch (error) {
    throw new Error("Operação não efetuada com sucesso. ");
  }
}
