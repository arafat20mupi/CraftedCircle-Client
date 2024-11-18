import { FaImage } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa6";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import axios from "axios";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;


const HomeCenter = () => {
  const navigate = useNavigate()
  const axiosPublic = useAxiosPublic()
  const { user } = useContext(AuthContext);
  const userData = {
    name: user.displayName,
    img: user.photoURL,
    email: user.email,
    userId: user.uid
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [post, setPost] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPost(file)
    if (file) {
      const fileType = file.type.split('/')[0]; // Extract file type (image or video)

      if (fileType === 'image') {
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
        setSelectedVideo(null); // Clear any selected video
      } else if (fileType === 'video') {
        const videoUrl = URL.createObjectURL(file);
        setSelectedVideo(videoUrl);
        setSelectedImage(null); // Clear any selected image
      }
    }
  };
  const handleRemoveFile = () => {
    setSelectedImage(null);
    setSelectedVideo(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const postText = form.text.value;

    if (!post) {
      console.error("No file selected");
      return;
    }

    const fileType = post.type.split('/')[0]; // Determine if it's an image or video
    let fileUrl = null;

    try {
      // Create FormData to upload the file
      const formData = new FormData();
      formData.append("file", post); // Attach the file
      formData.append("upload_preset", uploadPreset); // Cloudinary upload preset

      // API call to Cloudinary
      const cloudinaryRes = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/${fileType}/upload`,
        formData
      );

      // Retrieve the file URL from Cloudinary's response
      fileUrl = cloudinaryRes.data.secure_url;
      console.log("Uploaded File URL:", fileUrl);

      // Update the post with the uploaded file URL
      const data = {
        userEmail: user.email,
        userUid: user.uid,
        userName: user.displayName,
        userImage: user.photoURL,
        title: postText,
        photo: fileType === "image" ? fileUrl : null,
        video: fileType === "video" ? fileUrl : null,
      };

      axiosPublic.post('api/createPost', data)
        .then((response) => {
          console.log(response.data);

          // Clear the form
          form.reset();
          setIsModalOpen(false);
          navigate('/')
        });

    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
    }
  };


  return (
    <div className="select-none">
      {/* Modal */}
      <dialog open={isModalOpen} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
          </form>
          <form onSubmit={handleSubmit}>
            <div>
              <div className="flex items-center">
                <img
                  src={userData?.img}
                  alt="Profile"
                  className="w-10 ring-1 ring-gray-800 mx-1 rounded-full"
                />
                <h3 className="font-bold text-lg">{userData.name}</h3>
              </div>
              <div>
                <textarea
                  placeholder="Write Something!"
                  name="text"
                  className="my-2 mx-1 p-2 w-full outline-none bottom-0"
                  required
                ></textarea>

              </div>

              {/* File Upload */}
              <div className="">
                {selectedImage ? (
                  <div className="relative mt-4">
                    <button
                      className="absolute top-0 right-0 bg-gray-400 text-white rounded-full m-2 px-2 py-1 text-sm hover:bg-gray-200"
                      onClick={handleRemoveFile}
                    >
                      ✕
                    </button>
                    <img src={selectedImage} alt="Selected" className="max-w-full rounded-lg" />
                  </div>
                ) : selectedVideo ? (
                  <div className="relative mt-4">
                    <button
                      className="absolute top-0 right-0 bg-gray-400 text-white rounded-full m-2 px-2 py-1 text-sm hover:bg-gray-200 z-10"
                      onClick={handleRemoveFile}
                    >
                      ✕
                    </button>
                    <video controls className="max-w-full rounded-lg">
                      <source src={selectedVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div className="rounded-lg border border-black/5 p-10 shadow-lg">
                    <label htmlFor="file">
                      <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-black/50 p-10">
                        <svg
                          width={35}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                        >
                          <path
                            d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7"
                            fill="none"
                            stroke="#2E2E30"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                          <polyline
                            data-name="Right"
                            fill="none"
                            points="7.9 6.7 12 2.7 16.1 6.7"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                          <line
                            fill="none"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            x1="12"
                            x2="12"
                            y1="16.3"
                            y2="4.8"
                          />
                        </svg>
                        <div className="mx-auto rounded-lg cursor-pointer bg-[#008080] hover:bg-[#006666] px-4 py-2 font-medium text-white">
                          Browse
                        </div>
                      </div>
                    </label>
                    <input
                      className="hidden"
                      id="file"
                      name="filedata"
                      type="file"
                      accept="image/*,video/*"
                      required
                      onChange={handleFileChange}
                    />
                  </div>
                )}
              </div>
              <div>
                <button type="submit" className="btn bg-[#008080] hover:bg-[#006666] text-white w-full">
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>

      {/* Home Center Content */}
      <div className="bg-white w-full px-5 py-3 shadow-md rounded-md">
        <div className="flex items-center justify-center">
          <img
            src={userData.img}
            alt="User Avatar"
            className="w-10 rounded-full cursor-pointer"
          />
          <input
            onClick={() => setIsModalOpen(true)}
            type="text"
            className="mx-3 w-full outline-none border-gray-400 border-2 px-5 py-2 rounded-full hover:bg-slate-50 active:border-gray-500"
            placeholder="What's New?"
          />
          <FaImage className="text-green-600 text-3xl cursor-pointer" />
        </div>
        <div className="bg-white px-1 md:px-5 py-3">
          <div className="flex items-center justify-around">
            <span className="text-sm md:text-xl flex items-center cursor-pointer hover:bg-slate-100 duration-200 ring-slate-200 md:ring-1 rounded-md px-2 py-2">
              <FaVideo className="text-red-600 mx-3" />
              Video
            </span>
            <span
              onClick={() => setIsModalOpen(true)}
              className="text-sm md:text-xl flex items-center cursor-pointer hover:bg-slate-100 duration-200 ring-slate-200 md:ring-1 rounded-md px-2 py-2"
            >
              <IoMdPhotos className="text-green-600 mx-3" />
              Media
            </span>
            <span className="text-sm md:text-xl flex items-center cursor-pointer hover:bg-slate-100 duration-200 ring-slate-200 md:ring-1 rounded-md px-2 py-2">
              <MdOutlineEmojiEmotions className="text-yellow-600 mx-3" />
              Event/Feelings
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCenter;
