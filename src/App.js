import "./styles.css";
import { Link } from 'react-router-dom'

import { JupyterNotebookViewer } from "react-jupyter-notebook-viewer";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css";

const DARK_MODE = true;

export default function App() {
  return (
    <>
      <Link to='1a'><button>1a</button></Link>
      <Link to='1b'><button>1b</button></Link>
      <Link to='1c'><button>1c</button></Link>
    </>
  );
}
