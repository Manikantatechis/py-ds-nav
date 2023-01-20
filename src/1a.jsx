import React from 'react'
import { JupyterNotebookViewer } from "react-jupyter-notebook-viewer";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css";

const DARK_MODE = true;
import { useParams } from 'react-router-dom';

export default function Py1a({ showSidebar1 }) {
    const location = useParams()
    const path = location.fileName
    return (
        <div className="App" onClick={showSidebar1}>
            <JupyterNotebookViewer
                filePath={`/notebooks/${path}`}
                className="notebook-class"
                notebookInputLanguage="python"
                // notebookOutputLanguage="python"
                inputCodeDarkTheme={DARK_MODE}
                outputDarkTheme={DARK_MODE}
                inputMarkdownDarkTheme={DARK_MODE}
                showInputLineNumbers={true}
                showOutputLineNumbers={false}
                // outputTextClassName="output-text"
                // inputTextClassName="input-text"
                // outputBlockClassName="output-block"
                // outputImageClassName="output-image"
                // outputOuterClassName="output-outer"
                // inputOuterClassName="input-outer"
                // outputBorderClassName="output-border"
                // inputBorderClassName="input-border"
                // outputTableClassName="output-table"
                // inputMarkdownBlockClassName="input-markdown-block"
                // inputCodeBlockClassName="input-code-block"
                withOnClick={true}
                hideCodeBlocks={false}
                hideMarkdownBlocks={false}
                hideAllOutputs={false}
                hideAllInputs={false}
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
            />
        </div>
    )
}
