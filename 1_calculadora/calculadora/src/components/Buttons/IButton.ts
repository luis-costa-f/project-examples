export interface IButton {
    handleClick: (num: string) => void;
    handleOperation: (operation: string) => void;
    handleClear: () => void;
    handleCalculate: () => void;
}