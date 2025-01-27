import React,{useState,useEffect,useRef} from "react";

function StopWatch(){

    const [IsRunning, SetIsRunning] = useState(false);
    const [elapsedTime, SetElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const StartTime = useRef(0);

    useEffect(() => {

        if(IsRunning){
            intervalIdRef.current = setInterval(() => {
                SetElapsedTime(Date.now() - StartTime.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [IsRunning]);

    function Start(){
        SetIsRunning(true);
        StartTime.current = Date.now() - elapsedTime;
    }
    function Stop(){
        SetIsRunning(false);
    }
    function Resset(){
        SetElapsedTime(0);
        SetIsRunning(false);
    }
    function FormatClock(){
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60 ) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        milliseconds = String(milliseconds).padStart(2,"0");
        
        return `${minutes}:${seconds}:${milliseconds}`;
    }

    return(
        <div className="stop-watch">
            <div className="display">{FormatClock()}</div>
            <div className="controls">
                <button onClick={Start} className="start-button">Start</button>
                <button onClick={Stop} className="stop-button">stop</button>
                <button onClick={Resset} className="resset-button">Resset</button>
            </div>
        </div>
    );


}export default StopWatch