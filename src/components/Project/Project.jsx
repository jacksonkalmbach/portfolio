import React, { useState } from "react";

import Button from "../ui/Button";

import { projects } from "./projects";

import { useNavigate, useParams } from "react-router-dom";
import ChevronLeft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";

export default function Project() {
  const navigate = useNavigate();
  const params = useParams();
  const projectName = params.projectName;
  const { title, description, allImg, siteUrl, githubUrl, techStack } =
    projects[projectName];

  const [imgIdx, setImgIdx] = useState(0);
  const handleNextImgIdx = () => {
    if (imgIdx < allImg.length - 1) {
      setImgIdx(imgIdx + 1);
    }
  };

  const handlePrevImgIdx = () => {
    if (imgIdx > 0) {
      setImgIdx(imgIdx - 1);
    }
  };

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col p-8">
      <div className="cursor-pointer flex gap-2" onClick={() => navigate("/")}>
        Back
      </div>
      <div className="flex flex-col justify-center items-center p-6">
        <div className="w-full flex justify-center items-center">
          <div
            className={` ${
              imgIdx < allImg.length - 1
                ? "cursor-pointer hover:bg-primaryBg"
                : "opacity-0"
            } rounded-full p-2 mr-10 active:scale-95`}
            onClick={handleNextImgIdx}
          >
            <ChevronLeft />
          </div>
          <div className="w-3/5">
            <img
              className="h-full object-cover"
              src={allImg[imgIdx]}
              alt="placeholder"
            />
          </div>
          <div
            className={` ${
              imgIdx > 0 ? "cursor-pointer hover:bg-primaryBg" : "opacity-0"
            } rounded-full p-2 ml-10 active:scale-95`}
            onClick={handlePrevImgIdx}
          >
            <ChevronRight />
          </div>
        </div>
        <div className="w-full p-6 h-full flex flex-col gap-3">
          <p className="font-bold text-xl">{title}</p>
          <ul className="flex flex-col gap-2">
            {description.map((detail) => {
              return <li>{detail}</li>;
            })}
          </ul>
          <p>{techStack}</p>
          <div className="flex gap-2">
            <Button text="Live Site" path={siteUrl} />
            <Button text="GitHub" path={githubUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
