import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import Lottie from 'lottie-react';
import 'animate.css';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import signup_Animation from '../../../public/Animation.json'
const SignUp = () => {
  // const { createUser, signInWithGoogle, UpdateProfile } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    if (password.length < 5) {
      toast.error('Password must be at least 5 characters long');
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error('Password must have at least one uppercase letter');
      return false;
    }
    if (!/[a-z]/.test(password)) {
      toast.error('Password must have at least one lowercase letter');
      return false;
    }
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
      toast.error('Password must have at least one special character');
      return false;
    }
    return true;
  };

  // const handleSignUp = async (e) => {
  //   e.preventDefault();

  //   const email = e.target.email.value;
  //   const pass = e.target.pass.value;
  //   const name = e.target.name.value;
  //   const role = 'admin'
    
  //   if (!validatePassword(pass)) return;

  //   setLoading(true);
  //   try {
  //     const result = await createUser(email, pass);
  //     await UpdateProfile(name, role);
  //     toast.success('User Created Successfully!!');
  //     navigate('/');
  //   } catch (error) {
  //     toast.error(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleGoogle = async () => {
  //   setLoading(true);
  //   try {
  //     const result = await signInWithGoogle();
  //     toast.success('User Created Successfully!!');
  //     navigate('/');
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="flex items-center py-6 md:py-10 lg:py-16 justify-center">
      <div className="lg:w-full lg:max-w-6xl flex flex-col-reverse lg:flex-row-reverse bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-8 bg-green-500 bg-opacity-5">
          <h2 className="animate__animated animate__bounceIn text-3xl font-bold lg:mt-8 mb-2">
            Welcome To <span className='text-green-500 text-4xl'>Career Canvas!</span>
          </h2>
          <p className="text-lg font-semibold">
            The faster you Sign Up, the faster you can build your resume.
          </p>

          <form 
          // onSubmit={handleSignUp}
           className="mt-6">
            <div className="mb-4 animate__animated animate__lightSpeedInLeft">
              <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your Name"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
              />
            </div>

            <div className="mb-4 animate__animated animate__lightSpeedInLeft">
              <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your Email"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
              />
            </div>

            <div className="mb-4 animate__animated animate__lightSpeedInRight">
              <label className="block text-sm font-bold mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="pass"
                required
                placeholder="Enter your Password"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
              />
            </div>

            <button
              type="submit"
              className="animate__animated animate__lightSpeedInLeft w-full text-black font-bold py-2 px-4 rounded-lg border border-green-500 shadow-md hover:bg-green-500 hover:text-white hover:shadow-lg"
              disabled={loading}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>

            <button 
            // onClick={handleGoogle}
              className="animate__animated animate__lightSpeedInRight mt-4 w-full text-green-600 bg-white border border-green-500 font-bold py-2 px-4 rounded-lg hover:bg-green-500 hover:text-white flex items-center justify-center"
              disabled={loading}
            >
              <FaGoogle className="mr-3 text-green-800" />
              Sign Up with Google
            </button>
          </form>

          <p className="mt-6 text-center font-bold">
            Already have an account?{' '}
            <Link to="/signin" className="font-bold text-green-500">Sign In</Link>
          </p>

        </div>

        {/* Lottie Animation Section */}
        <div className="animate__animated animate__bounceIn w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-10 bg-green-500 bg-opacity-5">
          <Lottie animationData={signup_Animation} className="w-full h-full max-h-[400px] md:max-h-[500px] lg:max-h-[600px]" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;