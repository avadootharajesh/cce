import React, { useState } from "react";
import { Button } from "../components/ui/button"; // shadcn Button
import { motion } from "framer-motion"; // For smooth hover effect
import { Play } from "lucide-react"; // Icon for run button

// components
import NavBar from "../components/NavBar";
import CodeSection from "../components/sections/CodeSection";
import HeroSection from "../components/sections/HeroSection";

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
      <HeroSection />

      {/* Code Editor Section */}
      <CodeSection />
      
    </div>
  );
};

export default HomePage;
