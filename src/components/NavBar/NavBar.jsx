import React from "react";

export default function NavBar({ section, handleNavigationClick }) {
  return (
    <div className="hidden md:flex relative flex-col w-1/5 h-full justify-center items-end pb-20 pr-6 gap-6">
      <p className="absolute top-10 font-bold left-1/2 transform -translate-x-1/2 w-full flex justify-center">
        JACKSON KALMBACH
      </p>

      <p
        className={`pr-4 cursor-pointer font-monserrat hover:font-bold transition-all duration-200 ${
          section === "Home" && "font-bold border-r-2 border-black"
        }`}
        onClick={() => handleNavigationClick("Home")}
      >
        HOME
      </p>
      <p
        className={`pr-4 cursor-pointer hover:font-bold transition-all duration-200 ${
          section === "Experience" && "font-bold border-r-2 border-black"
        }`}
        onClick={() => handleNavigationClick("Experience")}
      >
        EXPERIENCE
      </p>
      <p
        className={`pr-4 cursor-pointer hover:font-bold transition-all duration-200 ${
          section === "Projects" && "font-bold border-r-2 border-black"
        }`}
        onClick={() => handleNavigationClick("Projects")}
      >
        PROJECTS
      </p>
    </div>
  );
}
