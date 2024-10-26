
import HomeCenter from './HomeCenter';
const Home = () => {
  return (
    <div className="flex flex-col md:flex-row mx-5 justify-center gap-5">
      <div className="hidden md:block w-1/4 sticky start-0 h-screen bg-white rounded-lg shadow-md"></div>
      <div className="md:w-2/4">
      <HomeCenter/>
      </div>
      <div className="hidden md:block w-1/4 h-screen bg-white rounded-lg shadow-md"></div>
    </div>
  );
};

export default Home;
