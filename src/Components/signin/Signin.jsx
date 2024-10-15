import { useForm } from "react-hook-form";

import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign In clicked");
  };

  return (
    <div className="flex h-screen">
      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://www.istockphoto.com/photo/no-better-adventure-buddy-gm1265024528-370657105?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffree-images&utm_medium=affiliate&utm_source=unsplash&utm_term=free+images%3A%3Areduced-affiliates%3Aquarter')`,
        }}
      ></div>

      <div className="w-1/2 flex items-center justify-center p-6 bg-white shadow-md rounded-md">
        <div className="max-w-md w-full">
          <h1 className="text-center text-blue-700 font-bold mb-4">
            Welcome back!
          </h1>
          <h2 className="text-bold text-black pb-3">
            The faster you login, the faster you can build your resume.
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors?.email?.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors?.password?.message}
                </p>
              )}
            </div>
            <div className="flex justify-between">
              <input
                type="checkbox"
                id="rememberMe"
                {...register("rememberMe")}
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-gray-700">
                Remember Me
              </label>
              <span
                to="/forgot-password"
                className="text-blue-700 hover:underline"
              >
                Forgot Password?
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
          </form>

          <div className="flex flex-col items-center mt-4">
            <p className="text-bold pb-2">Or</p>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <div className="flex items-center justify-center">
                <FaGoogle className="mr-2" />
                Sign In with Google
              </div>
            </button>
          </div>

          <p className="text-bold pb-4 text-center mt-3">
            Don't have an account?
            <Link to={'/signup'} className="text-bold text-blue-700 cursor-pointer">
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
