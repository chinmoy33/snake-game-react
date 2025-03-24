import React, { useState } from "react";
import videoSrc from "../assets/video2.mp4";
import useSnakeStore from '../store/useSnakeStore.js';
function VideoModal() {
    const gameOver=useSnakeStore((state)=>state.gameOver);
    const setGameOver=useSnakeStore((state)=>state.setGameOver);
    const score=useSnakeStore((state)=>state.score)
  return (
    gameOver && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 backdrop-blur-md z-50">
        <div className="relative w-[603px] h-[320px] bg-black rounded-lg shadow-lg flex justify-center items-center">
          

          {/* Video */}
          <video width="600" height="600" autoPlay loop muted playsInline className="rounded-lg">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute ml-2 h-[50px] top-2 left-1/2 -translate-x-1/2  text-red-600 text-5xl px-3 py-1 m-0 rounded-full">
              {`Score : ${score}`}
          </div>
          {/* Close Button */}
          <button
            onClick={() => setGameOver()}
            className="absolute h-[50px] bottom-10 left-1/2 -translate-x-1/2 bg-red-500 text-2xl text-white px-3 py-1 rounded-full hover:bg-red-600"
            >
            Play again?
           </button>

        </div>
      </div>
    )
  );
}

export default VideoModal;
