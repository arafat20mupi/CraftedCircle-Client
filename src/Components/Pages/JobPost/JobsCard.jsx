/* eslint-disable react/prop-types */
import { useState } from "react";
import JobDetails from "./JobsDetails";
import { FaLocationArrow, FaUser } from "react-icons/fa";

const JobsCard = ({ job }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const {
    jobTitle,
    jobDescription,
    skills,
    salaryRange,
    company,
    location,
    employmentType,
    remoteOption,
    experience,
  } = job;

  const toggleDetails = () => {
    setIsOpen(!isOpen);
    setSelectedJob(isOpen ? null : job);
  };

  const closeDetails = () => {
    setIsOpen(false);
    setSelectedJob(null);
  };

  return (
    <>
      <div
        onClick={toggleDetails}
        className="border p-4 sm:p-5 m-2 rounded-lg shadow-md hover:shadow-xl hover:border-b-8  hover:border-green-600 transition-all duration-300 bg-white h-auto sm:h-60 cursor-pointer"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        {/* Job Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-1">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800 hover:text-green-600 transition duration-200 flex items-center gap-2">
            <FaUser className="text-green-600" />
            {jobTitle}
          </h1>
          <p className="text-gray-500 text-sm sm:text-base flex items-center gap-2">
            <FaLocationArrow />
            {location}
          </p>
        </div>

        {/* Job Description */}
        <div className="text-gray-700 text-sm sm:text-base mb-3 line-clamp-3 sm:line-clamp-2 whitespace-pre-wrap">
          {jobDescription}
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-green-400 text-xs sm:text-sm text-white px-3 py-1 rounded-full transition duration-200 hover:bg-green-200"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Job Details */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 text-gray-600 text-sm sm:text-base">
          <p>
            {employmentType} - <span className="font-semibold text-green-500">{remoteOption}</span>
          </p>
          <p>
            Experience: <span className="font-semibold">{experience ? `${experience} Years` : "No Experience Needed"}</span>
          </p>
          <p>
            Company: <span className="font-semibold">{company}</span>
          </p>
          <p className="text-green-600 font-bold">{salaryRange} tk</p>
        </div>
      </div>

      {/* Job Details Modal */}
      {isOpen && selectedJob && (
        <JobDetails
          toggleDetails={toggleDetails}
          closeDetails={closeDetails}
          isOpen={isOpen}
          job={selectedJob}
        />
      )}
    </>
  );
};

export default JobsCard;