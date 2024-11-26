import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { imageUpload } from "../../../../Hooks/imageUpload";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const EditProfile = () => {
  const { email } = useAuth();
  const axios = useAxiosPublic();
  const [profileImgPreview, setProfileImgPreview] = useState("");
  const [coverImgPreview, setCoverImgPreview] = useState("");
  const [mainData , setMainData] = useState();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!email) {
          console.warn("Email is not available");
          return;
        }
        const response = await axios.get(`/api/users/${email}`);
        console.log("User Data:", response.data);
        setMainData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error.response?.data || error.message);
      }
    };
    fetchUserData();
  }, [email, axios]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const profile = await imageUpload(data.profileImg);
    const cover = await imageUpload(data.coverImg);

    const finalData = {
      profileImg: profile,
      coverImg: cover,
      name: data.name,
      intro: data.intro,
      location: data.location,
      work: data.work.split(","),
      // Todo : Education a costomize kora lagba 
      education: data.education.split(","), 
      skill: data.skill.split(","),
      contactNum: data.contactNum,
      uid: email,
      link: {
        github: data.github,
        linkedin: data.linkedin,
        portfolio: data.portfolio,
      },
    };

    console.log(mainData);

    try {
      const response = await axios.put(`/api/users/${mainData._id}`, finalData);
      console.log("Profile Updated:", response.data);
    } catch (error) {
      console.error("Error updating profile:", error.response?.data || error.message);
    }
  };

  const formWatch = watch();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-start p-8 bg-gray-100 gap-6">
      {/* Form Section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full lg:w-1/2 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-3xl font-bold text-center mb-4">Edit Profile</h2>

        {/* Profile Image */}
        <div>
          <label className="block text-gray-700">Profile Image</label>
          <input
            {...register("profileImg", { required: "Profile image is required" })}
            type="file"
            accept="image/*"
            className="border rounded-md p-2 w-full"
            onChange={(e) => setProfileImgPreview(URL.createObjectURL(e.target.files[0]))}
          />
          {errors.profileImg && <p className="text-red-500">{errors.profileImg.message}</p>}
        </div>

        {/* Cover Image */}
        <div>
          <label className="block text-gray-700">Cover Image</label>
          <input
            {...register("coverImg", { required: "Cover image is required" })}
            type="file"
            accept="image/*"
            className="border rounded-md p-2 w-full"
            onChange={(e) => setCoverImgPreview(URL.createObjectURL(e.target.files[0]))}
          />
          {errors.coverImg && <p className="text-red-500">{errors.coverImg.message}</p>}
        </div>

        {/* Name */}
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="border rounded-md p-2 w-full"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* Intro */}
        <div>
          <label className="block text-gray-700">Your Intro</label>
          <input
            {...register("intro", { required: "Intro is required" })}
            className="border rounded-md p-2 w-full"
            placeholder="Short Intro"
          />
          {errors.intro && <p className="text-red-500">{errors.intro.message}</p>}
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700">Location</label>
          <input
            {...register("location")}
            className="border rounded-md p-2 w-full"
            placeholder="Location"
          />
        </div>

        {/* Education */}
        <div>
          <label className="block text-gray-700">Education (Comma Separated)</label>
          <input
            {...register("education")}
            className="border rounded-md p-2 w-full"
            placeholder="Education"
          />
        </div>

        {/* Work */}
        <div>
          <label className="block text-gray-700">Work (Comma Separated)</label>
          <input
            {...register("work")}
            className="border rounded-md p-2 w-full"
            placeholder="Work"
          />
        </div>

        {/* Skills */}
        <div>
          <label className="block text-gray-700">Skills (Comma Separated)</label>
          <input
            {...register("skill")}
            className="border rounded-md p-2 w-full"
            placeholder="Skills"
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-gray-700">Contact Number</label>
          <input
            {...register("contactNum")}
            type="number"
            className="border rounded-md p-2 w-full"
            placeholder="Contact Number"
          />
        </div>

        {/* Links */}
        <div>
          <label className="block text-gray-700">GitHub Link</label>
          <input
            {...register("github")}
            className="border rounded-md p-2 w-full"
            placeholder="GitHub"
          />
        </div>
        <div>
          <label className="block text-gray-700">LinkedIn Link</label>
          <input
            {...register("linkedin")}
            className="border rounded-md p-2 w-full"
            placeholder="LinkedIn"
          />
        </div>
        <div>
          <label className="block text-gray-700">Portfolio Link</label>
          <input
            {...register("portfolio")}
            className="border rounded-md p-2 w-full"
            placeholder="Portfolio"
          />
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-md p-2 mt-4 hover:bg-blue-600 transition"
        >
          Save Profile
        </button>
      </form>

      {/* Preview Section */}
      <div className="w-full lg:w-1/2 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-4">Live Preview</h2>
        <div className="space-y-4">
          <div className="relative h-[320px]">
            {coverImgPreview ? (
              <img
                src={coverImgPreview}
                alt="Cover"
                className="w-full h-[250px] object-cover"
              />
            ) : (
              <div className="w-full h-[250px] bg-gray-200" />
            )}
            {profileImgPreview ? (
              <img
                src={profileImgPreview}
                alt="Profile"
                className="w-[150px] h-[150px] rounded-full object-cover absolute left-0 right-0 mx-auto top-[150px] border-3 border-white"
              />
            ) : (
              <div className="w-[150px] h-[150px] rounded-full bg-gray-300 absolute left-0 right-0 mx-auto top-[150px]" />
            )}
          </div>
          <p>
            <strong>Name:</strong> {formWatch.name || "Not Provided"}
          </p>
          <p>
            <strong>Location:</strong> {formWatch.location || "Not Provided"}
          </p>
          <p>
            <strong>Intro:</strong> {formWatch.intro || "Not Provided"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
