// import React, { useEffect } from "react";
// import useSnakeStore from "../store/useSnakeStore";
// import snakeImage from "../assets/snake.png";

// function GridBox({ x, y }) {
//   const movement = useSnakeStore((state) => state.movement);

//   // Ensure safe access
//   const lastPair = Object.entries(movement).at(-1) || [null, null];
//   const [direction, position] = lastPair;
//   const [posX, posY] = position || [null, null];

//   useEffect(() => {
//     console.log("Updated movement:", movement);
//   }, [movement]);

//   return (
//     <div className="border-1 w-[60px] h-[60px]">
//       {posX !== null && posY !== null && x === posX && y === posY && (
//         <img src={snakeImage} alt="Snake" className="w-16 h-16" />
//       )}
//     </div>
//   );
// }

// export default GridBox;

import React, { useEffect } from "react";
import useSnakeStore from "../store/useSnakeStore";
import snakeImage from "../assets/snake.png";

function GridBox({ x, y }) {
  const movement = useSnakeStore((state) => state.movement.position);
  const setlength = useSnakeStore((state) => state.setLength);
  useEffect(() => {
    console.log("Updated movement:", movement);
  }, [movement]);

  return (
    <div className="border-1 w-[60px] h-[60px]">
      {movement[0] === x && movement[1] === y && (
        <img src={snakeImage} alt="Snake" className="w-16 h-16" />
      )}
    </div>
  );
}

export default GridBox;

