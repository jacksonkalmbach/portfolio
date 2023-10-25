import React from "react";
import Close from "../icons/Close";

export default function MobileNav({ handleShowMobileNav }) {
  return (
    <div className="flex flex-col justify-start h-full w-full bg-primaryBg p-6">
      <div onClick={() => handleShowMobileNav(false)}>
        <Close />
      </div>
      <div className="flex flex-col gap-3 justify-center items-start w-full h-full">
        <p>EXPERIENCE</p>
        <p>PROJECTS</p>
      </div>
    </div>
  );
}
