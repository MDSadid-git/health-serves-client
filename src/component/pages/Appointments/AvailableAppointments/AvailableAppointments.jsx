import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Loading from "../../../Shared/Loading/Loading";
import AppointmentModel from "../AppointmentModal/AppointmentModel";
import Options from "./Options";
import Aos from "aos";
import "aos/dist/aos.css";

const AvailableAppointments = ({ seletDate }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [treatment, setTreatment] = useState(null);
  const date = format(seletDate, "PP");
  const {
    data: appointmentServes = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentserves", date],
    queryFn: () =>
      fetch(
        `https://health-serves-server-sadid-git.vercel.app/appointmentserves?date=${date}`
      ).then((res) => res.json()),
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="my-20 text-center">
      <p className="text-center my-5">
        You have selected Date: {format(seletDate, "PP")}
      </p>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 "
        data-aos="zoom-in"
      >
        {appointmentServes.map((serves) => (
          <Options
            serves={serves}
            key={serves._id}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <AppointmentModel
          treatment={treatment}
          seletDate={seletDate}
          refetch={refetch}
          setTreatment={setTreatment}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;
