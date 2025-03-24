// import toast from "react-hot-toast";
// import { create } from "zustand";

// // const useSnakeStore=create((set)=>({
// //     // selectedUser:null,
// //     // users:[],
// //     // messages:[],
// //     // isUsersloading:false,
// //     // isMessagesLoading:false,

// //     // getUsers:async()=>{
// //     //     set({isUsersLoading:true})
// //     //     try {
// //     //         const res=await axiosInstance.get("/messages/users");
// //     //         set({users:res.data});                 
// //     //     } catch (error) {
// //     //         toast.error(error.response.data.message);
// //     //     }
// //     //     finally{
// //     //         set({isUsersLoading:false})
// //     //     }
// //     // },

// //     // getmessages:async(user_id)=>{
// //     //     try {
// //     //         const res=await axiosInstance.get(`/messages/getmessages/${user_id}`)
// //     //         set({messages:res.data})
// //     //     } catch (error) {
// //     //         toast.error(error.response.data.message);
// //     //     }
// //     //     finally{
// //     //         set({isMessagesLoading:false});
// //     //     }
// //     // },

// //     // setSelectedUsers:(selectedUser)=>{set({selectedUser})}
// //     start:false,
// //     length:1,
// //     movement:{down:[0,0]},
// //     score:0,

// //     setStart:()=>{
// //         set((state)=>({start:!state.start}));
// //     },

// //     setLength:()=>{
// //         set((state)=>({length:state.length+1}));
// //     },

// //     setMovement: ({ direction, position }) => {
// //         set((state) => ({
// //             movement: { ...state.movement, [direction]: position },
// //         }));
        
// //     },    

// //     setScore: ()=>{
// //         set((state) => ({ score:state.score+100}));
// //     }
    
// // }));

// // export default useSnakeStore

// const useSnakeStore = create((set) => ({
//     start: false,
//     length: 1,
//     movement: [{ position: [0, 0] }], // Store only the latest position
//     direction: ["down"], // Track direction separately
//     score: 0,

//     setStart: () => set((state) => ({ start: !state.start })),

//     setLength: () => set((state) => ({ length: state.length + 1 })),

//     setDirection: (newDirection) => {
//         set((state)=>{
//             let i;
//             if(state.length!=state.movement.length){
//                 // let i=0;
//                 // for(i=1;i<state.length;i++)
//                 // {
//                 //     state.direction[i-1]=state.direction[i];
//                 // }
//                 state.direction[-1]=newDirection;   //Change the direction of the last element i.e. head
//                 if(state.length!=state.direction.length)
//                 {
//                     return {direction : [...state.direction,newDirection]};
//                 }
//                 return {direction : [...state.direction]};

//             }
//             for(i=1;i<state.length;i++)
//             {
//                 state.direction[i-1]=state.direction[i];
//             }
//             state.direction[-1]=newDirection;
//             return {direction : [...state.direction]};
//         })},

//     setMovement: () => {
//         set((state) => {
//             let i=0;
//             if(state.length!=state.movement.length)
//             {
//                 const [x, y] = state.movement[state.movement.length-1].position;
//                 let newX = x;
//                 let newY = y;

//                 switch (state.direction[state.direction.length-1]) {
//                     case "left":
//                         newY = y > 0 ? y - 1 : 7;
//                         break;
//                     case "right":
//                         newY = y < 7 ? y + 1 : 0;
//                         break;
//                     case "top":
//                         newX = x > 0 ? x - 1 : 7;
//                         break;
//                     case "down":
//                         newX = x < 7 ? x + 1 : 0;
//                         break;
//                 }
//                 setDirection(state.direction[state.direction.length-1]);
//                 return {movement : [...state.movement,{position:[newX,newY]}]};
//             }
//             const newMovement=state.movement.map(element => {
//                 const [x, y] = element.position;
//                 let newX = x;
//                 let newY = y;
//                 switch (state.direction[i]) {
//                     case "left":
//                         newY = y > 0 ? y - 1 : 7;
//                         break;
//                     case "right":
//                         newY = y < 7 ? y + 1 : 0;
//                         break;
//                     case "top":
//                         newX = x > 0 ? x - 1 : 7;
//                         break;
//                     case "down":
//                         newX = x < 7 ? x + 1 : 0;
//                         break;
//                 }
//                 i++;
//                 return  {position: [newX, newY] };
//             });

//             return { movement: newMovement };
//             // const [x, y] = state.movement[state.movement.length-1].position;
//             // let newX = x;
//             // let newY = y;

//             // switch (state.direction) {
//             //     case "left":
//             //         newY = y > 0 ? y - 1 : 7;
//             //         break;
//             //     case "right":
//             //         newY = y < 7 ? y + 1 : 0;
//             //         break;
//             //     case "top":
//             //         newX = x > 0 ? x - 1 : 7;
//             //         break;
//             //     case "down":
//             //         newX = x < 7 ? x + 1 : 0;
//             //         break;
//             // }

//             // return { movement: { position: [newX, newY] } };
//         });
//     },

//     setScore: () => set((state) => ({ score: state.score + 100 })),
// }));

// export default useSnakeStore;
//---------------------------------------------------------------------------------------------------------------------------------------------------
// import {create} from "zustand";
// const useSnakeStore = create((set) => ({
//     start: false,
//     length: 1,
//     movement: [{ position: [0, 0] }], // Store only the latest position
//     direction: ["down"], // Track direction separately
//     score: 0,

//     setStart: () => set((state) => ({ start: !state.start })),

//     setLength: () => set((state) => ({ length: state.length + 1 })),

//     setDirection: (newDirection) => {
//         set((state)=>{
//             let i;
//             //let updatedDirection=[...state.direction];
//             if(state.length!=state.movement.length){
//                 // let i=0;
//                 // for(i=1;i<state.length;i++)
//                 // {
//                 //     state.direction[i-1]=state.direction[i];
//                 // }
//                 state.direction[state.direction.length-1]=newDirection;   //Change the direction of the last element i.e. head
//                 if(state.length!=state.direction.length)
//                 {
//                     return {direction : [...state.direction,newDirection]};
//                 }
//                 return {direction : [...state.direction]};

//             }
//             for(i=1;i<state.length;i++)
//             {
//                 state.direction[i-1]=state.direction[i];
//             }
//             state.direction[state.direction.length-1]=newDirection;
//             return {direction : [...state.direction]};
//         })},

//     setMovement: () => {
//         set((state) => {
//             let updatedMovement = [...state.movement];
//             let i = 0;
        
//             // Get the current head position
//             const [x, y] = updatedMovement[updatedMovement.length - 1].position;
//             let newX = x;
//             let newY = y;
        
//             switch (state.direction[state.direction.length - 1]) {
//                 case "left":
//                     newY = y > 0 ? y - 1 : 7;
//                     break;
//                 case "right":
//                     newY = y < 7 ? y + 1 : 0;
//                     break;
//                 case "top":
//                     newX = x > 0 ? x - 1 : 7;
//                     break;
//                 case "down":
//                     newX = x < 7 ? x + 1 : 0;
//                     break;
//             }
        
//             // Move all segments forward
//             updatedMovement = [...updatedMovement.slice(1), { position: [newX, newY] }];
        
//             // If snake has grown, add a new segment at the tail
//             if (state.length > state.movement.length) {
//                 const tail = state.movement[0].position; // Get the tail position
//                 updatedMovement.unshift({ position: [...tail] }); // Append new segment at the tail
//             }
        
//             return { movement: updatedMovement };
//         });
        
//     },

//     setScore: () => set((state) => ({ score: state.score + 100 })),
// }));

// export default useSnakeStore;

// import { create } from "zustand";

// const useSnakeStore = create((set) => ({
//     start: false,
//     length: 1,
//     movement: [{ position: [0, 0] }], // Stores all movement positions
//     direction: ["down"], // Tracks direction history
//     score: 0,

//     setStart: () => set((state) => ({ start: !state.start })),

//     setLength: () => set((state) => ({ length: state.length + 1 })),

//     setMovement: (newDirection=null) => {
//         set((state) => {
//             if(!newDirection)
//             {

//             }
//             let updatedDirection = [...state.direction];
    
//             if (state.length !== state.movement.length) {
//                 updatedDirection.push(newDirection);
//             } else {
//                 updatedDirection = [...updatedDirection.slice(1), newDirection];
//             }
    
//             // New Head Position
//             const [headX, headY] = state.movement[state.movement.length - 1].position;
//             let newX = headX;
//             let newY = headY;
    
//             switch (newDirection) {
//                 case "left":
//                     newY = headY > 0 ? headY - 1 : 7;
//                     break;
//                 case "right":
//                     newY = headY < 7 ? headY + 1 : 0;
//                     break;
//                 case "top":
//                     newX = headX > 0 ? headX - 1 : 7;
//                     break;
//                 case "down":
//                     newX = headX < 7 ? headX + 1 : 0;
//                     break;
//             }
    
//             // Add new position to movement (grow if needed)
//             const newMovement =
//                 state.movement.length < state.length
//                     ? [...state.movement, { position: [newX, newY] }] // Grow snake
//                     : [...state.movement.slice(1), { position: [newX, newY] }]; // Move normally
    
//             return { movement: newMovement, direction: updatedDirection };
//         });
//     },
    

//     setScore: () => set((state) => ({ score: state.score + 100 })),
// }));

// export default useSnakeStore;
// import { create } from "zustand";

// const useSnakeStore = create((set) => ({
//     start: false,
//     length: 1,
//     movement: [{ position: [0, 0] }], // Stores all movement positions
//     direction: ["right"], // Tracks direction history
//     score: 0,
//     hasGrown: false, // Prevent continuous growth

//     setStart: () => set((state) => ({ start: !state.start })),

//     setLength: () => set((state) => {
//         if (state.hasGrown) return state; // Prevent multiple growth calls

//         const newMovement = [...state.movement];
//         const tailIndex = newMovement.length - 1;
        
//         if (tailIndex < 1) return state; // Ensure snake has at least 2 segments

//         const tail = newMovement[tailIndex].position;
//         const secondLast = newMovement[tailIndex - 1].position;
        
//         // Determine tail movement direction
//         let newX = tail[0];
//         let newY = tail[1];

//         if (tail[0] > secondLast[0]) newX += 1; // Moving downward, extend downward
//         else if (tail[0] < secondLast[0]) newX -= 1; // Moving upward, extend upward
//         else if (tail[1] > secondLast[1]) newY += 1; // Moving right, extend right
//         else if (tail[1] < secondLast[1]) newY -= 1; // Moving left, extend left

//         newMovement.push({ position: [newX, newY] });

//         return {
//             length: state.length + 1,
//             movement: newMovement,
//             hasGrown: true, // Prevent further growth until reset
//         };
//     }),

//     resetGrowth: () => set(() => ({ hasGrown: false })),

//     setMovement: (newDirection) => {
//         set((state) => {
//             const newMovement = [...state.movement];
//             for (let i = newMovement.length - 1; i > 0; i--) {
//                 newMovement[i].position = [...newMovement[i - 1].position];
//             }

//             let [headX, headY] = newMovement[0].position;
//             switch (newDirection) {
//                 case "left":
//                     headY -= 1;
//                     break;
//                 case "right":
//                     headY += 1;
//                     break;
//                 case "top":
//                     headX -= 1;
//                     break;
//                 case "down":
//                     headX += 1;
//                     break;
//             }

//             newMovement[0].position = [headX, headY];

//             return { movement: newMovement, direction: [...state.direction, newDirection] };
//         });
//     },

//     setScore: () => set((state) => ({ score: state.score + 100 })),
// }));

// export default useSnakeStore;
import {create} from "zustand";
const useSnakeStore = create((set) => ({
    start: false,
    length: 1,
    movement: [{ position: [0, 0] }],
    direction: ["down"],
    score: 0,
    hasGrown: false,  // New state to track growth
    gameOver:false,
    speed:1000,
    
    setSpeed:(num)=> set((state)=>{
        return {speed:num};
    }),
    setGameOver:() => set((state)=>({gameOver:!state.gameOver,start: false,length: 1, movement: [{ position: [0, 0] }],direction: ["down"],score: 0,hasGrown: false})), 
    setStart: () => set((state) => ({ start: !state.start })),
    
    setLength: () => set((state) => {
        if (!state.hasGrown) {  // Only grow if hasn't grown yet
            return { length: state.length + 1, hasGrown: true,score:state.score+100 };
        }
        return {}; // No update if already grown
    }),

    resetGrowth: () => set({ hasGrown: false }), // Reset when snake moves off (5,5)
    setDirection: (newDirection) => {
                set((state)=>{
                    let i;
                    if(state.length!=state.movement.length){
                        
                        state.direction[state.direction.length-1]=newDirection;   //Change the direction of the last element i.e. head
                        if(state.length!=state.direction.length)
                        {
                            return {direction : [...state.direction,newDirection]};
                        }
                        return {direction : [...state.direction]};
        
                    }
                    for(i=1;i<state.length;i++)
                    {
                        state.direction[i-1]=state.direction[i];
                    }
                    state.direction[state.direction.length-1]=newDirection;
                    return {direction : [...state.direction]};
                })},
    
    setMovement: () => {
        set((state) => {
            let updatedMovement = [...state.movement];
            console.log(state.speed);
            // Get the current head position
            const [x, y] = updatedMovement[updatedMovement.length - 1].position;
            let newX = x, newY = y;
    
            switch (state.direction[state.direction.length - 1]) {
                case "left":
                    newY = y > 0 ? y - 1 : 7;
                    break;
                case "right":
                    newY = y < 7 ? y + 1 : 0;
                    break;
                case "top":
                    newX = x > 0 ? x - 1 : 7;
                    break;
                case "down":
                    newX = x < 7 ? x + 1 : 0;
                    break;
            }

            const [tailX,tailY] = state.movement[0].position;

            for (const element of state.movement) {
                const [elementX,elementY] = element.position;
                if(newX==elementX && newY==elementY)
                {
                    if(newX==tailX && newY==tailY && !state.hasGrown)
                    {
                        break;
                    }
                    else
                    {
                        console.log("Game Over");
                        return{ gameOver :true,start:false};
                    }
                }
            }
    
            // Add the new head position at the end
            updatedMovement.push({ position: [newX, newY] });
    
            // Ensure movement length matches `length`
            while (updatedMovement.length > state.length) {
                updatedMovement.shift(); // Remove tail to maintain correct length
            }

            // Reset growth flag if snake moves away from (5,5)
            const isAtFiveFive = newX === 5 && newY === 5;
            return { 
                movement: updatedMovement, 
                hasGrown: isAtFiveFive ? state.hasGrown : false 
            };
    
           // return { movement: updatedMovement };
        });
    },
    

    // setMovement: () => {
    //     set((state) => {
    //         let i=0;
    //         if(state.length!=state.movement.length)
    //         {
    //             let updatedDirection=[...state.direction];
    //             const [x, y] = state.movement[state.movement.length-1].position;
    //             let newX = x;
    //             let newY = y;

    //             switch (state.direction[state.direction.length-1]) {
    //                 case "left":
    //                     newY = y > 0 ? y - 1 : 7;
    //                     break;
    //                 case "right":
    //                     newY = y < 7 ? y + 1 : 0;
    //                     break;
    //                 case "top":
    //                     newX = x > 0 ? x - 1 : 7;
    //                     break;
    //                 case "down":
    //                     newX = x < 7 ? x + 1 : 0;
    //                     break;
    //             }
    //             // setDirection(state.direction[state.direction.length-1]);
    //             //updatedDirection[updatedDirection.length-1]=state.direction[state.direction.length-1];   //Change the direction of the last element i.e. head
    //             if(state.length!=state.direction.length)
    //             {
    //                 updatedDirection=[...updatedDirection,state.direction[state.direction.length-1]];
    //                 //return {direction : [...state.direction,newDirection]};
    //             }
    //             //updatedDirection=[...updatedDirection];
    //             //return {direction : [...state.direction]};
    //             return {movement : [...state.movement,{position:[newX,newY]}],direction:updatedDirection};
    //         }
    //         const newMovement=state.movement.map(element => {
    //             const [x, y] = element.position;
    //             let newX = x;
    //             let newY = y;
    //             switch (state.direction[i]) {
    //                 case "left":
    //                     newY = y > 0 ? y - 1 : 7;
    //                     break;
    //                 case "right":
    //                     newY = y < 7 ? y + 1 : 0;
    //                     break;
    //                 case "top":
    //                     newX = x > 0 ? x - 1 : 7;
    //                     break;
    //                 case "down":
    //                     newX = x < 7 ? x + 1 : 0;
    //                     break;
    //             }
    //             i++;
    //             return  {position: [newX, newY] };
    //         });

    //         return { movement: newMovement };
    //         // const [x, y] = state.movement[state.movement.length-1].position;
    //         // let newX = x;
    //         // let newY = y;

    //         // switch (state.direction) {
    //         //     case "left":
    //         //         newY = y > 0 ? y - 1 : 7;
    //         //         break;
    //         //     case "right":
    //         //         newY = y < 7 ? y + 1 : 0;
    //         //         break;
    //         //     case "top":
    //         //         newX = x > 0 ? x - 1 : 7;
    //         //         break;
    //         //     case "down":
    //         //         newX = x < 7 ? x + 1 : 0;
    //         //         break;
    //         // }

    //         // return { movement: { position: [newX, newY] } };
    //     });
    // },

    //setScore: () => set((state) => ({ score: state.score + 100 })),
}));
 export default useSnakeStore;
