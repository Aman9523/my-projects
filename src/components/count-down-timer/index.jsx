import { useEffect, useRef, useState } from "react";

function CountDownTimer({initialTime,onTimeFinish}){
    const [time,setTime]=useState(initialTime);
    const [isRunning,setIsRunning]=useState(true);
    const interValReference=useRef();

    useEffect(()=>{
        if (isRunning) {
            interValReference.current=setInterval(()=>{
                setTime((prevTime)=>{
                    if (prevTime===0) {
                        clearInterval(interValReference.current);
                        setIsRunning(false);

                        if (onTimeFinish) {
                            onTimeFinish();
                        }
                        return 0;
                    }
                    return prevTime-1;
                });
            },1000);
        }else{
            clearInterval(interValReference.current);
        }
        return ()=>{
            clearInterval(interValReference.current);
        };
    },[isRunning,onTimeFinish]);

    function handlePauseAndResume(){
        setIsRunning((prevIsRunning)=>!prevIsRunning);
    }
    function handleReset(){
        clearInterval(interValReference.current);
        setTime(initialTime);
        setIsRunning(false);
    }

    function handleStart(){
        setIsRunning(true);
    }

    const minutes=Math.floor(time/60);
    const seconds=time%60;

    return(
        <div className="timer">
            <p>
                {String(minutes).padStart(2,"0")}:{String(seconds).padStart(2,"0")}
            </p>
            <div className="timer-buttons">
                    <button onClick={handlePauseAndResume}>{isRunning?"Pause":"Resume"}</button>
                    <button onClick={handleReset}>Reset</button>
                    <button onClick={handleStart}>Start</button>
            </div>
        </div>
    );
}

export default CountDownTimer;