import Image from 'next/image'
import { redCircle, abstractShape1, abstractShape2 } from '@/assets';


const Home = () => {
  return (
    <div className="flex items-center justify-between h-[80vh] w-full">
      <div className="w-2/3">
        <h1 className="text-9xl font-black">
          <div className="relative ml-5">
            <span className="relative z-0 text-white text-[6rem]">Hello!</span>
            <div className="absolute top-12 -left-4 -z-10 bg-yellow-400 w-[320px] h-[58px] rounded-2xl"></div>
          </div>
          <span className="block text-black">I'm Anass</span>
        </h1>
        <p className="text-xl text-gray-700">I'm a 16 yo passionate full-stack developer</p>
        <button className="py-3 px-8 text-md font-light text-white bg-gradient-to-r from-blue-700 to-[#1581FF] rounded-2xl mt-6 hover:scale-105 transition-all">
          Contact me
        </button>
      </div>
      
    </div>
  );
};

export default Home;
