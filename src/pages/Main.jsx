import React, { useState, useEffect, useRef } from "react";
import ContactFloater from "../components/Contact/ContactFloater";
import HamburgerIcon from "../components/icons/HamburgerIcon";
import FeaturedProjects from "../sections/Projects/FeaturedProjects";
import MobileNav from "../components/NavBar/MobileNav";
import NavBar from "../components/NavBar/NavBar";
import MyExperience from "../sections/Experience/MyExperience";

export default function Main() {
  const [section, setSection] = useState("Home");
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
    setShowNavigation(true);
    setSection(selectedSection);

    const selectedSectionRef = sectionRefs[selectedSection];
    if (selectedSectionRef.current) {
      selectedSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      }); // Center the section in view
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
        className={`md:hidden w-3/5 h-screen bg-primaryBg ${
          showMobileNav ? "left-0" : "-left-3/5"
        }`}
      >
        <MobileNav />
      </div>
      <NavBar section={section} handleNavigationClick={handleNavigationClick} />
      <div
        className="w-full md:w-4/5 min-h-screen flex flex-col items-center overflow-y-auto overflow-x-hidden"
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
          className="min-h-screen w-full flex flex-col justify-center items-center"
          ref={sectionRefs.Experience}
        >
          <MyExperience />
        </div>
        <div
          id="Projects"
          className="min-h-screen flex flex-col justify-center items-center"
          ref={sectionRefs.Projects}
        >
          <FeaturedProjects />
        </div>
      </div>
      <div className="fixed right-10 bottom-10">
        <ContactFloater section={section} />
      </div>
    </div>
  );
}
