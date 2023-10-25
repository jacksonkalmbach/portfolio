import React from "react";
import Experience from "./Experience";

import { resume } from "./resume";

export default function MyExperience() {
  return (
    <div className="w-screen h-screen flex justify-start items-center md:pl-20">
      <div className="flex flex-col p-4 self-start gap-6 md:w-1/2 md:pl-[10%]">
        {resume.map((job) => (
          <Experience {...job} />
        ))}
      </div>
    </div>
  );
}
