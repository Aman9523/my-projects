import CountDownTimer from "."
import "./timer.css"
function CountDownTimerTest(){
    function handleTimeFinish(){
        console.log("Once the timer is finished I want to make an api call and save some data t database")
    }
    return(
        <div className="countdown-timer-container">
            <h1>CountDown Timer</h1>
            <CountDownTimer initialTime={120} onTimeFinish={handleTimeFinish}/>
        </div>
    );
}

export default CountDownTimerTest;