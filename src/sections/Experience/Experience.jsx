import React from "react";
import LinkIcon from "../../components/icons/LinkIcon";

export default function Experience({
  company,
  position,
  description,
  dates,
  links,
  skills,
}) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex gap-2">
        <h2 className="font-bold">{company}</h2>
        <p>{position}</p>
        <p className="italic">{dates}</p>
      </div>
      <p>{description}</p>
      <div className="flex gap-2">
        {links &&
          links.length > 0 &&
          links.map(({ title, url }, index) => (
            <div className="flex items-center gap-1 border px-2 rounded-full hover:bg-gray-200">
              <LinkIcon classname={"w-4 h-4"} color="black" />
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                {title}
              </a>
            </div>
          ))}
      </div>
      {/* <div>
        {skills && skills.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {skills.map((skill, index) => (
              <p key={index} className="bg-gray-200 rounded-md p-1">
                {skill}
              </p>
            ))}
          </div>
        )}
      </div> */}
    </div>
  );
}
