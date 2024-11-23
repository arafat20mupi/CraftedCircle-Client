import { useForm } from "react-hook-form";
import { useState } from "react";
import { imageUpload } from "../../../../Hooks/imageUpload";

const EditProfile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [profileImgPreview, setProfileImgPreview] = useState("");
  const [coverImgPreview, setCoverImgPreview] = useState("");

  const onSubmit = (data) => {
    const profileImg= imageUpload(data.profileImg)
    const coverImg= imageUpload(data.coverImg)
    const link = {
      github,
      portfolio,
      linkedin
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
            {...register("profileImg", {
              required: "Profile image is required",
              onChange: (e) =>
                setProfileImgPreview(URL.createObjectURL(e.target.files[0])),
            })}
            type="file"
            accept="image/*"
            className="border rounded-md p-2 w-full"
          />
          {errors.profileImg && (
            <p className="text-red-500">{errors.profileImg.message}</p>
          )}
        </div>

        {/* Cover Image */}
        <div>
          <label className="block text-gray-700">Cover Image</label>
          <input
            {...register("coverImg", {
              required: "Cover image is required",
              onChange: (e) =>
                setCoverImgPreview(URL.createObjectURL(e.target.files[0])),
            })}
            type="file"
            accept="image/*"
            className="border rounded-md p-2 w-full"
          />
          {errors.coverImg && (
            <p className="text-red-500">{errors.coverImg.message}</p>
          )}
        </div>

        {/* Name */}
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            {...register("name", { required: "Name is required", maxLength: 50 })}
            className="border rounded-md p-2 w-full"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="border rounded-md p-2 w-full"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
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


          <p><strong>Name:</strong> {formWatch.name || "Not Provided"}</p>

          <p><strong>Email:</strong> {formWatch.email || "Not Provided"}</p>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
