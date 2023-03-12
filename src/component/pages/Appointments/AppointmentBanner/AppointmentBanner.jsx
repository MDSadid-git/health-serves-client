import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import doctorImg from "../../../Assets/national-physicians-day.jpg";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ seletDate, setSeletDate }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="py-20">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctorImg}
            data-aos="flip-up"
            className="w-1/2 rounded-lg shadow-2xl"
            alt="logo"
          />
          <div data-aos="zoom-in" className="mx-auto">
            <DayPicker
              mode="single"
              selected={seletDate}
              onSelect={setSeletDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
