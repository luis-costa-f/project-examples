import './Buttons.css';

const Buttons = () => {
    const keypadNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const operations = ['+', '-', '*', '/'];

    return (
        <div className="buttons">
            <button>AC</button>
            {
                keypadNumbers.map((num) => (
                    <button key={num}>{num}</button>
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