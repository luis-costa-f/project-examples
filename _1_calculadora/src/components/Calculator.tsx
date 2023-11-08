import { useState } from "react"
import "./Calculator.css"

const Calculator = () => {
    const [currentValue, setCurrentValue] = useState<string>("0")
    const [pendingOperation, setPendingOperation] = useState<string>("")
    const [pendingValue, setPendingValue] = useState<string>("")
    const [completeOperation, setcompleteOperation] = useState<string>("")

    const keypadNumbers: string = "0123456789"
    const operations: string = "+-*/"

    const handleClick = (val: string): void => {
        setCurrentValue((prevValue) => {
            if (prevValue === "0") return val
            else return prevValue + val
        })

        setcompleteOperation((prevOperation) => prevOperation + val)
    }

    const handleOperation = (operation: string): void => {
        setcompleteOperation(currentValue + " " + operation)
        setPendingOperation(operation)
        setPendingValue(currentValue)
        setCurrentValue("0")
    }

    const handleClear = () => {
        setCurrentValue("0")
        setPendingOperation("")
        setPendingValue("")
        setcompleteOperation("")
    }

    const handleCalculate = () => {
        if (!pendingOperation || !pendingValue) {
            return;
        }

        const num1 = parseFloat(pendingValue);
        const num2 = parseFloat(currentValue);

        let result: number = 0;

        switch (pendingOperation) {
            case "+":
                result = num1 + num2
                break;
            case "-":
                result = num1 - num2
                break;
            case "*":
                result = num1 * num2
                break;
            case "/":
                if (num2 !== 0) {
                    result = num1 / num2
                } else {
                    setcompleteOperation("Erro")
                    setCurrentValue("É impossível fazer uma divisão por 0")
                    setPendingOperation("")
                    setPendingValue("")
                    return;
                }
                break;
            default:
                break;

        }

        setcompleteOperation(pendingValue + " " + pendingOperation + " " + currentValue + " = " + result)
        setCurrentValue(result.toString())
        setPendingOperation("")
        setPendingValue("")
    }

    return (
        <>
            <div className="calculator">
                <div className="complete-operation">{completeOperation}</div>
                <div className="display">{currentValue}</div>
                <div className="buttons">
                    <button onClick={handleClear}>AC</button>
                    {keypadNumbers.split('').map((num) => (<button onClick={() => handleClick(num)}>{num}</button>))}
                    {operations.split('').map((operation) => (<button onClick={() => handleOperation(operation)}>{operation}</button>))}
                    <button onClick={handleCalculate}>=</button>
                </div>
            </div>
        </>
    )
}

export default Calculator
