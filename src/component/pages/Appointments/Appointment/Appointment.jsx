import React, { useState } from "react";
import { UseTitle } from "../../../Hooks/UseTitle";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";

const Appointment = () => {
  UseTitle("Appointment");
  const [seletDate, setSeletDate] = useState(new Date());
  return (
    <div className="max-w-[1500px] mx-auto">
      <AppointmentBanner seletDate={seletDate} setSeletDate={setSeletDate} />
      <AvailableAppointments seletDate={seletDate} />
    </div>
  );
};

export default Appointment;
