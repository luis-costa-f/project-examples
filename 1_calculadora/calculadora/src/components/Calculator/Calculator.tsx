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

    const handleOperation = (operation: string) => {
        setCompleteOperation(currentValue + " " + operation + " ");
        setPendingOperation(operation);
        setPendingValue(currentValue);
        setCurrentValue("0")
    }

    const handleClear = () => {
        setCurrentValue("0");
        setPendingOperation(null);
        setPendingValue(null);
        setCompleteOperation("");
    };

    const handleCalculate = () => {
        if (!pendingOperation || !pendingValue) {
            return;
        }

        const num1 = parseFloat(pendingValue);
        const num2 = parseFloat(currentValue);

        let result: number = 0.0;

        switch (pendingOperation) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 !== 0)
                    result = num1 / num2;
                else {
                    setCurrentValue("Error divisão por 0");
                    setCompleteOperation("Error divisão por 0");
                    setPendingOperation(null);
                    setPendingValue(null);
                    return;
                }
                break;
            default:
                break;
        }

        setCompleteOperation(pendingValue + " " + pendingOperation + " " + currentValue + " = " + result.toString());
        setCurrentValue(result.toString());
        setPendingOperation(null);
        setPendingValue(null);
    }

    return (
        <div className="calculator">
            <CompleteOperation completeOperation={completeOperation} />
            <Display currentValue={currentValue} />
            <Buttons
                handleClick={handleClick}
                handleClear={handleClear}
                handleOperation={handleOperation}
                handleCalculate={handleCalculate}
            />
        </div>
    );
};

export default Calculator;