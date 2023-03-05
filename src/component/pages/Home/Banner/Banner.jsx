import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import doctorImg from "../../../Assets/national-physicians-day.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = () => {
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
          <div className="mx-auto" data-aos="fade-up">
            <TypeAnimation
              sequence={[
                "Do people like attending? ",
                1000,
                "Will be a success or a flop?",
                1000,
                "Are actually satisfied?",
                1000,
                "Our Doctors happy at work?",
                1000,
              ]}
              //  Replacing previous Text
              style={{ fontSize: "32px", fontWeight: 600 }}
              wrapper="h3"
              repeat={Infinity}
            />
            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Best Team of Dedicated Cancer Doctors and World Class Technology
              for Your Treatment. Receive Timely & Comprehensive Cancer
              Treatment at Kokilaben Hospital in Mumbai. Personalised Care.
              Affordable Treatments.
            </p>
            <div>
              <Link to="/login">
                <button className="btn btn:md btn-primary rounded-none my-5 ">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
