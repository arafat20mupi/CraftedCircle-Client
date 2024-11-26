import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import signup_Animation from "../../../public/Animation.json";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa6";
import toast from "react-hot-toast";

const SignIn = () => {
  const navigate = useNavigate();
  const { signIn, signGoogle } = useContext(AuthContext);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      await signIn(email, password);
      toast.success("Signed in successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.message || "Sign-in failed");
      setError("email", { type: "manual", message: "Invalid credentials" });
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signGoogle();
      toast.success("Google signed in successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.message || "Google sign-in failed");
    }
  };

  return (
    <div className="flex items-center justify-center py-6 md:py-10 lg:py-16">
      <div className="lg:w-full lg:max-w-6xl flex flex-col-reverse lg:flex-row-reverse bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Lottie Animation Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-10 bg-blue-500 bg-opacity-5">
          <Lottie
            animationData={signup_Animation}
            className="w-full h-full max-h-[400px] md:max-h-[500px] lg:max-h-[600px]"
          />
        </div>
        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-8 bg-blue-500 bg-opacity-5">
          <h2 className="text-3xl font-bold lg:mt-8 mb-2">
            Welcome Back <span className="text-blue-500 text-4xl">Crafted Circle</span>
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Enter your Email"
                className={`w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: "Password is required" })}
                placeholder="Enter your Password"
                className={`w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Sign In
              </button>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full mt-4 flex items-center justify-center border-blue-500 shadow-md hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded-lg "
            >
              <FaGoogle className="mr-2" />
              Sign Up with Google
            </button>

            {/* Signup Link */}
            <div className="mt-6 flex justify-center items-center mb-3">
              <span className="font-bold pb-4 text-center mt-3">
                Don&apos;t have an account?
                <Link
                  to="/signup"
                  className="text-blue-700 cursor-pointer hover:underline ml-2"
                >
                  Sign Up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
