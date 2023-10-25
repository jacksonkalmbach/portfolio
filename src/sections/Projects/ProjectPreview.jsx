import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";

export default function ProjectPreview({
  projectKey,
  title,
  description,
  techStack,
  img,
  allImg,
  siteUrl,
  githubUrl,
  handleShowDetails,
}) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="min-w-full h-full rounded-xl flex flex-col justify-center items-center ">
      <div className="w-full flex justify-between items-center mb-4 pr-4">
        <h2 className="font-bold w-fit text-xl w-full cursor-pointer">
          {title}
        </h2>
        <div
          className="cursor-pointer w-1/3 active:scale-95"
          onClick={() => {
            navigate(`/${projectKey}`);
          }}
        >
          <p className="font-thin w-1/2">View Details</p>
        </div>
      </div>
      <div
        className="relative h-72 rounded-xl overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {hovered && (siteUrl || githubUrl) && (
          <div className="absolute z-10 w-full h-full bg-black opacity-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        )}
        <img className="h-full object-cover" src={img} alt="placeholder" />
        {(siteUrl || githubUrl) && (
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-2 z-20 ${
              hovered ? "visible" : "hidden"
            }`}
          >
            <Button text="Live Site" path={siteUrl} />
            <Button text="GitHub" path={githubUrl} />
          </div>
        )}
      </div>
    </div>
  );
}
