import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";

const SignInForm = () => {
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
    <div className="flex w-full bg-white overflow-hidden mb-4">
      {/* Form Section */}
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
          <h1 className="text-5xl font-semibold mt-2">Welcome back!</h1>
          <p className="font-medium text-lg text-gray-500 mt-5">
            The faster you login, the faster you can build your resume.
          </p>
          <div className="mt-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
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
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full h-12 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors?.password?.message}
                  </p>
                )}
              </div>

              <div className="mt-8 flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    {...register("rememberMe")}
                    className="mr-2"
                  />
                  <label htmlFor="rememberMe" className="text-gray-700">
                    Remember Me
                  </label>
                </div>

                <a
                  href="/forgot-password"
                  className="text-blue-700 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>

              <div className="mt-8 flex flex-col gap-y-4">
                <button
                  type="submit"
                  className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Sign In
                </button>

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

              <div className="mt-6 flex justify-center items-center mb-3">
                <p className="font-bold pb-4 text-center mt-3">
                  Don't have an account?
                  <span
                    className="text-blue-700 cursor-pointer hover:underline ml-2"
                    onClick={() => console.log("Redirect to Sign Up")}
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Background Section for lg devices */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce" />
        <div className="w-1/3 h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div>
    </div>
  );
};

export default SignInForm;
