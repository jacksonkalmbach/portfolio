import React from "react";
import Experience from "./Experience";

import { resume } from "./resume";

export default function MyExperience() {
  return (
    <div className="w-screen h-screen flex justify-start items-center pl-20">
      <div className="flex flex-col w-1/2 self-start pl-[10%] gap-6">
        {resume.map((job) => (
          <Experience {...job} />
        ))}
      </div>
    </div>
  );
}
