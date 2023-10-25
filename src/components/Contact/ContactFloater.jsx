import React from "react";
import EmailIcon from "../icons/EmailIcon";
import GithubIcon from "../icons/GithubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";

export default function ContactFloater() {
  return (
    <div className="flex flex-col gap-2 w-fit h-fit">
      <a
        href="mailto:jacksonrkalmbach@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <EmailIcon
          classname="w-8 h-8 cursor-pointer hover:scale-125 transition-all duration-200"
          color="#000000"
        />
      </a>

      <a
        href="https://www.linkedin.com/in/jacksonkalmbach/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon
          classname="w-8 h-8 cursor-pointer hover:scale-125 transition-all duration-200"
          color="#000000"
        />
      </a>

      <a
        href="https://github.com/jacksonkalmbach"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon
          classname="w-8 h-8 cursor-pointer hover:scale-125 transition-all duration-200"
          theme="light"
        />
      </a>
    </div>
  );
}
