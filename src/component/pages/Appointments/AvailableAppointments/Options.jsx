import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";

const Options = ({ serves, setTreatment }) => {
  const { user } = useContext(AuthContext);
  const { name, slots } = serves;
  return (
    <div>
      <div className="card glass m-5">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
          <p>
            {slots.length === 0 ? "" : slots.length}
            {slots.length > 1 ? " spaces" : "No Spaces"} Available
          </p>
          <div className="card-actions ">
            {user ? (
              <label
                disabled={slots.length === 0}
                htmlFor="appointmentModel"
                onClick={() => {
                  setTreatment(serves);
                }}
                className="btn bg-sky-400 duration-300 hover:bg-[#D0011C] ease-out border-none w-full"
              >
                Book Appointment
              </label>
            ) : (
              <Link
                to={"/login"}
                className="btn bg-sky-400 duration-300 hover:bg-[#D0011C] ease-out border-none w-full"
              >
                <label>Plage Login First</label>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
