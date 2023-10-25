import React, { useState } from "react";

import ProjectPreview from "../Projects/ProjectPreview";

export default function FeaturedProjects() {
  const [dots, setDots] = useState(0);
  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-3">
      <h1 className="self-start font-bold text-xl mb-6">Featured Projects</h1>
      <div className="flex overflow-auto">
        <ProjectPreview />
        <ProjectPreview />
        <ProjectPreview />
      </div>
      <div className="flex gap-3">
        <div
          className={`${
            dots === 0 ? "bg-black" : "bg-primaryBg"
          } h-4 w-4 rounded-full cursor-pointer`}
          onClick={() => setDots(0)}
        ></div>
        <div
          className={`${
            dots === 1 ? "bg-black" : "bg-primaryBg"
          } h-4 w-4 rounded-full cursor-pointer`}
          onClick={() => setDots(1)}
        ></div>
        <div
          className={`${
            dots === 2 ? "bg-black" : "bg-primaryBg"
          } h-4 w-4 rounded-full cursor-pointer`}
          onClick={() => setDots(2)}
        ></div>
      </div>
    </div>
  );
}
