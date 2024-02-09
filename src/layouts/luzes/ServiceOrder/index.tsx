import { useState } from "react";
import { MapOsServiceOrderScreen } from "../../../components/MapOsServiceOrderScreen/ServiceOrder";
import { ServiceOrderForm } from "../../../components/MapOsServiceOrderScreen/ServiceOrderForm";
import { PointConfirmation } from "../../../components/MapOsServiceOrderScreen/PointConfirmation";

export function ServiceOrder() {
  const [osStarted, setOsStarted] = useState<boolean>(false);

  function handleSetStarted() {
    osStarted === false && setOsStarted(true);
  }
  return (
    <>
      {!osStarted ? (
        <MapOsServiceOrderScreen buttonStartOS={handleSetStarted} />
      ) : (
        <PointConfirmation />
        // <ServiceOrderForm />
      )}
    </>
  );
}
