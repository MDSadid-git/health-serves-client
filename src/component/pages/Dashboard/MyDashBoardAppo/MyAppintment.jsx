import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";

const MyAppintment = () => {
  const { user } = useContext(AuthContext);
  const url = `https://health-serves-server-sadid-git.vercel.app/booking?email=${user?.email}`;
  const { data: allBookings } = useQuery({
    queryKey: ["booking", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h3 className="text-center font-bold text-lg my-5">My Appointment</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {allBookings?.map((allData, i) => (
              <tr className="hover">
                <th>{i + 1}</th>
                <td>{allData.patient}</td>
                <td>{allData.treatment}</td>
                <td>{allData.appointmentDate}</td>
                <td>{allData.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppintment;
