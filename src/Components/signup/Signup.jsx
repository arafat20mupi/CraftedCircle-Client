import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { useAuth } from "../../Context/authContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa6";
import "react-toastify/dist/ReactToastify.css";
import signup_Animation from "../../../public/Animation.json";

const SignUp = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    console.log(data);
    const { email, password } = data;
    try {
      await createUser(email, password);
      toast.success("User Created Successfully!");
      navigate("/signin");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleSignUp = () => {
    toast.info("Google Sign Up is currently under construction!");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center py-6 md:py-10 lg:py-16">
      <div className="lg:w-full lg:max-w-6xl flex flex-col-reverse lg:flex-row-reverse bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-8 bg-green-500 bg-opacity-5">
          <h2 className="text-3xl font-bold lg:mt-8 mb-2">
            Welcome To{" "}
            <span className="text-green-500 text-4xl">Career Canvas!</span>
          </h2>
          <p className="text-lg font-semibold">
            The faster you Sign Up, the faster you can build your resume.
          </p>

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
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
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
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
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
                      "Password must contain at least 6 character one letter and one number",
                  },
                })}
                placeholder="Enter your Password"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
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
                    value === password || "Passwords do not match",
                })}
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full text-black font-bold py-2 px-4 rounded-lg border border-green-500 shadow-md hover:bg-green-500 hover:text-white"
            >
              Sign Up
            </button>

            <button
              type="button"
              onClick={handleGoogleSignUp}
              className="w-full mt-4 flex items-center justify-center bg-red-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-red-600"
            >
              <FaGoogle icon={FaGoogle} className="mr-2" />
              Sign Up with Google
            </button>

            <p className="mt-6 text-center font-bold">
              Already have an account?{" "}
              <Link to="/signin" className="font-bold text-green-500">
                Sign In
              </Link>
            </p>
          </form>
        </div>

        {/* Lottie Animation Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-10 bg-green-500 bg-opacity-5">
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
