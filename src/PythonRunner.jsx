import React, { useEffect, useState, useRef } from "react";

export default function PythonRunner() {
    const [code, setCode] = useState(`print('Have a nice day')`);
    const [output, setOutput] = useState('waiting for code');
    const [isReady, setIsReady] = useState(false);
    const outputRef = useRef(null);

    useEffect(() => {
        const loadPyodideAndPackages = async () => {
            setOutput("⏳ Loading Pyodide...");
            try {
                window.pyodide = await window.loadPyodide();
                setIsReady(true);
                setOutput("✅ Pyodide loaded. Ready to run code.");
                outputRef.current.className = "success";
            } catch (err) {
                setOutput("❌ Failed to load Pyodide.");
                outputRef.current.className = "error";
            }
        };

        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js";
        script.onload = loadPyodideAndPackages;
        document.body.appendChild(script);
    }, []);

    const runPython = async () => {
        if (!isReady) {
            setOutput("Pyodide is still loading...");
            return;
        }

        try {
            let outputBuffer = [];
            window.pyodide.setStdout({ batched: (data) => outputBuffer.push(data) });
            window.pyodide.setStderr({ batched: (data) => outputBuffer.push(data) });

            await window.pyodide.runPythonAsync(code);
            setOutput(outputBuffer.join(""));
            outputRef.current.className = "success";
        } catch (err) {
            setOutput("❌ Error:\n" + err);
            outputRef.current.className = "error";
        }
    };

    return (
        <div style={{ fontFamily: "Arial, sans-serif", padding: 20 }}>
            <h2>Python Code Runner</h2>
            <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                style={{
                    width: '100%',
                    height: 160,
                    fontFamily: 'monospace',
                    fontSize: 14,
                    padding: 10,
                }}
            />
            <br />
            <button onClick={runPython} style={{ marginTop: 10, padding: '6px 12px', fontSize: 14 }}>
                ▶ Run
            </button>

            <h3>Output:</h3>
            <pre
                ref={outputRef}
                style={{
                    background: '#f8f8f8',
                    padding: 12,
                    borderRadius: 5,
                    border: '1px solid #ccc',
                    minHeight: 50,
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                }}
            >
                {output}
            </pre>
        </div>
    );
}