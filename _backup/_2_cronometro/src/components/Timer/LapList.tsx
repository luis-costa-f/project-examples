import { ILapList } from "./interfaces"

const LapList = ({ lapList }: ILapList) => {
    return (
        <div className="timer-laps">
            <h3>Voltas:</h3>
            {
                lapList && 
                <ul>
                {
                    lapList.map((lap, index) => {
                        return (
                            <li key={index}>Volta {index + 1}:  {lap}</li>
                        )
                    })
                }
            </ul>
            }
        </div>
    )
}

export default LapList
