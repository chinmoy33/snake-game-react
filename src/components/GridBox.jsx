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

import React, { useEffect, useState,useRef } from "react";
import useSnakeStore from "../store/useSnakeStore";
import snakeImage from "../assets/snake.png"
import appleImage from "../assets/apple.png"

function GridBox({ x, y }) {
  const movement = useSnakeStore((state) => state.movement);
  const setLength = useSnakeStore((state) => state.setLength);
  const length = useSnakeStore((state) => state.length);
  // const [appleX,setAppleX]=useState(5);
  // const [appleY,setAppleY]=useState(5);
  // const [hasSetApple,setHasSetApple]=useState(false);
  const appleX=useSnakeStore((state)=>state.appleX);
  const appleY=useSnakeStore((state)=>state.appleY);
  // let appleX,appleY;
  // const generateApple=()=>{
  //   let count=1;
  //   let a,b;
  //   while(count==1)
  //   {
  //     // appleX = Math.floor(Math.random() * 8);
  //     // appleY = Math.floor(Math.random() * 8);
  //     a=Math.floor(Math.random() * 8);
  //     b=Math.floor(Math.random() * 8);
  //     //setHasSetApple(true);
  //     for(const element of movement)
  //     {
  //       const [elementX,elementY]=element.position;
  //       if(elementX===a && elementY===b)
  //       {
  //           count=1;
  //           break;
  //       }
  //       count=0;
  //     }
  //   }
  //   setAppleX((prev) => a); // Functional update ensures the latest value is used
  //   setAppleY((prev) => b);
  //   setHasSetApple(true);
  // };
  // useEffect(() => {
  //   console.log("Apple updated:", appleX, appleY);
  // }, [appleX, appleY]);
  
  useEffect(() => {
    if (movement.length > 0) {
      // if(!hasSetApple)
      // generateApple();
      const lastPosition = movement[movement.length - 1].position;
      console.log(`old:${appleX},${appleY}`);
      if (lastPosition[0] === appleX && lastPosition[1] === appleY) {
        setLength();
        //setHasSetApple(false);
        //generateApple();
        //setHasSetApple(false);
        console.log(appleX,appleY);
      }
    }
  }, [movement, setLength]);

//   const hasGrown = useRef(false);

// useEffect(() => {
//     if (movement.length === 0) return;
//     const lastPosition = movement[movement.length - 1].position;

//     if (lastPosition[0] === appleX && lastPosition[1] === appleY) {
//         if (!hasGrown.current) {
//             console.log("Apple Eaten at:", appleX, appleY);
//             setLength();
//             generateApple();
//             hasGrown.current = true; // Prevent duplicate growth
//         }
//     } else {
//         hasGrown.current = false;
//     }
// }, [movement,setLength]);

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
    <div className="border-1 border-amber-600 w-[60px] h-[60px] flex justify-center items-center">
      {x===appleX && y===appleY?(<img
                src={appleImage}
                alt="apple"
                className="w-16 h-16"
              />):null}
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


// import React, { useEffect, useState } from "react";
// import useSnakeStore from "../store/useSnakeStore";

// function GridBox({ x, y }) {
//   const movement = useSnakeStore((state) => state.movement);
//   const setLength = useSnakeStore((state) => state.setLength);

//   const [apple, setApple] = useState({ x: Math.floor(Math.random() * 8), y: Math.floor(Math.random() * 8) });

//   // Function to generate a new apple ensuring no overlap with snake
//   const generateApple = () => {
//     let newX, newY;
//     let isOverlapping;
    
//     do {
//       newX = Math.floor(Math.random() * 8);
//       newY = Math.floor(Math.random() * 8);
//       isOverlapping = movement.some(({ position }) => {
//         const [snakeX, snakeY] = position;
//         return snakeX === newX && snakeY === newY;
//       });
//     } while (isOverlapping);
    
//     setApple({ x: newX, y: newY });
//   };

//   // Check if the snake eats the apple
//   useEffect(() => {
//     if (movement.length === 0) return; // Prevent unnecessary execution on first render

//     const head = movement[movement.length - 1].position; // Get snake head position
//     if (head[0] === apple.x && head[1] === apple.y) {
//       setLength(); // Increase snake length
//       generateApple(); // Generate a new apple
//     }
//   }, [movement]); // Run only when movement changes

//   return (
//     <div className="border border-amber-600 w-[60px] h-[60px] flex justify-center items-center">
//       {/* Render Apple */}
//       {x === apple.x && y === apple.y && (
//         <div className="w-12 h-12 rounded-full bg-red-900"></div>
//       )}

//       {/* Render Snake */}
//       {movement.map(({ position }, index) => {
//         const [x1, y1] = position;
//         if (x1 === x && y1 === y) {
//           return (
//             <div
//               key={index}
//               className={`bg-emerald-${index === movement.length - 1 ? "900" : "800"} w-10 h-10 rounded-md`}
//             ></div>
//           );
//         }
//         return null;
//       })}
//     </div>
//   );
// }

// export default GridBox;







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
