import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleGoogleSignup = () => {
    console.log("Sign up with Google");
  };

  return (
    <div className="flex h-screen">
      <div className="flex w-full h-full">
        <div className="w-1/2">
          <img
            src="https://via.placeholder.com/600"
            alt="Signup Illustration"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="w-1/2 flex items-center justify-center p-6 bg-white shadow-md rounded-md">
          <div className="max-w-md w-full">
            <h1 className="text-center text-gray-700 font-bold mb-2">
              Welcome To CraftedCircle-Client
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="h-full">
                <label className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full h-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors?.name?.message}
                  </p>
                )}
              </div>

              <div className="h-full">
                <label className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors?.email?.message}
                  </p>
                )}
              </div>

              <div className="h-full">
                <label className="block text-gray-700 font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full h-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors?.password?.message}
                  </p>
                )}
              </div>

              <div className="h-full">
                <label className="block text-gray-700 font-bold mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full h-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  {...register("confirmPassword", {
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                />
                {errors?.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors?.confirmPassword?.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
              <div className="flex gap-2 items-center">
                <button
                  type="button"
                  onClick={handleGoogleSignup}
                  className="w-full mt-4 flex justify-center items-center bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <FaGoogle className="mr-2" />
                  Sign Up with Google
                </button>
              </div>
              <p className="text-bold pb-4 text-center">
                Already have an account?
                <Link to={'/signin'} className="text-bold text-blue-700 hover">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
