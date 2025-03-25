// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import GridBox from './components/GridBox';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import Button from './components/Button';
// import Banner from './components/Banner';
// import video2 from "./assets/video2.mp4"

// import VideoModal from './components/VideoModal';
// import Score from './components/Score';
// function App() {
  
//   const gridSize=8;

//   return (
//     <div>
//       <VideoModal/>
//       <div className="w-screen h-[100px] flex items-center justify-center ml-8 mb-8">
//       <Banner/>
//       </div>
      
//       <div className="w-[100%] h-[100%] flex items-center justify-center">
//       <Score/>
//       <div className="border-1 w-[480px] h-[480px] grid grid-cols-8 grid-rows-8">
//       {Array.from({ length: 64 }).map((_, index) => {
//           const y = index % gridSize; // Row index (previously X)
//           const x = Math.floor(index / gridSize); // Column index (previously Y)
//           return <GridBox key={index} x={x} y={y} />;
//         })}
//       </div>
//       <Button />
//     </div>
//     </div>
    

    
//   )
// }

// export default App

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GridBox from "./components/GridBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "./components/Button";
import video2 from "./assets/video2.mp4";

import VideoModal from "./components/VideoModal";
import Score from "./components/Score";

function App() {
  const gridSize = 8;

  return (
    <div>
      <VideoModal />

      {/* Score Component takes the place of Banner */}
      <div className="w-screen h-[150px] flex items-center justify-center mb-4">
        <Score />
      </div>

      <div className="w-[100%] h-[100%] flex items-center justify-center">
        <div className="border-1 border-amber-600 w-[480px] h-[480px] grid grid-cols-8 grid-rows-8">
          {Array.from({ length: 64 }).map((_, index) => {
            const y = index % gridSize; // Row index
            const x = Math.floor(index / gridSize); // Column index
            return <GridBox key={index} x={x} y={y} />;
          })}
        </div>
        <Button />
      </div>
    </div>
  );
}

export default App;
