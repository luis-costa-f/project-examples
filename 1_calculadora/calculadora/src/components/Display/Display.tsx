import "./Display.css";
import { IDisplay } from "./IDisplay";

const Display = ({ currentValue }: IDisplay) => {
    return (
        <div className="display">{currentValue}</div>
    );
};

export default Display;