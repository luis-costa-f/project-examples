import Buttons from "../Buttons/Buttons";
import CompleteOperation from "../CompleteOperation/CompleteOperation";
import Display from "../Display/Display";
import "./Calculator.css";

const Calculator = () => {

    return (
        <div className="calculator">
            <CompleteOperation />
            <Display />
            <Buttons />
        </div>
    );
};

export default Calculator;