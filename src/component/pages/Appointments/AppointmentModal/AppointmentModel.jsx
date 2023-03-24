import { format } from "date-fns";
import React from "react";

const AppointmentModel = ({ treatment, seletDate }) => {
  return (
    <>
      <input type="checkbox" id="appointmentModel" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="appointmentModel"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatment?.name}</h3>
          <form>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-sm w-full my-3 text-center py-5"
              value={`${format(seletDate, "PP")}`}
              disabled
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-sm w-full my-3"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-sm w-full my-3"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-sm w-full my-3"
            />
            <input
              type="submit"
              value="Submit"
              className="input input-bordered input-sm w-full my-3  bg-sky-400 duration-300 hover:bg-[#D0011C] ease-out text-white font-extrabold"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentModel;
