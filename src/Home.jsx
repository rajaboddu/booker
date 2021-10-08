import React from "react";
import Comments from "./components/Comments";
import Events from "./components/Events";
import {
  MovieIcon,
  MusicIcon,
  Notification,
  Qrcode,
  Search,
} from "./components/Icons";
import Movies from "./components/Movies";
import Popular from "./components/Popular";
import Streaming from "./components/Streaming";
import popcorn from "./assests/popcorn.jpg";

const Home = () => {
  return (
    <div>
      {/* top navigator */}
      <div className="bg-gray-800 flex justify-between items-center">
        <div className="flex flex-col ml-2 p-1 justify-center">
          <h2 className="text-white font-semibold text-2xl">
            It All Starts Here
          </h2>
          <p className="text-white font-light text-base">Location &gt;</p>
        </div>
        <div className="flex space-x-4 mr-2">
          <Search />
          <Notification />
          <Qrcode />
        </div>
      </div>
      {/*categories */}
      <div className="flex justify-between p-4 ">
        <div className="flex flex-col items-center">
          <MovieIcon />
          <p>Movies</p>
        </div>
        <div className="flex flex-col items-center">
          <MusicIcon />
          <p>Events</p>
        </div>
        <div className="flex flex-col items-center">
          <MovieIcon />
          <p>Stream</p>
        </div>
      </div>
      {/*Popular Events*/}
      <Popular />
      {/*Movies Now */}
      <Movies />
      {/*Events Now */}
      <Events />
      {/* Streaming Events */}
      <div className="bg-gray-900 my-3">
        <div className=" p-4 background bg-contain bg-no-repeat bg-right">
          <h6 className="text-white text-sm font-light">show booker</h6>
          <div className="flex items-end space-x-2">
            <h1 className="text-white text-xl font-bold">STREAM</h1>
            <h2 className="text-red-500 text-base font-semibold">PREMIERE</h2>
          </div>
          <p className="text-white text-sm font-medium">
            Watch new movies at home, every Friday.
          </p>
        </div>
        <Streaming />
      </div>
      {/*buzz comments */}
      <Comments />
    </div>
  );
};

export default Home;
