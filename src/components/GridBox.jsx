// // import React, { useEffect } from "react";
// // import useSnakeStore from "../store/useSnakeStore";
// // import snakeImage from "../assets/snake.png";

// // function GridBox({ x, y }) {
// //   const movement = useSnakeStore((state) => state.movement);

// //   // Ensure safe access
// //   const lastPair = Object.entries(movement).at(-1) || [null, null];
// //   const [direction, position] = lastPair;
// //   const [posX, posY] = position || [null, null];

// //   useEffect(() => {
// //     console.log("Updated movement:", movement);
// //   }, [movement]);

// //   return (
// //     <div className="border-1 w-[60px] h-[60px]">
// //       {posX !== null && posY !== null && x === posX && y === posY && (
// //         <img src={snakeImage} alt="Snake" className="w-16 h-16" />
// //       )}
// //     </div>
// //   );
// // }

// // export default GridBox;

// import React, { useEffect } from "react";
// import useSnakeStore from "../store/useSnakeStore";
// import snakeImage from "../assets/snake.png";

// function GridBox({ x, y }) {
//   const movement = useSnakeStore((state) => state.movement);
//   const setLength = useSnakeStore((state) => state.setLength);
//   useEffect(() => {
//     console.log("Updated movement:", movement);
//   }, [movement]);

//   if(movement[movement.length-1].position[0]==5 && movement[movement.length-1].position[1]==5)
//   {
//     setLength();
//   }

//   return (
//     <div className="border-1 w-[60px] h-[60px]">
//       {/* {movement[0] === x && movement[1] === y && (
//         <img src={snakeImage} alt="Snake" className="w-16 h-16" />
//       )} */}
//       {movement.forEach(element => {
//         const [x1,y1]=element.position;
//         if(x1==x && y1==y)
//         {
//           return <img src={snakeImage} alt="Snake" className="w-16 h-16" />
//         }
//       })}
//     </div>
//   );
// }

// export default GridBox;
// import React, { useEffect } from "react";
// import useSnakeStore from "../store/useSnakeStore";
// import snakeImage from "../assets/snake.png";

// function GridBox({ x, y }) {
//   const movement = useSnakeStore((state) => state.movement);
//   const setLength = useSnakeStore((state) => state.setLength);

//   useEffect(() => {
//     console.log("Updated movement:", movement);
//   }, [movement]);

//   // Check before accessing `length`
//   if (movement.length > 0 &&
//       movement[movement.length - 1].position[0] === 5 &&
//       movement[movement.length - 1].position[1] === 5) {
//     setLength();
//   }

//   return (
//     <div className="border-1 w-[60px] h-[60px]">
//       {movement.some(({ position }) => {
//         const [x1, y1] = position;
//         return x1 === x && y1 === y;
//       }) && <img src={snakeImage} alt="Snake" className="w-16 h-16" />}
//     </div>
//   );
// }

// export default GridBox;
// import React, { useEffect } from "react";
// import useSnakeStore from "../store/useSnakeStore";
// import snakeImage from "../assets/snake.png";

// function GridBox({ x, y }) {
//   const movement = useSnakeStore((state) => state.movement);
//   const setLength = useSnakeStore((state) => state.setLength);

//   // Run effect when movement changes
//   useEffect(() => {
//     if (movement.length > 0) {
//       const lastPosition = movement[movement.length - 1].position;
//       if (lastPosition[0] === 5 && lastPosition[1] === 5) {
//         setLength(); // ✅ Now it's safe!
//       }
//     }
//   }, [movement, setLength]);

//   return (
//     <div className="border-1 w-[60px] h-[60px]">
//       {movement.some(({ position }) => position[0] === x && position[1] === y) && (
//         <img src={snakeImage} alt="Snake" className="w-16 h-16" />
//       )}
//     </div>
//   );
// }
// export default GridBox;
 //-----------------------------------------------------------------------------------------------------------------------------------------------

// import React, { useEffect } from "react";
// import useSnakeStore from "../store/useSnakeStore";
// import snakeImage from "../assets/snake.png";

// function GridBox({ x, y }) {
//   const movement = useSnakeStore((state) => state.movement);
//   const setLength = useSnakeStore((state) => state.setLength);
//   const length=useSnakeStore((state)=>state.length);
//   const direction=useSnakeStore((state)=>state.direction);
//   // Run effect when movement changes
//   useEffect(() => {
//     if (movement.length > 0) {
//         const lastPosition = movement[movement.length - 1].position;
//         if (lastPosition[0] === 5 && lastPosition[1] === 5) {
//           console.log("setLength is called!");
//             setLength(); // Grow only once
//         }
//     }
// }, [movement,setLength]);


//   return (
//     <div className="border-1 w-[60px] h-[60px] flex justify-center items-center">
//       {movement.map(({ position }, index) => {
//         const [x1, y1] = position;
//         console.log(length);
//         return x1 === x && y1 === y ? index==movement.length-1?(
//           // <img
//           //   key={index} // Ensure a unique key for React
//           //   src={snakeImage}
//           //   alt="Snake"
//           //   className="w-16 h-16"
//           // />
//           <div key={index} className="border-1 w-12 h-12 rounded-full bg-emerald-800">

//           </div>
//         ): direction[index]=="top" || direction[index]=="down"?(<div className="border-1 w-10 h-15 bg-emerald-800 relative">
//             {/* <div className="">

//             </div> */}
//         </div>):<div className="border-1 w-16 h-10 bg-emerald-800 relative">
//             {/* <div className="">

//             </div> */}
//         </div>
//       : null;
//       })}
//     </div>
//   );
// }

// export default GridBox;

import React, { useEffect } from "react";
import useSnakeStore from "../store/useSnakeStore";
import snakeImage from "../assets/snake.png"

function GridBox({ x, y }) {
  const movement = useSnakeStore((state) => state.movement);
  const setLength = useSnakeStore((state) => state.setLength);
  const length = useSnakeStore((state) => state.length);

  useEffect(() => {
    if (movement.length > 0) {
      const lastPosition = movement[movement.length - 1].position;
      if (lastPosition[0] === 5 && lastPosition[1] === 5) {
        setLength();
      }
    }
  }, [movement, setLength]);

  // Helper function to calculate direction based on previous segment
  // const getSegmentDirection = (curr, prev) => {
  //   if (!prev) return null;
  //   const [x1, y1] = curr;
  //   const [x2, y2] = prev;
  //   if (x1 < x2) return "down";    // Current is above → moving down
  //   if (x1 > x2) return "top";     // Current is below → moving up
  //   if (y1 < y2) return "right";   // Current is left → moving right
  //   if (y1 > y2) return "left";    // Current is right → moving left
  //   return null;
  // };

  return (
    <div className="border-1 w-[60px] h-[60px] flex justify-center items-center">
      {movement.map(({ position }, index) => {
        const [x1, y1] = position;

        if (x1 === x && y1 === y) {
          const isHead = index === movement.length - 1;
          // const prevSegment = index > 0 ? movement[index - 1].position : null;
          // const direction = getSegmentDirection(position, prevSegment);

          if (isHead) {
            // HEAD
            return (
              <div
                key={index}
                className="w-12 h-12 rounded-full bg-emerald-900"
              ></div>
              // <img
              //   key={index} // Ensure a unique key for React
              //   src={snakeImage}
              //   alt="Snake"
              //   className="w-16 h-16"
              // />
            );
          } else {
            // BODY
            return (
              <div
                key={index}
                className={`bg-emerald-800 w-10 h-10 rounded-md`}
              ></div>
            );
          }
        }

        return null;
      })}
    </div>
  );
}

export default GridBox;





// import React, { useEffect } from "react";
// import useSnakeStore from "../store/useSnakeStore";
// import snakeImage from "../assets/snake.png"; // 🐍 Snake head image


// function GridBox({ x, y }) {
//   const movement = useSnakeStore((state) => state.movement);
//   const length = useSnakeStore((state) => state.length);
//   const direction = useSnakeStore((state) => state.direction);

//   return (
//     <div className="border-1 w-[60px] h-[60px] flex justify-center items-center">
//       {movement.map(({ position }, index) => {
//         const [x1, y1] = position;

//         if (x1 === x && y1 === y) {
//           if (index === movement.length - 1) {
//             // 🟢 Head with rotation based on direction
//             return (
//               <img
//                 key={index}
//                 src={snakeImage}
//                 alt="Snake Head"
//                 className={`w-16 h-16 transform ${
//                   direction[index] === "down"
//                     ? "rotate-0"
//                     : direction[index] === "right"
//                     ? "rotate-270"
//                     : direction[index] === "left"
//                     ? "rotate-90"
//                     : "rotate-180"
//                 }`}
//               />
//             );
//           } else {
//             // 🟩 Body segments
//             return (
//               direction[index]=="top" || direction[index]=="down"?(<div className="border-1 w-10 h-15 bg-emerald-800 relative">
               
                
              
//                          </div>):<div className="border-1 w-16 h-10 bg-emerald-800 relative">
                             
//                          </div>
//             );
//           }
//         }
//         return null;
//       })}
//     </div>
//   );
// }

// export default GridBox;


// import React, { useEffect, useRef } from "react";
// import useSnakeStore from "../store/useSnakeStore";
// import snakeImage from "../assets/snake.png";

// function GridBox({ x, y }) {
//   const movement = useSnakeStore((state) => state.movement);
//   const setLength = useSnakeStore((state) => state.setLength);
//   const length = useSnakeStore((state) => state.length); // Track length for debugging
//   const hasGrownRef = useRef(false); // Prevent duplicate growth

//   useEffect(() => {
//     console.log("Updated movement:", movement);
//   }, [movement]);

//   useEffect(() => {
//     if (movement.length === 0) return; // Prevent errors

//     const lastSegment = movement[movement.length - 1]?.position;
//     console.log("Last Segment Position:", lastSegment);

//     if (lastSegment && lastSegment[0] === 5 && lastSegment[1] === 5) {
//       if (!hasGrownRef.current) {
//         console.log("Snake is growing! 🐍 Current Length:", length);
//         setLength(); 
//         hasGrownRef.current = true; // Prevent multiple calls
//       }
//     } else {
//       hasGrownRef.current = false; // Reset when leaving (5,5)
//     }
//   }, [movement, length, setLength]); // Depend on `length` to track updates

//   return (
//     <div className="border border-gray-400 w-[60px] h-[60px] flex items-center justify-center">
//       {movement.map((segment, index) => {
//         const [x1, y1] = segment.position;
//         return (x1 === x && y1 === y) ? (
//           <img key={index} src={snakeImage} alt="Snake" className="w-16 h-16" />
//         ) : null;
//       })}
//     </div>
//   );
// }

// export default GridBox;
