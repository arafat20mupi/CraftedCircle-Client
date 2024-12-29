import { MdVerified } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaSort } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
import { IoEarthOutline } from "react-icons/io5";
import Video from "../Video/Video";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { IoIosCamera } from "react-icons/io";
import axios from "axios";

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const Profile = () => {
  const user = useAuth();
  const [userInfo, setUserInfo] = useState()
  const axiosPublic = useAxiosPublic()
  useEffect(() => {
    axiosPublic.get(`/api/users/${user.email}`)
      .then(res => setUserInfo(res.data))
  }, [axiosPublic, user])
  console.log(userInfo);

  const handleCover = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const coverInput = e.target.cover; // Get the file input element
    const coverFile = coverInput.files[0]; // Get the first selected file
    // Create FormData to upload the file
    const formData = new FormData();
    formData.append("file", coverFile); // Attach the file
    formData.append("upload_preset", uploadPreset); // Cloudinary upload preset

    // API call to Cloudinary
    const cloudinaryRes = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,  // Corrected the URL with "image/upload"
      formData
    );

    // Retrieve the file URL from Cloudinary's response
    const fileUrl = cloudinaryRes.data.secure_url;
    console.log("Uploaded File URL:", fileUrl);
    const finalData = {
      coverImg: fileUrl
    }

    try {

      const response = await axios.put(`/api/users/${userInfo._id}`, finalData);
      console.log("Profile Updated:", response.data);
    } catch (error) {
      console.error(
        "Error updating profile:",
        error.response?.data || error.message
      );
    }
  };
  const handleProfile = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const coverInput = e.target.profile; // Get the file input element
    const coverFile = coverInput.files[0]; // Get the first selected file
    // Create FormData to upload the file
    const formData = new FormData();
    formData.append("file", coverFile); // Attach the file
    formData.append("upload_preset", uploadPreset); // Cloudinary upload preset

    // API call to Cloudinary
    const cloudinaryRes = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,  // Corrected the URL with "image/upload"
      formData
    );

    // Retrieve the file URL from Cloudinary's response
    const fileUrl = cloudinaryRes.data.secure_url;
    console.log("Uploaded File URL:", fileUrl);
    const finalData = {
      profileImg: fileUrl
    }

    try {

      const response = await axios.put(`/api/users/${userInfo._id}`, finalData);
      console.log("Profile Updated:", response.data);
    } catch (error) {
      console.error(
        "Error updating profile:",
        error.response?.data || error.message
      );
    }
  };



  let profile_pic =
    "https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=";

  let cover =
    "https://marketplace.canva.com/EAEmGBdkt5A/3/0/1600w/canva-blue-pink-photo-summer-facebook-cover-gy8LiIJTTGw.jpg";
  return (
    <div>
      {/* profile top */}
      <header className="">
        <img src={cover} alt="" className="w-full h-[250px] relative" />
        <div className="absolute left-[1350px] top-80">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <div className="relative left-[100%]">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn w-16 h-16 rounded-full flex items-center justify-center"
              onClick={() => document.getElementById('my_modal_1').showModal()}
            >
              <IoIosCamera className="font-bold text-4xl" />
            </button>

            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <div>
                  <form onSubmit={handleCover} className="flex flex-col items-center gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <label htmlFor="cover" className="text-lg font-medium text-gray-900">Upload Cover Image</label>
                      <input
                        id="cover"
                        name="cover"
                        type="file"
                        accept="image/*"
                        className="file:border file:border-gray-300 file:rounded-md file:px-3 file:py-2 file:text-sm file:cursor-pointer file:bg-gray-50 hover:file:bg-gray-100"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white py-2 px-6 rounded-md mt-4 hover:bg-blue-700 active:scale-95 transition duration-150"
                    >
                      Upload
                    </button>
                  </form>

                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* If there is a button in the form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>

        </div>
      </header>
      <div className="bg-white shadow-md mx-auto py-10 md:px-20 flex justify-between  flex-col md:flex-row items-center">
        <div className="flex flex-col md:flex-row items-center gap-2">
          

        <img
            src={userInfo?.profileImg}
            alt="Profile"
            className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] rounded-full relative"
          />
          <div className="absolute">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <div className="relative left-28">
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn w-12 h-12 rounded-full flex items-center justify-center"
                onClick={() => document.getElementById('my_modal_1').showModal()}
              >
                <IoIosCamera className="font-bold text-2xl" />
              </button>

              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <div>
                    <form onSubmit={handleProfile} className="flex flex-col items-center gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <label htmlFor="profile" className="text-lg font-medium text-gray-900">Upload Cover Image</label>
                        <input
                          id="profile"
                          name="profile"
                          type="file"
                          accept="image/*"
                          className="file:border file:border-gray-300 file:rounded-md file:px-3 file:py-2 file:text-sm file:cursor-pointer file:bg-gray-50 hover:file:bg-gray-100"
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-6 rounded-md mt-4 hover:bg-blue-700 active:scale-95 transition duration-150"
                      >
                        Upload
                      </button>
                    </form>

                  </div>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* If there is a button in the form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>

          </div>

          <div className="mx-3">
            <div className="flex  items-center gap-2 ">
              <h1 className="text-gray-950 text-3xl mx-2 ">{user.displayName}</h1>
              <MdVerified className="text-blue-700" />
            </div>
            <div className="flex items-center gap-2 mx-2 text-gray-950">
              <p className="hover:underline cursor-pointer">100M Followers</p>
              <GoDotFill className="text-sm" />
              <p className="hover:underline cursor-pointer">2 Following</p>
            </div>
          </div>
        </div>
        <div className="flex my-3 items-center space-x-3">
          <Link to={"/editProfile"} className="bg-blue-600  flex items-center px-5 md:px-10 outline-none rounded active:scale-95 duration-150 py-3 cursor-pointer text-white">
            <FaPen className="mx-2" /> Edit Profile
          </Link>
          <button className="bg-gray-600  flex items-center px-5 md:px-10 outline-none rounded active:scale-95 duration-150 py-3 cursor-pointer text-white">
            <FaPlus className="mx-2" /> Add Story
          </button>
        </div>
      </div>
      {/* profile top */}

      {/* Profile middle */}
      <div>
        <div className="grid grid-cols-2 md:grid-cols-1 mx-1 md:mx-20 mt-5 bg-white shadow-md py-5 px-10 rounded-lg">
          <ul className="flex text-center items-center space-x-4 md:space-x-5">
            <li className="text-gray-950 cursor-pointer">Post</li>
            <li className="text-gray-950 cursor-pointer">About</li>
            <li className="text-gray-950 cursor-pointer">Friends</li>
            <li className="text-gray-950 cursor-pointer">Photos</li>
            <li className="text-gray-950 cursor-pointer">Videos</li>
            <li className="text-gray-950 cursor-pointer">Groups</li>
          </ul>
        </div>
      </div>
      {/* Profile middle */}
      {/* Profile bottom */}
      <div className="grid grid-cols-1 md:grid-cols-2 space-x-5 md:mx-20 my-5">
        <div className="flex flex-col gap-5">
          <div className="bg-white shadow-md mx-auto rounded-lg py-10 px-20 flex flex-col gap-5">
            <h1 className="text-2xl text-gray-900">Intro</h1>
            <div className="flex flex-col">
              <p className="text-gray-500 mb-2">
                Professional web developer & programmer passionate about coding
                the future of digital experiences.
              </p>
              <hr />
              <ul className="flex flex-col my-2">
                <li className="flex items-center gap-2 text-gray-900">
                  <FaHome /> From: Bogura,Bangladesh
                </li>
                <li className="flex items-center gap-2 text-gray-900">
                  <HiOfficeBuilding /> Work at: CodeCrafter
                </li>
                <li className="flex items-center gap-2 text-gray-900">
                  <IoEarthOutline />{" "}
                  <a href="https://abdullahalnirob.vercel.app/">
                    abdullahalnirob.vercel.app
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white shadow-md my-5 md:my-0 mx-auto rounded-lg py-10 px-5 md:px-20 flex flex-col gap-5">
            <h1 className="text-2xl text-white">Photos</h1>
            <div className="flex flex-col">
              <div className="grid grid-cols-3">
                <img src={profile_pic} alt="" className="rounded ring-2 ring-gray-500" />
                <img src={profile_pic} alt="" className="rounded ring-2 ring-gray-500" />
                <img src={profile_pic} alt="" className="rounded ring-2 ring-gray-500" />
                <img src={profile_pic} alt="" className="rounded ring-2 ring-gray-500" />
                <img src={profile_pic} alt="" className="rounded ring-2 ring-gray-500" />
                <img src={profile_pic} alt="" className="rounded ring-2 ring-gray-500" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white shadow-md items-center justify-between mx-auto rounded-lg py-7 px-20 flex gap-5">
            <h1 className="text-gray-900 text-xl">Photos</h1>
            <button className="bg-blue-700 flex items-center text-white px-3 py-1 rounded active:scale-95">
              <FaSort className="mx-1" />
              Filter
            </button>
          </div>
          <Video />
        </div>
      </div>
      {/* Profile bottom */}
    </div>
  );
};

export default Profile;
