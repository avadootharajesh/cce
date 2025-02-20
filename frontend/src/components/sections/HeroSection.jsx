import React from "react";

// components
import { Button } from "../ui/button";
import LinesBackground from "../LinesBackground";

export default function HeroSection() {
  return (
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
  );
}
