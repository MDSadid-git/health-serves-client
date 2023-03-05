import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLoging = (data) => {
    console.log(data);
  };
  return (
    <footer className="text-left  bg-gray-800 flex justify-center mt-28 font-poppins-em">
      <div className="container w-3/4">
        <div className="p-10 bg-gray-800 text-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5">
              <h4 className="text-2xl">Doctors Serves</h4>
              <address>
                Narayanganj, Dhaka <br />
                3117 Road <br />
                Bangladesh <br />
                <strong>Phone: </strong>01555055609 <br />
                <strong>Email: </strong>doctorServers@gamil.com
              </address>
            </div>
            <div className="mb-5">
              <h4 className="text-2xl">Important Link</h4>
              <ul>
                <li className="hover:text-violet-400 hover:font-bold">Home</li>
                <li className="hover:text-violet-400 hover:font-bold">
                  Student
                </li>
                <li className="hover:text-violet-400 hover:font-bold">
                  Course
                </li>
                <li className="hover:text-violet-400 hover:font-bold">
                  Contract Us
                </li>
                <li className="hover:text-violet-400 hover:font-bold">
                  <Link to={"/careers"}>Careers</Link>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="text-2xl">Our Services</h4>
              <ul>
                <li className="hover:text-violet-400 hover:font-bold">
                  Complete Web Development
                </li>
                <li className="hover:text-violet-400 hover:font-bold">
                  Complete JavaScript course
                </li>
                <li className="hover:text-violet-400 hover:font-bold">
                  Complete Python course
                </li>
                <li className="hover:text-violet-400 hover:font-bold">
                  Complete c++ course
                </li>
                <li className="hover:text-violet-400 hover:font-bold">
                  Complete rust course
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="text-2xl">Join Our Newsletter</h4>
              <p>
                Join 25,000 others and never miss out on new tips, tutorials,
                and more
              </p>
              <form onSubmit={handleSubmit(handleLoging)}>
                <div className="form-control w-full ">
                  <label className="label block m-0">
                    <span className="label-text">Enter your work Email</span>
                  </label>
                  <input
                    type="email"
                    className=" my-2 p-1 rounded w-full"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <p className="text-red-500">Email is required</p>
                  )}
                  <input
                    className="bg-violet-700 hover:bg-violet-400 text-white hover:text-black mt-1 font-bold rounded w-full p-1"
                    type="submit"
                    value={`Start Now`}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="text-center py-5 bg-gray-800 text-gray-200"></div>
      </div>
    </footer>
  );
};

export default Footer;
