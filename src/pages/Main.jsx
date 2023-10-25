import React, { useState, useEffect, useRef } from "react";
import ContactFloater from "../components/Contact/ContactFloater";
import HamburgerIcon from "../components/icons/HamburgerIcon";
import FeaturedProjects from "../sections/Projects/FeaturedProjects";
import Contact from "../components/Contact/Contact";
import MobileNav from "../components/NavBar/MobileNav";

export default function Main() {
  const [section, setSection] = useState("Home");
  const [bg, setBg] = useState("white");
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);
  const mainRef = useRef(null);

  const sectionRefs = {
    Home: useRef(null),
    Experience: useRef(null),
    Projects: useRef(null),
    Contact: useRef(null),
  };

  const handleNavigationClick = (selectedSection) => {
    setBg("primaryBg");
    setShowNavigation(true);
    setSection(selectedSection);

    const selectedSectionRef = sectionRefs[selectedSection];
    if (selectedSectionRef.current) {
      selectedSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: mainRef.current,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const intersectingSection = entry.target.id;
          setSection(intersectingSection);
        }
      });
    }, observerOptions);

    // Observe all section elements
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`bg-white w-screen h-screen flex flex-col md:flex-row ${
        showNavigation && "border-y-20 border-primaryBg"
      }`}
    >
      <div
        className="md:hidden fixed left-10 top-10"
        onClick={() => setShowMobileNav(true)}
      >
        <HamburgerIcon />
      </div>
      <div
        className={` md:hidden w-3/5 h-screen bg-primaryBg ${
          showMobileNav ? "left-0" : "-left-3/5"
        }`}
      >
        <MobileNav />
      </div>

      <div className="hidden md:flex flex-col w-1/5 h-full justify-center items-end pb-20 pr-6 gap-6">
        <p
          className={`pr-4 cursor-pointer hover:font-bold transition-all duration-200 ${
            section === "Home" && "font-bold border-r-2 border-black"
          }`}
          onClick={() => handleNavigationClick("Home")}
        >
          Home
        </p>
        <p
          className={`pr-4 cursor-pointer hover:font-bold transition-all duration-200 ${
            section === "Experience" && "font-bold border-r-2 border-black"
          }`}
          onClick={() => handleNavigationClick("Experience")}
        >
          Experience
        </p>
        <p
          className={`pr-4 cursor-pointer hover:font-bold transition-all duration-200 ${
            section === "Projects" && "font-bold border-r-2 border-black"
          }`}
          onClick={() => handleNavigationClick("Projects")}
        >
          Projects
        </p>
        <p
          className={`pr-4 cursor-pointer hover:font-bold transition-all duration-200 ${
            section === "Contact" && "font-bold border-r-2 border-black"
          }`}
          onClick={() => handleNavigationClick("Contact")}
        >
          Contact
        </p>
      </div>
      <div
        className="w-full md:w-4/5 min-h-screen flex flex-col items-center overflow-auto"
        ref={mainRef}
      >
        <div
          id="Home"
          className="min-h-screen w-full flex flex-col justify-center items-center"
          ref={sectionRefs.Home}
        >
          <h1 className="text-3xl md:text-6xl font-bold">JACKSON KALMBACH</h1>
          <h1 className="text-xl md:text-4xl font-bold">Software Engineer</h1>
        </div>
        <div
          id="Experience"
          className="min-h-screen border flex flex-col justify-center items-center"
          ref={sectionRefs.Experience}
        >
          Experience
        </div>
        <div
          id="Projects"
          className="min-h-screen flex flex-col justify-center items-center"
          ref={sectionRefs.Projects}
        >
          <FeaturedProjects />
        </div>
        <div
          id="Contact"
          className="min-h-screen flex flex-col justify-center items-center"
          ref={sectionRefs.Contact}
        >
          <Contact />
        </div>
      </div>
      <div className="fixed right-10 bottom-10">
        <ContactFloater />
      </div>
    </div>
  );
}
