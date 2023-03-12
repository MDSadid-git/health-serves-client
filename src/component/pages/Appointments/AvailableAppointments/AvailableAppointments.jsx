import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Options from "./Options";

const AvailableAppointments = ({ seletDate }) => {
  const [appointmentServes, setAppointmentServes] = useState([]);
  useEffect(() => {
    fetch("appointmentserves.json")
      .then((res) => res.json())
      .then((data) => setAppointmentServes(data));
  }, []);
  return (
    <div className="my-20">
      <p className="text-center my-5">
        You have selected Date: {format(seletDate, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
        {appointmentServes.map((serves) => (
          <Options serves={serves} key={serves._id} />
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointments;
