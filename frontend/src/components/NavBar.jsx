import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, User, Settings, LogOut } from "lucide-react";


const buttons = [
    { icon: <Home size={18} />, label: "Home" },
    { icon: <User size={18} />, label: "Profile" },
    { icon: <Settings size={18} />, label: "Settings" },
    { icon: <LogOut size={18} />, label: "Logout" },
];

const NavBar = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed top-5 right-5 z-50">
      <div
        className="flex flex-col items-end gap-2"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {buttons.map((item, index) => (
          <Button
            key={index}
            variant={hovered ? "outline" : "ghost"}
            className={`flex items-center gap-2 p-2 transition-all duration-300 ease-in-out 
              ${hovered ? "w-32 justify-start" : "w-10 justify-center"}`}
          >
            {item.icon}
            {hovered && <span className="ml-2 text-sm">{item.label}</span>}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
