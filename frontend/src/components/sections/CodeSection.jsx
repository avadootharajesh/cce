import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Play } from "lucide-react";
import { Input } from "../ui/input";
import Editor from "@monaco-editor/react";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Copy } from "lucide-react";
import { useClipboard } from "use-clipboard-copy";
import { toast } from "react-hot-toast";
import { EditorView } from "@codemirror/view";
import { autocompletion } from "@codemirror/autocomplete";
// import { useRouter } from "next/router";
// import "@uiw/codemirror-theme-dracula";

export default function CodeSection() {
  const [code, setCode] = useState("// Write JavaScript here...");
  const [output, setOutput] = useState("");
  const [roomcode, setRoomcode] = useState("");

  useEffect(() => {
    console.log(roomcode);
  }, [roomcode]);

  const runCode = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(code);
      setOutput(String(result));
    } catch (err) {
      setOutput("Error: " + err.message);
    }
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      setRoomcode(event.target.value);
    }
  };

  return (
    <section className="flex justify-center items-center mt-10 pb-20 px-4">
      <motion.div
        className="relative w-full max-w-6xl p-6 rounded-2xl bg-[#010b13d6] shadow-lg"
        whileHover={{
          rotate: [0, -1, 1, 0],
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-start text-white">
          Try out the Code Editor without any Login or Register
        </h2>

        {/* Room & Editor Area */}
        <div className="flex flex-wrap sm:flex-col gap-4">
          {/* Monaco Code Editor */}
          <div className="w-full sm:w-full min-h-[50vh] border border-[#ffffff35] rounded-lg overflow-hidden">
            {/* <Editor
              height="50vh"
              defaultLanguage="javascript"
              value={code}
              theme="vs-dark"
              className="w-full h-full"
              onChange={(value) => setCode(value || "")}
              options={{
                minimap: { enabled: false },
                lineNumbers: "on",
                quickSuggestions: true,
                suggestSelection: "first",
                fontSize: 14,
                scrollBeyondLastLine: false,
                wordWrap: "on",
                renderWhitespace: "none",
                automaticLayout: true,
                padding: { top: 10, bottom: 10 },
                suggest: {
                  showFunctions: true,
                  showVariables: true,
                  showClasses: true,
                  localityBonus: true, // Prioritizes relevant suggestions
                  snippetsPreventQuickSuggestions: false,
                  insertMode: "insert",
                },
                parameterHints: {
                  enabled: true,
                  cycle: true,
                },
                suggestFontSize: 14, // Ensures suggestions fit below cursor
              }}
              editorDidMount={(editor, monaco) => {
                editor.getDomNode().style.background = "transparent";

                // Force suggestions to appear below
                monaco.languages.registerCompletionItemProvider("javascript", {
                  provideCompletionItems: (model, position) => {
                    return {
                      suggestions: [],
                    };
                  },
                  triggerCharacters: ["."],
                });

                // Adjust suggestion placement
                editor.onDidChangeCursorPosition(() => {
                  setTimeout(() => {
                    editor.layout(); // Forces re-layout for proper suggestion positioning
                  }, 50);
                });
              }}
            /> */}
            <CodeMirror
              value={code}
              height="50vh"
              extensions={[
                javascript(),
                autocompletion(),
                EditorView.theme({
                  "&": {
                    background: "transparent !important",
                    fontFamily: "Consolas, monospace",
                    fontWeight: "normal",
                    color: "white", // Default text color
                  },
                  ".cm-content": {
                    fontFamily: "Consolas, monospace",
                    fontSize: "14px",
                  },
                  ".cm-gutters": {
                    backgroundColor: "transparent !important",
                    color: "#ccc",
                  },
                  ".cm-lineNumbers": {
                    backgroundColor: "transparent !important",
                    fontFamily: "Consolas, monospace",
                  },
                  ".cm-activeLine": {
                    backgroundColor: "transparent !important",
                  },
                  ".cm-activeLineGutter": {
                    backgroundColor: "transparent !important",
                  },
                  ".cm-selectionBackground": {
                    backgroundColor: "blue !important", // Light transparent navy blue
                  },
                  ".cm-selectionMatch": {
                    backgroundColor: "#3d5afe6b !important", // Matches selection background
                  },
                }),
              ]}
              onChange={(value) => setCode(value)}
            />
          </div>

          {/* Room Section */}
          <div className="w-full sm:w-full p-4 border border-[#ffffff35] rounded-lg">
            <div className="room-id-section flex items-center gap-2 mb-4">
              <h3 className="text-lg font-semibold text-white">Room</h3>
              <Input
                type="text"
                placeholder="Enter Room ID + Enter"
                className="w-60 font-sans sm:max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-[#ffffff35] rounded-md px-3 py-1 text-sm shadow-sm transition-colors duration-500 ease-in text-white"
                onKeyDown={handleEnter}
              />
            </div>
            <p className="text-sm text-gray-600">
              Share the link with your room to collaborate with others.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex justify-center">
          <Button onClick={runCode} variant="default">
            <Play className="w-5 h-5 mr-2" /> Run Code
          </Button>
        </div>

        {/* Output */}
        {output && (
          <motion.div
            initial={{ opacity: 0, backgroundColor: "#000" }}
            animate={{ opacity: 1, backgroundColor: "#f3f4f6" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="mt-4 p-2 rounded-lg text-sm"
          >
            <strong>Output:</strong> {output}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
