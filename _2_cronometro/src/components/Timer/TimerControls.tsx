
import "./Timer.css"

interface ITimerControls {
    onStart: () => void,
    onStop: () => void,
}

const TimerControls = ({onStart, onStop}: ITimerControls) => {
    return (
        <div className="timer-controls">
            <button onClick={onStart}>Iniciar</button>
            <button onClick={onStop}>Zerar</button>
        </div>
    )
}

export default TimerControls
