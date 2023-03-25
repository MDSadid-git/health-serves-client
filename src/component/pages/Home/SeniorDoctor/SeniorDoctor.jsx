import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Happens = () => {
  const [imageChange, setImageChange] = useState(1);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (imageChange === 2) {
        setImageChange(3);
      } else if (imageChange === 3) {
        setImageChange(4);
      } else if (imageChange === 4) {
        setImageChange(1);
      } else {
        setImageChange(2);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [imageChange]);

  return (
    <div>
      <section className="my-36 lg:w-4/5 mx-auto">
        <section className="my-10">
          <h1 className="text-4xl px-10 text-center lg:text-4xl text-cyan-900 font-bold  lg:w-4/5 mx-auto">
            Our Senior Dortors before and after meetings
          </h1>
          <div className="hidden lg:flex text-left mt-20 mb-10">
            <div className="w-4/6" data-aos="fade-right">
              <div>
                {imageChange === 1 && (
                  <img
                    className="h-[600px] p-8"
                    src="https://thumbs.dreamstime.com/b/senior-doctor-writing-reports-27402552.jpg"
                    alt=""
                    data-aos="fade-right"
                  />
                )}
              </div>
              <div>
                {imageChange === 2 && (
                  <img
                    className="h-[600px] p-8"
                    src="https://thumbs.dreamstime.com/b/portrait-senior-doctor-13798578.jpg"
                    alt=""
                    data-aos="fade-right"
                  />
                )}
              </div>
              <div>
                {imageChange === 3 && (
                  <img
                    className="h-[600px] p-8"
                    src="https://media.istockphoto.com/id/667825072/photo/confident-smiling-doctor.jpg?s=612x612&w=0&k=20&c=-m8DFpfSOeRc18M0lQe6o5bnDs1l988llgMSnsEBcbo="
                    alt=""
                    data-aos="fade-right"
                  />
                )}
              </div>
              <div>
                {imageChange === 4 && (
                  <img
                    className="h-[600px] p-8"
                    src="https://t3.ftcdn.net/jpg/00/56/14/06/360_F_56140630_LBfCi6TnS9NOYvFmNV9VzqDbzaIdvuP7.jpg"
                    alt=""
                    data-aos="fade-right"
                  />
                )}
              </div>
            </div>

            <div
              className="w-2/6 border-l-4 border-[#D0011C]"
              data-aos="fade-left"
            >
              <button
                onClick={() => setImageChange(1)}
                className={`btn btn-ghost mt-3 h-auto text-2xl px-5 font-bold text-left ml-8 py-6 ${
                  imageChange === 1 ? "text-cyan-900" : "text-gray-400"
                }`}
              >
                Let People schedule meeting on your website
              </button>
              <button
                onClick={() => setImageChange(2)}
                className={`btn btn-ghost mt-3 h-auto text-2xl px-5 font-bold text-left ml-8 py-6 ${
                  imageChange === 2 ? "text-cyan-900" : "text-gray-400"
                }`}
              >
                Screen people before they can book with you
              </button>
              <button
                onClick={() => setImageChange(3)}
                className={`btn btn-ghost mt-3 h-auto text-2xl px-5 font-bold text-left ml-8 py-6 ${
                  imageChange === 3 ? "text-cyan-900" : "text-gray-400"
                }`}
              >
                Make people reconfirm meeting with you
              </button>
              <button
                onClick={() => setImageChange(4)}
                className={`btn btn-ghost mt-3 h-auto text-2xl px-5 font-bold text-left ml-8 py-6 ${
                  imageChange === 4 ? "text-cyan-900" : "text-gray-400"
                }`}
              >
                Automatically move a deal along with helpful content
              </button>
            </div>
          </div>

          {/* Mobile Device */}
          <div className="lg:hidden m-5">
            <div data-aos="zoom-in">
              <button
                className={`btn btn-ghost mt-3 h-auto text-2xl font-bold text-left ml-8 py-6 text-cyan-900`}
              >
                Let People schedule meeting on your website
              </button>
              <img
                className=" p-8"
                src="https://thumbs.dreamstime.com/b/senior-doctor-writing-reports-27402552.jpg"
                alt=""
              />
            </div>
            <div data-aos="zoom-in">
              <button
                className={`btn btn-ghost mt-3 h-auto text-2xl font-bold text-left ml-8 py-6 text-cyan-900`}
              >
                Screen people before they can book with you
              </button>
              <img
                className=" p-8"
                src="https://thumbs.dreamstime.com/b/portrait-senior-doctor-13798578.jpg"
                alt=""
              />
            </div>
            <div data-aos="zoom-in">
              <button
                className={`btn btn-ghost mt-3 h-auto text-2xl font-bold text-left ml-8 py-6 text-cyan-900`}
              >
                Automatically move a deal along with helpful content
              </button>
              <img
                className=" p-8"
                src="https://media.istockphoto.com/id/667825072/photo/confident-smiling-doctor.jpg?s=612x612&w=0&k=20&c=-m8DFpfSOeRc18M0lQe6o5bnDs1l988llgMSnsEBcbo="
                alt=""
              />
            </div>
            <div data-aos="zoom-in">
              <button
                className={`btn btn-ghost mt-3 h-auto text-2xl font-bold text-left ml-8 py-6 text-cyan-900`}
              >
                Make people reconfirm meeting with you
              </button>
              <img
                className=" p-8"
                src="https://t3.ftcdn.net/jpg/00/56/14/06/360_F_56140630_LBfCi6TnS9NOYvFmNV9VzqDbzaIdvuP7.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Happens;
