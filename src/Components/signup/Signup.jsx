import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa6";
import signup_Animation from "../../../public/Animation.json";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { imageUpload } from "../../Hooks/imageUpload";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SignUp = () => {
  const { createUser, updateProfileData, signGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const axios = useAxiosPublic()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const watchedPassword = watch("password");
  const onSubmit = async (data) => {
    const { name, email, password, photo } = data;

    if (password.length < 6) {
      toast.error("Password should contain at least 6 characters!");
      return;
    }

    try {
      const img = await imageUpload(photo);
      const userCredential = await createUser(email, password);

      await updateProfileData(name, img);

      const userInfo = {
        name,
        email,
        uid: userCredential.user.uid,
        profileImg: img,
        password
      };

      const response = await axios.post("/api/Users", userInfo);
      console.log("User registered:", response.data);

      toast.success("Sign up successful!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Error during sign-up: " + (error.response?.data?.message || error.message));
    }
  };


  const handleGoogleSignUp = () => {
    signGoogle()
      .then(() => {

        toast.success("Google Sign-Up successful!");
        navigate("/");

      })
      .catch(() => {
        toast.error("Error signing up with Google.");
      });
  };

  return (
    <div className="flex items-center justify-center py-6 md:py-10 lg:py-16">
      <div className="lg:w-full lg:max-w-6xl flex flex-col-reverse lg:flex-row-reverse bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-8 bg-blue-500 bg-opacity-5">
          <h2 className="text-3xl font-bold lg:mt-8 mb-2">
            Welcome To{" "}
            <span className="text-blue-500 text-4xl">Crafted Circle</span>
          </h2>
          <p className="text-lg font-semibold">The faster you Sign Up</p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your Name"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Enter your Email"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="name">
                Your Photo
              </label>
              <input
                type="file"
                id="photo"
                {...register("photo", { required: "Photo is required" })}

                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              />
              {errors.photo && (
                <p className="text-red-500">{errors.photo.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                    message:
                      "Password must contain at least 6 characters, one letter, and one number",
                  },
                })}
                placeholder="Enter your Password"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === watchedPassword || "Passwords do not match",
                })}
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full text-black font-bold py-2 px-4 rounded-lg border border-blue-500 shadow-md hover:bg-blue-500 hover:text-white"
            >
              Sign Up
            </button>

            <button
              type="button"
              onClick={handleGoogleSignUp}
              className="w-full mt-4 flex items-center justify-center border-blue-500 shadow-md hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded-lg "
            >
              <FaGoogle className="mr-2" />
              Sign Up with Google
            </button>

            <p className="mt-6 text-center font-bold">
              Already have an account?{" "}
              <Link to="/signin" className="font-bold text-blue-500">
                Sign In
              </Link>
            </p>
          </form>
        </div>

        {/* Lottie Animation Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-10 bg-blue-500 bg-opacity-5">
          <Lottie
            animationData={signup_Animation}
            className="w-full h-full max-h-[400px] md:max-h-[500px] lg:max-h-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
