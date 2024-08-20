import { useState } from "react";
import Buttons from "../Buttons/Buttons";
import CompleteOperation from "../CompleteOperation/CompleteOperation";
import Display from "../Display/Display";
import "./Calculator.css";

const Calculator = () => {

    const [currentValue, setCurrentValue] = useState<string>("0");
    const [pendingOperation, setPendingOperation] = useState<string | null>(null);
    const [pendingValue, setPendingValue] = useState<string | null>(null);
    const [completeOperation, setCompleteOperation] = useState<string>("");

    const handleClick = (val: string) => {
        setCurrentValue((prevValue) => {
            if (prevValue === "0") {
                return val;
            } else {
                return prevValue + val;
            };
        });
        setCompleteOperation((prevOperation) => prevOperation + val);
    };

    const handleClear = () => {
        setCurrentValue("0");
        setPendingOperation(null);
        setPendingValue(null);
        setCompleteOperation("");
    };

    return (
        <div className="calculator">
            <CompleteOperation completeOperation={completeOperation} />
            <Display currentValue={currentValue} />
            <Buttons handleClick={handleClick} handleClear={handleClear} />
        </div>
    );
};

export default Calculator;