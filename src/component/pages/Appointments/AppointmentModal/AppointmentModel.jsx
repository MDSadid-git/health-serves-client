import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../contexts/AuthProvider";

const AppointmentModel = ({ treatment, seletDate, setTreatment, refetch }) => {
  const { user } = useContext(AuthContext);
  const handleModleAppointment = (event) => {
    event.preventDefault();
    const from = event.target;
    const slot = from.slot.value;
    const name = from.name.value;
    const email = from.email.value;
    const phone = from.phone.value;
    const bookAppontment = {
      appointmentDate: format(seletDate, "PP"),
      treatment: treatment?.name,
      patient: name,
      slot,
      email,
      phone,
    };
    fetch("https://health-serves-server-sadid-git.vercel.app/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookAppontment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Booking Confirmed!!!");
          refetch();
          setTreatment(null);
        } else {
          toast.error(data.message);
        }
      });
  };
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
          <form onSubmit={handleModleAppointment}>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-sm w-full my-3 text-center py-5"
              value={`${format(seletDate, "PP")}`}
              disabled
            />
            <select
              name="slot"
              className="select select-bordered select-sm w-full "
            >
              {treatment?.slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered input-sm w-full my-3"
              defaultValue={user?.name}
              name="name"
              required
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-sm w-full my-3"
              defaultValue={user?.email}
              readOnly
              name="email"
            />
            <input
              type="text"
              placeholder="Phone"
              className="input input-bordered input-sm w-full my-3"
              name="phone"
              required
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
