import * as esbuild from "esbuild-wasm";
import ReactDOM from "react-dom/client";
import { useState } from "react";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);

const App = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const startService = async () => {
    const service = await esbuild.startService({
      worker: true,
      wasmURL: "/esbuild.wasm",
    });
  };

  const onClick = () => {
    console.log(input);
  };

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
};

root.render(<App />);
