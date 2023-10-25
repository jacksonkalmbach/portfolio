import React, { useState, useEffect } from "react";

import ProjectPreview from "../Projects/ProjectPreview";

import luxebetImg from "../../assets/luxebet/luxebet-1.png";
import luxebetImg2 from "../../assets/luxebet/luxebet-2.png";
import applyaiImg from "../../assets/applyai/applyai-1.png";
import applyaiImg2 from "../../assets/applyai/applyai-2.png";

export default function FeaturedProjects() {
  const [showDetails, setShowDetails] = useState("");

  useEffect(() => {
    console.log(showDetails);
  }, [showDetails]);

  const handleSetShowDetails = (projectName) => {
    setShowDetails(projectName);
  };

  return (
    <div className=" flex flex-col w-full h-full items-center justify-center gap-3 overflow-hidden">
      <div className="font-bold text-3xl mb-6 w-full self-start">
        Featured Projects
      </div>
      <div>
        <div className="flex flex-wrap gap-4">
          {(showDetails === "" || showDetails === "luxebet") && (
            <div>
              <ProjectPreview
                projectKey="luxebet"
                title={"LuxeBet Casino"}
                techStack={["TypeScript, React, Python, Websockets"]}
                img={luxebetImg}
                allImg={[luxebetImg, luxebetImg2]}
                handleShowDetails={handleSetShowDetails}
                siteUrl="https://luxebet-casino.vercel.app/auth"
                githubUrl="https://github.com/jacksonkalmbach/luxebet-casino"
              />
            </div>
          )}
          {(showDetails === "" || showDetails === "applyai") && (
            <div>
              <ProjectPreview
                projectKey="applyai"
                title={"Apply.ai"}
                techStack={["TypeScript, React, Python, OpenAI, RestAPI"]}
                img={applyaiImg}
                allImg={[applyaiImg, applyaiImg2]}
                handleShowDetails={handleSetShowDetails}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
