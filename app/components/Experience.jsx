"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const experiences = [
  {
    id: 1,
    title: "Web Developer",
    company: "Vintex Technologies Limited (Internship)",
    startDate: "May/2024",
    endDate: "August/2024",
    details: [
      {
        id: 1,
        detail:
          "Developed a Sacco management system which deals with leanding for saccos and managing their assets including a dashboard that enables them to be upto date with their investment. .",
      },

      {
        id: 2,
        detail:
          "Created a simple bulk mail system which enables one to sent massive mails to group of people at once with one click managing evrything at once.",
      },
    ],
  },

  {
    id: 2,
    title: "Freelancer",
    company: "Feever, Cloud workers",
    startDate: "July/2024",
    endDate: "present",
    details: [
      {
        id: 1,
        detail:
          "Worked closely with the Vintex Technology team to review data by keeping the system up to date and managing their Sacco build system to be up and running all the time and fixing upcoming errors. " ,
      },
    ],
  },
];

const Each = ({ experience }) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="perspective w-70 sm:w-90" onClick={handleCardClick}>
        <div className={`card ${flipped ? "flipped" : ""}`}>
          <div className="card-front bg-white shadow-lg rounded-lg p-6">
            <div className="expBody">
              <h2 className="expT text-xl font-bold text-orange-500">
                {experience.title}
              </h2>
              <div className="date text-sm">
                <span className="text-blue-200 font-semibold text-[18px]">
                  {experience.startDate} - <span>{experience.endDate}</span>
                </span>
              </div>
              <h2 className="company text-lg mt-2">{experience.company}</h2>
            </div>
          </div>
          <div className="card-back shadow-lg rounded-lg p-6">
            <div className="details">
              <div className="detail-title flex items-center gap-2">
                <h4 className="font-bold">Job Details</h4>
                <FontAwesomeIcon icon={faArrowDown} />
              </div>
              <div className="description">
                {experience.details.map((data) => (
                  <div key={data.id} className="describe m-3 flex gap-2">
                    <FontAwesomeIcon
                      icon={faDotCircle}
                      className="text-xs text-blue-600 mt-1"
                    />
                    <p className="text-sm">{data.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section className="text-white py-24" id="experience">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experience
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
        <p
          className="text-xl text-center mb-6 animate__animated animate__heartBeat 
  animate__infinite animate__slower animate-pulse sm:hidden md:hidden lg:hidden
   bg-gradient-to-r from-blue-600 via-purple-700 to-orange-600  bg-clip-text text-transparent"
        >
          Click Each card to view Job Details
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
          {experiences.map((item) => (
            <Each experience={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
