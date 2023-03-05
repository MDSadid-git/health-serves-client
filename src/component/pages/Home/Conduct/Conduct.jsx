import React, { useEffect, useState } from "react";
import Button from "../../../Button/Button";
import allDoctor from "../../../Assets/alldoctor.jpg";
import wehiring from "../../../Assets/wehiring.jpg";
import education from "../../../Assets/education.jpg";
import security from "../../../Assets/security.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Conduct = () => {
  const [item, setItem] = useState(1);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="mx-5  lg:mx-auto mt-10" data-aos="zoom-in">
      <div className=" text-base  lg:text-xl font-bold ">
        <div className="flex flex-col lg:flex-row justify-between text-xl font-bold">
          <button
            onClick={() => setItem(1)}
            className={`btn bg-gray-100  hover:bg-gray-200  lg:w-52 mt-4 border-none ${
              item === 1
                ? "bg-sky-400 hover:bg-sky-400 text-white"
                : "text-gray-600"
            } `}
          >
            All Doctors
          </button>
          <button
            onClick={() => setItem(2)}
            className={`btn bg-gray-100  hover:bg-gray-200  lg:w-52 mt-4 border-none ${
              item === 2
                ? "bg-sky-400 hover:bg-sky-400 text-white"
                : "text-gray-600"
            } `}
          >
            Education
          </button>
          <button
            onClick={() => setItem(3)}
            className={`btn bg-gray-100  hover:bg-gray-200  lg:w-52 mt-4 border-none ${
              item === 3
                ? "bg-sky-400 hover:bg-sky-400 text-white"
                : "text-gray-600"
            } `}
          >
            Hiring
          </button>
          <button
            onClick={() => setItem(4)}
            className={`btn bg-gray-100  hover:bg-gray-200  lg:w-52 mt-4 border-none ${
              item === 4
                ? "bg-sky-400 hover:bg-sky-400 text-white"
                : "text-gray-600"
            } `}
          >
            Security
          </button>
        </div>
        {/* Card section */}
        <div>
          <div>
            {item === 1 && (
              <div
                data-aos="flip-up"
                className="flex flex-col lg:flex-row  items-center mt-10 border pb-5 border-gray-600 lg:border-none lg:pb-0 animate__animated animate__zoomIn bg-base-100 shadow-2xl rounded-lg lg:h-[550px]"
              >
                <div className="text-left p-10 lg:w-1/2 lg:pr-0">
                  <div className="lg:w-5/6">
                    <h3 className="text-xl font-bold ">Our All Doctors</h3>
                    <p className="text-base text-gray-500 mt-1 mb-3">
                      Book high-value meetings in seconds and turn scheduling
                      into a competitive Serves.
                    </p>
                  </div>
                  <div className="lg:w-5/6">
                    <h3 className="text-xl font-bold">Save your Life!!!</h3>
                    <p className="text-base text-gray-500 mt-1 mb-3">
                      Years of study, sleepless nights, endless calls. Moments
                      of triumph, moments of despair. Saving lives is a
                      privilege, a duty. Grateful for the opportunity to make a
                      difference.
                    </p>
                  </div>
                  <div className="lg:w-5/6">
                    <h3 className="text-xl font-bold">
                      We give you best Serves
                    </h3>
                    <p className="text-base text-gray-500 mt-1 mb-3">
                      Treating patients with compassion and skill, giving hope
                      and healing. Fulfilling purpose, bringing joy.
                    </p>
                  </div>
                  <Button>View More Details</Button>
                </div>
                <div className="px-3 lg:w-1/2">
                  <img
                    className="lg:h-[520px]  rounded-lg"
                    src={allDoctor}
                    alt=""
                  />
                </div>
              </div>
            )}
          </div>
          <div>
            {item === 2 && (
              <div
                data-aos="flip-up"
                className="flex flex-col lg:flex-row  items-center my-14 border pb-5 border-gray-600 lg:border-none lg:pb-0 animate__animated animate__zoomIn bg-base-100 shadow-2xl rounded-lg lg:h-[550px]"
              >
                <div className="text-left p-10 lg:w-1/2 lg:pr-0">
                  <div className="lg:w-5/6">
                    <h3 className="text-xl font-bold">Drive more retention</h3>
                    <p className="text-base text-gray-500 mt-1 mb-3">
                      Bring all of your experts together and connect with
                      customers at every stage of their journey to build
                      long-lasting partnerships.
                    </p>
                  </div>
                  <div className="lg:w-5/6">
                    <h3 className="text-xl font-bold">Speed up your times</h3>
                    <p className="text-base text-gray-500 mt-1 mb-3">
                      Quickly book time to solve customers’ needs and help them
                      self-serve to support their goals.
                    </p>
                  </div>
                  <div className="lg:w-5/6">
                    <h3 className="text-xl font-bold">Improve health</h3>
                    <p className="text-base text-gray-500 mt-1 mb-3">
                      Regular exercise, healthy diet, good sleep, and stress
                      management. Prevention is key to improving health.
                    </p>
                  </div>
                  <Button>View More Details</Button>
                </div>
                <div className="px-3 lg:w-1/2">
                  <img
                    className="lg:h-[520px]  rounded-lg"
                    src={education}
                    alt="education"
                  />
                </div>
              </div>
            )}
          </div>
          <div>
            {item === 3 && (
              <div
                data-aos="flip-up"
                className="flex flex-col lg:flex-row  items-center my-14 border pb-5 border-gray-600 lg:border-none lg:pb-0 animate__animated animate__zoomIn bg-base-100 shadow-2xl rounded-lg lg:h-[550px]"
              >
                <div className="text-left p-10 lg:w-1/2 lg:pr-0">
                  <div className="lg:w-5/6">
                    <h3 className="text-xl font-bold">Hire Doctors</h3>
                    <p className="text-base text-gray-500 mt-1 mb-3">
                      We are hiring new Doctor to in our Hospital. Give me you
                      Bio.
                    </p>
                  </div>
                  <div className="lg:w-5/6">
                    <h3 className="text-xl font-bold">New doctors</h3>
                    <p className="text-base text-gray-500 mt-1 mb-3">
                      Book interviews in seconds and reduce time-to-fill.
                    </p>
                  </div>
                  <div className="lg:w-5/6">
                    <h3 className="text-xl font-bold">
                      Improve the experience
                    </h3>
                    <p className="text-base text-gray-500 mt-1 mb-3">
                      Eliminate friction and make your recruiting process a
                      competitive advantage.
                    </p>
                  </div>
                  <Button>View More Details</Button>
                </div>
                <div className="px-3 lg:w-1/2">
                  <img
                    className="lg:h-[520px] rounded-lg"
                    src={wehiring}
                    alt=""
                  />
                </div>
              </div>
            )}
          </div>
          <div>
            {item === 4 && (
              <div
                data-aos="flip-up"
                className="flex flex-col lg:flex-row  items-center my-14 border pb-5 border-gray-600 lg:border-none lg:pb-0 animate__animated animate__zoomIn bg-base-100 shadow-2xl rounded-lg lg:h-[550px]"
              >
                <div className="text-left p-10 lg:w-1/2 lg:pr-0">
                  <div className="lg:w-5/6">
                    <h3 className="text-xl font-bold">
                      Maintain doctors security
                    </h3>
                    <p className="text-base text-gray-500 mt-1 mb-3">
                      Stay aligned with your security requirements and reduce
                      risk across the org.
                    </p>
                  </div>
                  <div className="lg:w-5/6">
                    <h3 className="text-xl font-bold">
                      Implement and govern at ease
                    </h3>
                    <p className="text-base text-gray-500 mt-1 mb-3">
                      Eliminate the manual processes of implementing, managing
                      user access and permissions on the platform.
                    </p>
                  </div>
                  <div className="lg:w-5/6">
                    <h3 className="text-xl font-bold">
                      Drive adoption and ROI across teams
                    </h3>
                    <p className="text-base text-gray-500 mt-1 mb-3">
                      Partner with our team to onboard, drive adoption, and
                      identify success metrics to achieve greater value, faster.
                    </p>
                  </div>
                  <Button>View More Details</Button>
                </div>
                <div className="px-3 lg:w-1/2">
                  <img
                    className="lg:h-[520px]  rounded-lg"
                    src={security}
                    alt="security"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conduct;
