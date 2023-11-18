export interface ILapList {
    lapList: string[]
}

export interface ITimerDisplay {
    time: string
}

export interface ITimerControls {
    onStart: () => void,
    onStop: () => void,
    onReset: () => void,
    onLap: () => void,
    timerOn: boolean
}