import "./Timer.css"

interface ITimerDisplay {
    time: string
}

const TimerDisplay = ({time}: ITimerDisplay):JSX.Element => {
    return (
        <div className="timer-display">
            {time}
        </div>
    )
}

export default TimerDisplay
