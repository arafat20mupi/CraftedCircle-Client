/* eslint-disable react/prop-types */

import { GoArrowRight } from "react-icons/go";
import { PiMapPinAreaFill } from "react-icons/pi";
import { TbReportMoney } from "react-icons/tb";
import { MdOutlineAddHomeWork, MdWorkHistory } from "react-icons/md";
import { Link } from 'react-router-dom';

import toast from "react-hot-toast";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";

const JobDetails = ({ toggleDetails, closeDetails, isOpen, job }) => {
  const { user } = useAuth()
  const axios = useAxiosPublic()
  if (!job) {
    return; // Early return if blog is undefined
  }

  const {
    jobTitle,
    location,
    longDescription,
    responsibilities,
    requirements,
    salaryRange,
    employmentType,
    remoteOption,
    experience,
    date,
    _id
  } = job;

  const formattedDate = new Date(date).toISOString().split('T')[0];



  const SaveJob = async () => {
    try {
      const response = await axios.put(`/api/saveJobs/${_id}`, { email: user.email, id: user.uid });
      if (response.status === 200) {
        toast.success('Job saved successfully!');
        console.log(response);
      } else {
        toast.error('Failed to save job');
      }
    } catch (e) {
      console.error(e);
      toast.error('An error occurred');
    }
  };



  return (
    <>
      {isOpen && (
        <div
          id="overlay"
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={closeDetails}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 z-40 w-5/6 md:w-10/12 p-4 pt-44 overflow-y-auto transition-transform shadow-xl ${isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out bg-white shadow-lg h-full`}
      >
        <button
          onClick={toggleDetails}
          className="text-gray-500 hover:text-gray-700 text-3xl"
        >
          <GoArrowRight />
        </button>

        <div className="px-2 grid grid-cols-1 sm:grid-cols-3 gap-2 md:mt-5 ">
          <div className="col-span-1 sm:col-span-2 space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold">{jobTitle}</h2>
            <div className="flex flex-col sm:flex-row justify-between">
              <p className="text-sm sm:text-base">Posted Date: {formattedDate}</p>
              <div className="flex items-center gap-2 text-sm">
                <PiMapPinAreaFill className="text-lg sm:text-xl text-green-500" />
                <p>{location}</p>
              </div>
            </div>
            <hr />
            <h4 className="text-gray-500 text-sm sm:text-base break-words whitespace-pre-wrap">{longDescription}</h4>

            {/* Responsibilities */}
            <div>
              <p className="font-semibold">Responsibilities:</p>
              <ul className="list-disc ml-4 text-gray-500 text-sm sm:text-base ">
                {responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <p className="font-semibold">Requirements:</p>
              <ul className="list-disc ml-4 text-gray-500 text-sm sm:text-base">
                {requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Project Details */}
            <div>
              <p className="font-semibold">Experience:</p>
              <div className="text-gray-500 text-sm sm:text-base">
                <p>{experience}</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg p-4 border-l ">
            <div className="mb-4 text-gray-500 shadow-lg rounded-lg p-3 bg-green-50">
              <p>
                You’ll need to attend exam & viva as per the company rules and
                regulations. Make sure you understand all.
              </p>
              <a href="#" className="text-green-600 underline">
                Learn more
              </a>
            </div>
            <Link state={{ job }} to={'/applyJob'}>
              <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded w-full mb-2">
                Apply Now
              </button>
            </Link>

            <button onClick={SaveJob} className="border-2 border-green-500 text-green-500 font-semibold py-2 px-4 rounded w-full mb-4">
              Save job
            </button>

            <div className="flex items-center mb-2">
              <span className="text-green-500 font-semibold mr-2">
                Flag as inappropriate
              </span>
            </div>

            <div className="text-gray-700 mb-4">
              <p>
                Response for the job: <span className="font-bold">20</span>
              </p>
            </div>
          </div>

          {/* Salary and Employment Type */}
          <div className="flex flex-col gap-8 rounded-lg col-span-1 sm:col-span-2 drop-shadow-2xl">
            <div className="flex justify-around pt-4">
              <div className="flex bg-green-50 shadow-xl hover:shadow-green-500 hover:bg-white rounded-lg p-4 sm:p-6 items-center gap-3 transition-transform duration-300 hover:scale-110">
                <TbReportMoney className="text-4xl sm:text-5xl text-green-500" />
                <div>
                  <p className="text-sm sm:text-base">{salaryRange}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Salary Range</p>
                </div>
              </div>

              <div className="flex bg-green-50 shadow-xl hover:shadow-green-500 hover:bg-white rounded-lg p-4 sm:p-6 items-center gap-3 transition-transform duration-300 hover:scale-110">
                <MdWorkHistory className="text-4xl sm:text-5xl text-green-500" />
                <div>
                  <p className="text-sm sm:text-base">{employmentType}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Employment Type</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex bg-green-50 shadow-xl hover:shadow-green-500 hover:bg-white rounded-lg p-4 sm:p-6 items-center gap-3 transition-transform duration-300 hover:scale-110">
                <MdOutlineAddHomeWork className="text-4xl sm:text-5xl text-green-500" />
                <div>
                  <p className="text-sm sm:text-base">{remoteOption}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Remote Option</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image and Closing Note */}
          <div className="col-span-1 sm:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
              <div className="space-y-2">
                <h1 className="font-semibold text-lg sm:text-2xl">Maybe The Last Apply!</h1>
                <p>Who knows, maybe you will get hired from this apply.</p>
              </div>
              <div>
                <img src={'https://i.ibb.co.com/t4yjddY/Hiring-Confirmed.png'} alt="Hiring Confirmed" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;