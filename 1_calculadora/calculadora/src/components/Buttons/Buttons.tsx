import './Buttons.css';
import { IButton } from './IButton';

const keypadNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const operations = ['+', '-', '*', '/'];

const Buttons = ({ handleClick, handleClear, handleOperation, handleCalculate }: IButton) => {

    return (
        <div className="buttons">
            <button onClick={() => handleClear()}>AC</button>
            {
                keypadNumbers.map((num) => (
                    <button key={num} onClick={() => handleClick(num)}>{num}</button>
                ))
            }
            {
                operations.map((operation) => (
                    <button key={operation} onClick={() => handleOperation(operation)}>{operation}</button>
                ))
            }
            <button onClick={() => handleCalculate()}>=</button>
        </div>
    );
};

export default Buttons;