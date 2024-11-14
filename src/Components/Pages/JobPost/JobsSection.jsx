/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import JobsCard from "./JobsCard";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const JobsSection = () => {
  const [jobs, setJobs] = useState([]);
  const [sortBy, setSortBy] = useState("newest");
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [jobTypeOpen, setJobTypeOpen] = useState(false);
  const [salaryRangeOpen, setSalaryRangeOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const axios = useAxiosPublic();
  // Pagination done
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Filter
  const [experience, setExperience] = useState([]);
  const [jobType, setJobType] = useState([]);
  const [employType, setEmployType] = useState([]);
  const [salaryRange, setSalaryRange] = useState([]);

  // Toggling the dropdowns
  const toggleExperience = () => setExperienceOpen(!experienceOpen);
  const toggleJobType = () => setJobTypeOpen(!jobTypeOpen);
  const toggleSalaryRange = () => setSalaryRangeOpen(!salaryRangeOpen);

  // Fetch jobs from the backend with filtering, sorting, and searching
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`/api/getJobsByFlitterSearch`, {
          params: {
            page: currentPage,
            limit: itemsPerPage,
            sortBy,
            searchQuery,
            experience,
            remoteOption: jobType,
            salaryRange,
            employmentType: employType,
          },
        });

        setJobs(response?.data?.jobs);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJobs();
  }, [
    itemsPerPage,
    axios,
    currentPage,
    sortBy,
    searchQuery,
    experience,
    jobType,
    salaryRange,
    employType,
  ]);


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle JobType filter changes
  const handleJobTypeChange = (type) => {
    setJobType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };
  const handleEmploymentTypeChange = (type) => {
    setEmployType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  // Handle Salary Range filter changes
  const handleSalaryRangeChange = (range) => {
    setSalaryRange((prev) =>
      prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]
    );
  };

  const handleExperienceChange = (type) => {
    setExperience((prev) => {
      if (prev.includes(type)) {
        return prev.filter((level) => level !== type); // Remove if already selected
      } else {
        return [...prev, type]; // Add new selection
      }
    });
  };


  return (
    <div>
      {/* Header Section */}
      <div className="p-6 md:p-14 flex flex-col items-center border-b-4 border-green-500">
        <h1 className="text-center text-4xl md:text-5xl font-semibold  p-3 text-green-500 font-serif border-b-4 border-green-500">
          Jobs
        </h1>
        <p className="text-center text-lg lg:w-2/3 text-gray-600 mt-4">
        Explore a diverse range of job openings or hire top-notch talent for your team. Discover positions that align with your skills and career aspirations, whether you’re looking to advance your professional journey or seeking exceptional candidates to strengthen your workforce. Join our dynamic community and take the next step toward success, connecting with opportunities that inspire and empower your future.
        </p>
      </div>

      {/* Search and Sort Section */}
      <div className="flex flex-col md:flex-row items-center container mx-auto justify-start gap-2 text-green-500 mt-4 md:mt-6">
        <div className="flex justify-end flex-col">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 text-gray-700 border-green-500 rounded-2xl placeholder-gray-500 text-lg bg-white outline-none focus:placeholder-transparent border-2"
            type="text"
            name="search"
            placeholder="Search for jobs"
          />
        </div>
        {/* Sort by Section */}
        <div className="flex flex-row md:flex-row items-center container mx-auto justify-center gap-2 text-green-500 mt-4 md:mt-6">
          <label className="text-lg font-medium text-gray-500">Sort by</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded px-3 text-md py-2 mt-2 md:mt-0"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto mt-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="col-span-1 bg-white shadow-lg text-green-600 p-6 rounded-lg h-auto transition-transform transform ">
          <h2 className="text-2xl font-serif mb-6 text-center text-green-500">Filters Jobs</h2>

          {/* Experience Level Dropdown */}
          <div className="border-b mb-6">
            <div
              className="flex justify-between items-center cursor-pointer py-3 hover:bg-gray-100 transition duration-200"
              onClick={toggleExperience}
            >
              <span className="text-lg font-medium text-gray-700">Experience Level</span>
              <span>{experienceOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
            </div>
            {experienceOpen && (
              <div className="py-2">
                {["0-1", "2-3", "3+"].map((range) => (
                  <label key={range} className="flex items-center mt-3 text-gray-600">
                    <input
                      type="checkbox"
                      className="mr-2 rounded text-green-500 focus:ring-green-400"
                      checked={experience.includes(range)}
                      onChange={() => handleExperienceChange(range)}
                    />
                    {range === "0-1" ? "Beginner" : range === "2-3" ? "Intermediate" : "Expert"}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Job Type Dropdown */}
          <div className="border-b mb-6">
            <div
              className="flex justify-between items-center cursor-pointer py-3 hover:bg-gray-100 transition duration-200"
              onClick={toggleJobType}
            >
              <span className="text-lg font-medium text-gray-700">Job Type</span>
              <span>{jobTypeOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
            </div>
            {jobTypeOpen && (
              <div className="py-2">
                {["FullTime", "PartTime"].map((type) => (
                  <label className="flex items-center mt-3 text-gray-600" key={type}>
                    <input
                      type="checkbox"
                      className="mr-2 rounded text-green-500 focus:ring-green-400"
                      checked={employType.includes(type)}
                      onChange={() => handleEmploymentTypeChange(type)}
                    />
                    {type}
                  </label>
                ))}
                {["OnSite", "Remote", "Hybrid"].map((type) => (
                  <label className="flex items-center mt-3 text-gray-600" key={type}>
                    <input
                      type="checkbox"
                      className="mr-2 rounded text-green-500 focus:ring-green-400"
                      checked={jobType.includes(type)}
                      onChange={() => handleJobTypeChange(type)}
                    />
                    {type}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Salary Range Dropdown */}
          <div className="border-b mb-4">
            <div
              className="flex justify-between items-center cursor-pointer py-3 hover:bg-gray-100 transition duration-200"
              onClick={toggleSalaryRange}
            >
              <span className="text-lg font-medium text-gray-700">Salary Range</span>
              <span>{salaryRangeOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
            </div>
            {salaryRangeOpen && (
              <div className="py-2">
                {["100-500", "500-1000", "1000-5000", "6000-10000","11000-30000","31000-5000","51000-70000","71000+"].map((range) => (
                  <label className="flex items-center mt-3 text-gray-600" key={range}>
                    <input
                      type="checkbox"
                      className="mr-2 rounded text-green-500 focus:ring-green-400"
                      checked={salaryRange.includes(range)}
                      onChange={() => handleSalaryRangeChange(range)}
                    />
                    {range === "5000+" ? "$5K+" : `$${range.split("-").join(" to ")}`}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>


        {/* Jobs Section */}
        <div className="col-span-1 lg:col-span-3 grid grid-cols-1 gap-2 md:gap-2 z-100 " >
          {jobs?.length >= 0 &&
            jobs?.map((job) => <JobsCard key={job._id} job={job} />)}
          {!jobs && <h1>Jobs Not FOund</h1>}

          {/* Pagination Buttons */}
          <div className="mt-4 ml-3 md:ml-0 md:flex justify-center items-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 mx-1 bg-green-500 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-2 py-2 rounded mx-1 ${currentPage === page
                  ? "bg-green-700 text-white"
                  : "bg-green-500 text-white"
                  }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-1 bg-green-500 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsSection;