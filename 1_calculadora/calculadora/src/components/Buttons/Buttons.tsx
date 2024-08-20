import './Buttons.css';
import { IButton } from './IButton';

const keypadNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const operations = ['+', '-', '*', '/'];

const Buttons = ({ handleClick, handleClear }: IButton) => {

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
                    <button key={operation}>{operation}</button>
                ))
            }
            <button>=</button>
        </div>
    );
};

export default Buttons;