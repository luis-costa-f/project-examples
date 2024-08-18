import "./Timer.css"
import { ITimerDisplay } from "./interfaces"

const TimerDisplay = ({ time }: ITimerDisplay): JSX.Element => {
    return (
        <div className="timer-display">
            {time}
        </div>
    )
}

export default TimerDisplay
