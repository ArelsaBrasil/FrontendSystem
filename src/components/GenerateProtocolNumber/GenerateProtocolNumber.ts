import { getMonth } from "date-fns";
import { seekingAttendance } from "../../services/formAttendance";

export async function generateProtocolNumber(attendanceProtocol: string) {
  const searchingAttendance = await seekingAttendance(attendanceProtocol);

  const currentMonth = getMonth(new Date()) + 1;

  // const randonNumberArea = Math.floor(Math.random() * 9) + 1;
  const randonNumberArea = 1;

  const counterOfAttendances = searchingAttendance.idAttendance
    .toString()
    .padStart(6, "0");

  const startCompositionProtocol = `${currentMonth}${randonNumberArea}${counterOfAttendances}`;

  const startProtocolArray = startCompositionProtocol.split("").map(Number);

  let result = 0;

  for (let i = 0; i < startProtocolArray.length; i++) {
    result += startProtocolArray[i] * (i + 1);
  }

  while (result > 9) {
    const digits = result.toString().split("").map(Number);
    result = digits.reduce((acc, curr) => acc + curr, 0);
  }

  const secondCompositionProtocol = `${startCompositionProtocol.substring(
    0,
    4
  )}${result}${startCompositionProtocol.substring(4, 9)}`;

  const secondProtocolArray = secondCompositionProtocol.split("").map(Number);

  result = 0;

  for (let i = secondProtocolArray.length; i > 0; i--) {
    result += i * secondProtocolArray[secondProtocolArray.length - i];
  }

  while (result > 9) {
    const digits = result.toString().split("").map(Number);
    result = digits.reduce((acc, curr) => acc + curr, 0);
  }

  const hash = `${secondCompositionProtocol.substring(
    0,
    7
  )}${result}${secondCompositionProtocol.substring(7, 9)}`;

  return hash;
}
