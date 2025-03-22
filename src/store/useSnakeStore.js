import toast from "react-hot-toast";
import { create } from "zustand";

// const useSnakeStore=create((set)=>({
//     // selectedUser:null,
//     // users:[],
//     // messages:[],
//     // isUsersloading:false,
//     // isMessagesLoading:false,

//     // getUsers:async()=>{
//     //     set({isUsersLoading:true})
//     //     try {
//     //         const res=await axiosInstance.get("/messages/users");
//     //         set({users:res.data});                 
//     //     } catch (error) {
//     //         toast.error(error.response.data.message);
//     //     }
//     //     finally{
//     //         set({isUsersLoading:false})
//     //     }
//     // },

//     // getmessages:async(user_id)=>{
//     //     try {
//     //         const res=await axiosInstance.get(`/messages/getmessages/${user_id}`)
//     //         set({messages:res.data})
//     //     } catch (error) {
//     //         toast.error(error.response.data.message);
//     //     }
//     //     finally{
//     //         set({isMessagesLoading:false});
//     //     }
//     // },

//     // setSelectedUsers:(selectedUser)=>{set({selectedUser})}
//     start:false,
//     length:1,
//     movement:{down:[0,0]},
//     score:0,

//     setStart:()=>{
//         set((state)=>({start:!state.start}));
//     },

//     setLength:()=>{
//         set((state)=>({length:state.length+1}));
//     },

//     setMovement: ({ direction, position }) => {
//         set((state) => ({
//             movement: { ...state.movement, [direction]: position },
//         }));
        
//     },    

//     setScore: ()=>{
//         set((state) => ({ score:state.score+100}));
//     }
    
// }));

// export default useSnakeStore

const useSnakeStore = create((set) => ({
    start: false,
    length: 1,
    movement: { position: [0, 0] }, // Store only the latest position
    direction: "down", // Track direction separately
    score: 0,

    setStart: () => set((state) => ({ start: !state.start })),

    setLength: () => set((state) => ({ length: state.length + 1 })),

    setDirection: (newDirection) => set({ direction: newDirection }),

    setMovement: () => {
        set((state) => {
            const [x, y] = state.movement.position;
            let newX = x;
            let newY = y;

            switch (state.direction) {
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

            return { movement: { position: [newX, newY] } };
        });
    },

    setScore: () => set((state) => ({ score: state.score + 100 })),
}));

export default useSnakeStore;
