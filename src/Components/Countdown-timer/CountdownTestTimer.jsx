import CountdownTimer from "./CountdownTimer";
import "./CountdownTimer.css";
export default function CountdownTestTimer() {
  const handletimefinish = () => {
    console.log(
      "once the timer finished I want make a api call and save data to database"
    );
  };
  return (
    <div className="countdown-timer-container">
      <h1>CountDown-timer</h1>
      {/* 300-3sec */}
      <CountdownTimer initialTime={300} onTimeFinish={handletimefinish} />
    </div>
  );
}
