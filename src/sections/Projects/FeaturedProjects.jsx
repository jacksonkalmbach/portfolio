import React from "react";
import ProjectPreview from "./ProjectPreview";

export default function FeaturedProjects() {
  return (
    <div className="w-screen h-screen flex flex-col items-center p-6">
      <h1>Featured Projects</h1>
      <div className="flex w-full h-full items-center justify-around">
        <ProjectPreview />
        <ProjectPreview />
        <ProjectPreview />
      </div>
    </div>
  );
}
