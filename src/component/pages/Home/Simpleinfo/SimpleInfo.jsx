import React, { useEffect, useState } from "react";
import { CiLocationOn, CiPhone, CiMail, CiClock2 } from "react-icons/ci";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./SimpleInfo.css";
import Aos from "aos";
import "aos/dist/aos.css";

const SimpleInfo = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 3,
        spacing: 15,
      },
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const data = [
    {
      _id: 1,
      title: "health@gmail.com",
      des: "Send us a message",
      icon: <CiMail />,
    },
    {
      _id: 2,
      title: "Mon - Fri: 09:00 - 17:00",
      des: "Support 24/7",
      icon: <CiClock2 />,
    },
    {
      _id: 3,
      title: "183 Dhaka, Narayangnaj",
      des: "Office Address",
      icon: <CiLocationOn />,
    },
    {
      _id: 4,
      title: "(+880)000.000.000",
      des: "Give us a call",
      icon: <CiPhone />,
    },
  ];
  return (
    <div className="hidden lg:block w-full">
      <div className="flex  ">
        <div ref={sliderRef} className="keen-slider">
          {data.map((d) => (
            <div className="keen-slider__slide py-7 flex items-center w-full">
              <div className="flex">
                <h3 className="text-4xl text-[#D0011C] mx-4" data-aos="zoom-in">
                  {d.icon}
                </h3>
                <div data-aos="zoom-in">
                  <h4 className="font-bold">{d.title}</h4>
                  <h4 className="text-[#878787]">{d.des}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <div className="text-left">our Serves</div>
        </div>
      </div>
    </div>
  );
};

export default SimpleInfo;
