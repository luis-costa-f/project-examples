import { useEffect, useState } from "react";
import { ITimeZoneClock } from "./interface";
import "./styles.css";

const TimezoneClock = ({ timeZone }: ITimeZoneClock) => {

    const [time, setTime] = useState<string>("");

    useEffect(() => {
        setInterval(() => {
            const date = new Date();

            const options: Intl.DateTimeFormatOptions = {
                timeZone,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            };

            const timeString = date.toLocaleTimeString("en-US", options);

            setTime(timeString)
        }, 1000)
    }, [timeZone])

    return (
        <div className="timezone">
            <h2>{timeZone}</h2>
            <h3>{time}</h3>
        </div>
    )
}

export default TimezoneClock;
