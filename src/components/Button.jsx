import React, { useEffect, useRef } from "react";
import { ArrowBigDown, ArrowBigLeft, ArrowBigRight, ArrowBigUp , Pause, Play} from "lucide-react";
import useSnakeStore from "../store/useSnakeStore";

function Button() {
    const setDirection = useSnakeStore((state) => state.setDirection);
    const setMovement = useSnakeStore((state) => state.setMovement);
    const start = useSnakeStore((state)=> state.start);
    const setStart = useSnakeStore((state)=>state.setStart);

    const intervalRef = useRef(null);

    useEffect(() => {
        
        if(start)
        {
            if (intervalRef.current) clearInterval(intervalRef.current);
            intervalRef.current = setInterval(() => {
                setMovement(); // Move in stored direction
            }, 1000);
    
            return () => clearInterval(intervalRef.current);
        }
        
    }, [setMovement,start]);

    return (
        <div>
            <div className="relative w-[480px] h-[480px] bg-emerald-800">
                <div className="border-1 h-[100px] absolute bottom-44 left-46 text-yellow-500">
                    <button onClick={() => setStart()}>
                        {!start?<Pause className="hover:bg-emerald-600 transition duration-200" style={{ width: "100px", height: "100px" }} /> : <Play className="hover:bg-emerald-600 transition duration-200" style={{ width: "100px", height: "100px" }} />}
                    </button>
                </div>
                <div className="border-1 h-[100px] absolute bottom-44 left-12 text-blue-700">
                    <button onClick={() => setDirection("left")} disabled={!start}>
                        <ArrowBigLeft className="hover:bg-blue-500 transition duration-200" style={{ width: "100px", height: "100px" }} />
                    </button>
                </div>
                <div className="border-1 h-[100px] absolute top-14 left-[38%] text-blue-700">
                    <button onClick={() => setDirection("top")} disabled={!start}>
                        <ArrowBigUp className="hover:bg-blue-500 transition duration-200" style={{ width: "100px", height: "100px" }} />
                    </button>
                </div>
                <div className="border-1 h-[100px] absolute bottom-44 right-12 text-blue-700">
                    <button onClick={() => setDirection("right")} disabled={!start}>
                        <ArrowBigRight className="hover:bg-blue-500 transition duration-200" style={{ width: "100px", height: "100px" }} />
                    </button>
                </div>
                <div className="border-1 h-[100px] absolute bottom-10 left-[38%] text-blue-700">
                    <button onClick={() => setDirection("down")} disabled={!start}>
                        <ArrowBigDown className="hover:bg-blue-500 transition duration-200" style={{ width: "100px", height: "100px" }} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Button;
