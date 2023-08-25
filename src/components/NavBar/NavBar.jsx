import React from "react";

import NavBarLink from "./NavBarLink";

const navlinks = ["HOME", "EXPERIENCE", "PROJECTS"];

export default function NavBar() {
  return (
    <header className="w-full h-9 flex justify-end items-center p-4 mt-4">
      {navlinks.map((link) => (
        <NavBarLink text={link} />
      ))}
    </header>
  );
}
