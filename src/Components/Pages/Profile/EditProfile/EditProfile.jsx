import { useForm } from "react-hook-form";

const EditProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-3xl text-center">Edit Profile</h2>
        {/* Profile Image */}
        <div>
          <label className="block text-gray-700">Profile Image URL</label>
          <input
            {...register("profileImg", {
              required: "Profile image URL is required",
            })}
            className="border rounded-md p-2 w-full"
            placeholder="Profile Image URL"
          />
          {errors.profileImg && (
            <p className="text-red-500">{errors.profileImg.message}</p>
          )}
        </div>

        {/* Name */}
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            {...register("name", {
              required: "Name is required",
              maxLength: 50,
            })}
            className="border rounded-md p-2 w-full"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
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

        {/* Password */}
        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: 6,
            })}
            className="border rounded-md p-2 w-full"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        {/* Skills */}
        <div>
          <label className="block text-gray-700">
            Skills (comma-separated)
          </label>
          <input
            {...register("skill")}
            className="border rounded-md p-2 w-full"
            placeholder="e.g., JavaScript, React, Node.js"
          />
        </div>

        {/* Social Links */}
        <div>
          <label className="block text-gray-700">GitHub Link</label>
          <input
            {...register("link.github")}
            className="border rounded-md p-2 w-full"
            placeholder="GitHub URL"
          />
        </div>

        <div>
          <label className="block text-gray-700">LinkedIn Link</label>
          <input
            {...register("link.linkedin")}
            className="border rounded-md p-2 w-full"
            placeholder="LinkedIn URL"
          />
        </div>

        <div>
          <label className="block text-gray-700">Portfolio Link</label>
          <input
            {...register("link.portfolio")}
            className="border rounded-md p-2 w-full"
            placeholder="Portfolio URL"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-md p-2 mt-4 hover:bg-blue-600 transition"
        >
          Save Profile
        </button>
      </form>
    </>
  );
};

export default EditProfile;
