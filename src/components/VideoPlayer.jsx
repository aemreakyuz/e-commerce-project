import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Images } from "../assets/Images";
function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to toggle video playback
  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="py-[112px]">
      <div className="w-[75%] relative flex items-center justify-center rounded-lg mx-auto">
        <img
          className="w-full h-[550px] mx-auto rounded-lg shadow-xl"
          src={Images.aboutPage.aboutBg}
          alt="video"
        />
        <div className="w-full h-full absolute bg-black opacity-50 rounded-lg " />
        <div className="flex items-center justify-center w-16 h-16 bg-sky-500 rounded-full absolute shadow-xl">
          <FontAwesomeIcon icon={faPlay} size="xl" className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
