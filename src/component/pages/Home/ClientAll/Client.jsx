import React from "react";
import Marquee from "react-fast-marquee";

const Client = () => {
  const logosArr1 = [
    {
      name: "air canada",
      image:
        "https://cdn.create.vista.com/api/media/medium/135128856/stock-photo-male-doctor-with-stethoscope?token=",
    },
    {
      name: "mastercard",
      image:
        "https://img.freepik.com/free-photo/portrait-confident-male-doctor_329181-12190.jpg?w=2000",
    },
    {
      name: "ayre",
      image:
        "https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg",
    },
    {
      name: "brtish council",
      image:
        "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?w=2000",
    },
    {
      name: "cheetos",
      image:
        "https://thumbs.dreamstime.com/b/male-doctor-portrait-isolated-white-background-56744085.jpg",
    },
    {
      name: "crocs",
      image:
        "https://t3.ftcdn.net/jpg/02/25/70/72/360_F_225707294_V0jKFrHm1Bm5mLQjTAhKFplaWQIgdHby.jpg",
    },
  ];

  const logosArr2 = [
    {
      name: "etihadgit",
      image:
        "https://t3.ftcdn.net/jpg/01/30/45/54/360_F_130455409_fTuinPO1LXECv5hlk9VBREnL6yowYUo3.jpg",
    },
    {
      name: "nike",
      image:
        "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
    },
    {
      name: "pepsi",
      image:
        "https://img.freepik.com/free-photo/portrait-smiling-medical-worker-girl-doctor-white-coat-with-stethoscope-pointing-fingers-left-showing-medical-clinic-advertisement-torquoise-background_1258-87675.jpg",
    },
    {
      name: "ziggo",
      image:
        "https://thumbs.dreamstime.com/b/smiling-female-doctor-holding-medical-records-lab-coat-her-office-clipboard-looking-camera-56673035.jpg",
    },
    {
      name: "starbucks",
      image:
        "https://media.istockphoto.com/id/1346711310/photo/portrait-of-smiling-female-doctor-wearing-uniform-standing.jpg?b=1&s=170667a&w=0&k=20&c=MP4Uz3zLO_2i8WGmcYaQgz8mOh2IrRjf5byFhqKRroY=",
    },
    {
      name: "uniliver",
      image:
        "https://media.istockphoto.com/id/1189304032/photo/doctor-holding-digital-tablet-at-meeting-room.jpg?s=612x612&w=0&k=20&c=RtQn8w_vhzGYbflSa1B5ea9Ji70O8wHpSgGBSh0anUg=",
    },
  ];

  return (
    <section className="my-10">
      <h3 className="text-4xl px-10 py-12 text-center lg:text-4xl text-cyan-900 font-bold  lg:w-3/5 mx-auto">
        Our All Doctors
      </h3>
      <Marquee direction="right" speed={50} pauseOnHover>
        {logosArr1.map((logo) => (
          <div className="w-60" data-aos="fade-down">
            <img className="w-4/6" src={logo.image} alt="" />
          </div>
        ))}
      </Marquee>

      <Marquee direction="left" speed={50} pauseOnHover>
        {logosArr2.map((logo) => (
          <div className="w-60" data-aos="fade-up">
            <img className="w-4/6" src={logo.image} alt="" />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Client;
