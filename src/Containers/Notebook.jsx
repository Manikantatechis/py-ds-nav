import React, { useEffect, useState } from 'react'
import { JupyterNotebookViewer } from "react-jupyter-notebook-viewer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
const DARK_MODE = true;
import { useParams } from 'react-router-dom';
import './Loading.css'



export default function Notebook({ showSidebar1, setLoading, loading }) {

    const location = useParams()
    const path = location.fileName
    useEffect(() => {
        showSidebar1()
    }, [path])
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000);
        return () => clearTimeout(timer);
    }, [path]);
    useEffect(() => {
        setLoading(true)
    }, [path])
    return (
        <>
            <div id="loader" style={loading ? { display: 'block' } : { display: 'none' }} >
                <h3>Loading, please wait.</h3>
                <div class="progress-bar">
                    <div class="shadow"></div>
                </div>
            </div>
            <div className="App" style={loading ? { display: 'none' } : { display: 'block' }} onClick={showSidebar1}>
                <JupyterNotebookViewer
                    filePath={`/notebooks/Step 1-1 Python/${path}.ipynb`}
                    // filePath={`/notebooks/Step 1-1 Python/Step_1_1a_Python_Foundations_01.ipynb`}
                    className="notebook-class"
                    notebookInputLanguage="python"
                    inputCodeDarkTheme={DARK_MODE}
                    outputDarkTheme={DARK_MODE}
                    inputMarkdownDarkTheme={DARK_MODE}
                    showInputLineNumbers={true}
                    showOutputLineNumbers={false}
                    withOnClick={true}
                    hideCodeBlocks={false}
                    hideMarkdownBlocks={false}
                    hideAllOutputs={false}
                    hideAllInputs={false}
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                />
            </div>

        </>
    )
}
