import React, { useState } from "react";
import { Button } from "../components/ui/button"; // shadcn Button
import { motion } from "framer-motion"; // For smooth hover effect
import { Play } from "lucide-react"; // Icon for run button

// components
import NavBar from "../components/NavBar.jsx";
import LinesBackground from "../components/LinesBackground.jsx";

// styles
import "../styles/HomePage.css";

const HomePage = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  // Execute JavaScript Code
  const runCode = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(code);
      setOutput(String(result));
    } catch (err) {
      setOutput("Error: " + err.message);
    }
  };

  return (
    <div className="relative min-h-screen font-bold text-black">
      <NavBar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">
        <LinesBackground />
        <h1 className="text-4xl mb-4 selection:bg-blue-600 selection:text-white">
          Welcome to Collaborative Code Editor
        </h1>
        <p className="text-lg selection:bg-blue-600 selection:text-white">
          Collaborate with others in real-time on a shared code editor.
        </p>
        <div className="mt-6 flex gap-4">
          <Button
            style={{
              border: "2px solid black",
            }}
            variant="LogIn"
          >
            Login
          </Button>
          <Button variant="register">Register</Button>
        </div>
      </section>

      {/* Code Editor Section */}
      <section className="flex justify-center items-center mt-20 pb-40">
        <motion.div
          className="relative w-[500px] p-6 rounded-2xl bg-white shadow-lg"
          whileHover={{
            rotate: [0, -1, 1, 0],
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
        >
          <h2 className="text-2xl font-semibold text-center mb-4">
            Try out the Code Editor first!
          </h2>
          <textarea
            className="w-full h-32 p-2 border rounded-lg font-mono text-sm"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="// Write JavaScript here..."
          />
          <div className="flex justify-between mt-4">
            <Button onClick={runCode} variant="default">
              <Play className="w-5 h-5 mr-2" /> Run Code
            </Button>
          </div>
          {output && (
            <div className="mt-4 p-2 bg-gray-100 rounded-lg text-sm">
              <strong>Output:</strong> {output}
            </div>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
