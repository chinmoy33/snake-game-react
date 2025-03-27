// import React from 'react'
// import useSnakeStore from '../store/useSnakeStore'
// function Score() {
//     const score=useSnakeStore((state)=>state.score);
//     const setSpeed = useSnakeStore((state)=>state.setSpeed);
//     const speed = useSnakeStore((state)=>state.speed);

//     const getSpeedLabel = () => {
//         switch (speed) {
//           case 1000:
//             return "Your speed : 1x";
//           case 500:
//             return "Your speed : 2x";
//           case 667:
//             return "Your speed : 1.5x";
//           case 2000:
//             return "Your speed : 0.5x";
//           default:
//             return `Your speed : ${1000 / speed}x`; // Handles unexpected values
//         }
//       };
//   return (
//     <div className="relative w-[480px] h-[480px]">
//         <div className="h-[200px] border-2 border-amber-600">
//             <div className="absolute h-[50px] top-5 ml-15 text-2xl">
//                 { getSpeedLabel()}
//             </div>
//             <div className="absolute h-[50px] top-20 left-1/2 -translate-x-1/2 flex items-center justify-center gap-10">
//                 <button
//                 onClick={()=>setSpeed(2000)} 
//                 className="w-[60px] bg-red-500 text-2xl text-white px-3 py-1 rounded-2xl hover:bg-red-600">
//                     0.5x
//                 </button>
//                 <button
//                 onClick={()=>setSpeed(1000)} 
//                 className="w-[60px] bg-red-500 text-2xl text-white px-3 py-1 rounded-2xl hover:bg-red-600">
//                     1x
//                 </button>
//                 <button
//                 onClick={()=>setSpeed(667)} 
//                 className="w-[60px] bg-red-500 text-2xl text-white px-3 py-1 rounded-2xl hover:bg-red-600">
//                     1.5x
//                 </button>
//                 <button
//                 onClick={()=>setSpeed(500)} 
//                 className="w-[60px] bg-red-500 text-2xl text-white px-3 py-1 rounded-2xl hover:bg-red-600">
//                     2x
//                 </button>
//             </div>
//         </div>
        
        
//         <div className="w-[480px] h-[480px] bg-emerald-800 text-red-600 text-4xl flex items-center justify-center">
//             {`Your Score : ${score}`}
//         </div>
//     </div>
    
//   )
// }

// export default Score

import React from "react";
import useSnakeStore from "../store/useSnakeStore";

function Score() {
  const score = useSnakeStore((state) => state.score);
  const setSpeed = useSnakeStore((state) => state.setSpeed);
  const speed = useSnakeStore((state) => state.speed);
  const highscore = useSnakeStore((state) => state.highscore);

  const getSpeedLabel = () => {
    switch (speed) {
      case 1000:
        return "Your speed : 1x";
      case 500:
        return "Your speed : 2x";
      case 667:
        return "Your speed : 1.5x";
      case 2000:
        return "Your speed : 0.5x";
      default:
        return `Your speed : ${1000 / speed}x`;
    }
  };

  return (
    <div className="relative w-[960px] h-[480px] flex items-center gap-4">
      {/* Combined Border for Speed & Buttons */}
      <div className="w-[320px] h-[150px] border-4 border-amber-600 p-4 flex flex-col items-center gap-4">
        {/* Speed Display */}
        <div className="text-2xl font-bold">{getSpeedLabel()}</div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setSpeed(2000)}
            className="w-[60px] bg-red-500 text-2xl text-white px-3 py-1 rounded-2xl hover:bg-red-600"
          >
            0.5x
          </button>
          <button
            onClick={() => setSpeed(1000)}
            className="w-[60px] bg-red-500 text-2xl text-white px-3 py-1 rounded-2xl hover:bg-red-600"
          >
            1x
          </button>
          <button
            onClick={() => setSpeed(667)}
            className="w-[60px] bg-red-500 text-2xl text-white px-3 py-1 rounded-2xl hover:bg-red-600"
          >
            1.5x
          </button>
          <button
            onClick={() => setSpeed(500)}
            className="w-[60px] bg-red-500 text-2xl text-white px-3 py-1 rounded-2xl hover:bg-red-600"
          >
            2x
          </button>
        </div>
      </div>

      {/* Separate Border for Score */}
      <div className="w-[320px] h-[150px] border-4 p-8 border-amber-600 text-red-600 text-4xl flex items-center justify-center font-bold">
        {`Your Score : ${score}`}
      </div>
      <div className="w-[320px] border-4 p-8 border-amber-600 text-red-600 text-4xl flex items-center justify-center font-bold">
        {`High Score : ${highscore}`}
      </div>
    </div>
  );
}

export default Score;

