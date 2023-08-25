import React from "react";

import Experience from "../sections/Experience/MyExperience";
import ContactFloater from "../components/Contact/ContactFloater";
import NavBar from "../components/NavBar/NavBar";
import FeaturedProjects from "../sections/Projects/FeaturedProjects";

export default function Main() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold">JACKSON KALMBACH</h1>
        <h1 className="text-4xl font-bold">Software Engineer</h1>
      </div>
      <Experience />
      <FeaturedProjects />
      <div className="fixed right-10 bottom-10">
        <ContactFloater />
      </div>
    </div>
  );
}
