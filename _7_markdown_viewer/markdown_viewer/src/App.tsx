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

    const insertText = (before: string, after: string): void => {
        const textArea = textAreaRef.current;

        if (textArea) {
            const start = textArea.selectionStart;
            const end = textArea.selectionEnd;

            const previousText = textArea.value;
            const beforeText = previousText.substring(0, start);
            const selectText = previousText.substring(start, end);
            const afterText = previousText.substring(end);

            const newText =  `${beforeText}${before}${selectText}${after}${afterText}`;
            setText(newText);
        }
    }

    useEffect(() => {
        localStorage.setItem("markdownText", text);
    }, [text])

    return (
        <div>
            <div className="app-container">
                <Toolbar insertText={insertText} />
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
