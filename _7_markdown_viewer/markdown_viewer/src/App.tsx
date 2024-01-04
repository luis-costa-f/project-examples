import { marked } from "marked";
import { useEffect, useRef, useState } from "react";
import Toolbar from "./components/Toolbar";

const App = () => {

    const [text, setText] = useState<string>(
        localStorage.getItem("markdownText") || "# Olá, eu sou feito de Markdown"
    );

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const renderText = () => {
        return { __html: marked(text) }
    }

    const handleChangeTextArea = (newText: string): void => {
        setText(newText)
    }

    

    useEffect(() => {
        localStorage.setItem("markdownText", text);
    }, [text])

    return (
        <div>
            <div className="app-container">
                <Toolbar />
                <textarea
                    ref={textAreaRef}
                    value={text}
                    onChange={(e) => handleChangeTextArea(e.target.value)}
                ></textarea>
                <div dangerouslySetInnerHTML={renderText()} />
            </div>
        </div>
    )
}

export default App
