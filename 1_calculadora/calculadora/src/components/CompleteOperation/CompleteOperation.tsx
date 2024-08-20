import "./CompleteOperation.css";
import ICompleteOperation from "./ICompleteOperation";

const CompleteOperation = ({ completeOperation }: ICompleteOperation) => {
    return (
        <div className="complete-operation">{completeOperation}</div>
    );
};

export default CompleteOperation;