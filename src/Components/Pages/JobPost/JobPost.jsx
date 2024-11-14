import  { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
const JobPosting = () => {

  const {user}= useAuth()
  const axiosPublic = useAxiosPublic()
  const [jobDetails, setJobDetails] = useState({
    jobTitle: '',
    company: '',
    location: '',
    employmentType: '',
    salaryRange: '',
    remoteOption: '',
    experience : Number,
    jobDescription: '',
    longDescription: '',
    responsibilities: [''],
    requirements: [''],
    skills: [''],
   
    date : new Date().toLocaleDateString(),
    userId : user?.uid
  });

  // Function to handle input change for non-array fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  // Function to handle input change for array fields
  const handleArrayChange = (e, index, field) => {
    const newArray = [...jobDetails[field]];
    newArray[index] = e.target.value;
    setJobDetails({ ...jobDetails, [field]: newArray });
  };

  // Function to add new fields in array sections
  const addField = (field) => {
    setJobDetails({ ...jobDetails, [field]: [...jobDetails[field], ''] });
  };

  // Function to remove a specific field from array sections
  const removeField = (index, field) => {
    const newArray = jobDetails[field].filter((_, i) => i !== index);
    setJobDetails({ ...jobDetails, [field]: newArray });
  };



  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(jobDetails); // Log job details to console
    
    const response = await axiosPublic.post('/api/createJobs', jobDetails); // Send job details to the server
    console.log(response);
    // e.target.reset(); 
    try {
      // Log the response from the server

      // Show SweetAlert modal upon success
      Swal.fire({
        title: 'Success!',
        text: 'Form data submitted successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      });

      
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'There was an error submitting the form data.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
      console.error('Error submitting job details:', error); // Handle any errors
    }
  };


  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto p-10 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-gradient-to-r from-green-400 to-blue-500 mb-8 text-center">Create a Job Posting</h1>

      {/* Basic Job Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={jobDetails.jobTitle}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
            placeholder="Enter the job title"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Company Name</label>
          <input
            type="text"
            name="company"
            value={jobDetails.company}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
            placeholder="Enter the company name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={jobDetails.location}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
            placeholder="Location (e.g., Miami, FL)"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Employment Type</label>
          <input
            type="text"
            name="employmentType"
            value={jobDetails.employmentType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
            placeholder="e.g., Full-time, Part-time"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Salary Range</label>
          <input
            type="number"
            name="salaryRange"
            value={jobDetails.salaryRange}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
            placeholder="e.g., 75000"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Remote Option</label>
          <input
            type="text"
            name="remoteOption"
            value={jobDetails.remoteOption}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
            placeholder="e.g., Remote, On-site"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 font-semibold mb-2">Experience</label>
          <input
            type="number"
            name="experience"
            value={jobDetails.experience}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
            placeholder="e.g., 4+ years required"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 font-semibold mb-2">Job Description</label>
          <textarea
            name="jobDescription"
            value={jobDetails.jobDescription}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
            rows="4"
            placeholder="Provide a detailed job description"
          ></textarea>
        </div>
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-semibold mb-2">Long Description</label>
          <textarea
            name="longDescription"
            value={jobDetails.longDescription}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
            rows="4"
            placeholder="Provide a detailed job description"
          ></textarea>
        </div>
      </div>

      {/* Responsibilities Section */}
      <div className="my-8">
        <label className="block text-gray-700 font-semibold mb-4 text-lg">Responsibilities</label>
        {jobDetails.responsibilities.map((responsibility, index) => (
          <div key={index} className="flex items-center mb-3">
            <input
              type="text"
              value={responsibility}
              onChange={(e) => handleArrayChange(e, index, 'responsibilities')}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
              placeholder="Enter responsibility"
            />
            <button
              onClick={() => addField('responsibilities')}
              className="ml-3 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none"
            >
              <FaPlus />
            </button>
            {jobDetails.responsibilities.length > 1 && (
              <button
                onClick={() => removeField(index, 'responsibilities')}
                className="ml-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
              >
                <FaTrash />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Requirements Section */}
      <div className="my-8">
        <label className="block text-gray-700 font-semibold mb-4 text-lg">Requirements</label>
        {jobDetails.requirements.map((requirement, index) => (
          <div key={index} className="flex items-center mb-3">
            <input
              type="text"
              value={requirement}
              onChange={(e) => handleArrayChange(e, index, 'requirements')}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
              placeholder="Enter requirement"
            />
            <button
              onClick={() => addField('requirements')}
              className="ml-3 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none"
            >
              <FaPlus />
            </button>
            {jobDetails.requirements.length > 1 && (
              <button
                onClick={() => removeField(index, 'requirements')}
                className="ml-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
              >
                <FaTrash />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="my-8">
        <label className="block text-gray-700 font-semibold mb-4 text-lg">Skills</label>
        {jobDetails.skills.map((skill, index) => (
          <div key={index} className="flex items-center mb-3">
            <input
              type="text"
              value={skill}
              onChange={(e) => handleArrayChange(e, index, 'skills')}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
              placeholder="Enter skill"
            />
            <button
              onClick={() => addField('skills')}
              className="ml-3 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none"
            >
              <FaPlus />
            </button>
            {jobDetails.skills.length > 1 && (
              <button
                onClick={() => removeField(index, 'skills')}
                className="ml-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
              >
                <FaTrash />
              </button>
            )}
          </div>
        ))}
      </div>

   
      <button
        type="submit"
        className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none"
      >
        Submit Job Posting
      </button>
    </form>
  );
};

export default JobPosting;