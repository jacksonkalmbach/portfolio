import luxebetImg from "../../assets/luxebet/luxebet-1.png";
import luxebetImg2 from "../../assets/luxebet/luxebet-2.png";

import applyaiImg from "../../assets/applyai/applyai-1.png";
import applyaiImg2 from "../../assets/applyai/applyai-2.png";

export const projects = {
  luxebet: {
    title: "LuxeBet Casino",
    description: [
      "Developed and maintained an online casino application using React with TypeScript and a Python Flask server, enhancing the user experience with real-time gameplay.",
      "Implemented caching of external REST API queries in local storage to optimize performance, reducing server load and enhancing overall responsiveness for a seamless gaming experience.",
    ],
    techStack: ["TypeScript"],
    img: luxebetImg,
    siteUrl: "https://luxebet-casino.vercel.app/auth",
    githubUrl: "https://github.com/jacksonkalmbach/luxebet-casino",
    allImg: [luxebetImg2, luxebetImg],
  },
  applyai: {
    title: "Apply.ai",
    description: [
      "Optimized web performance by caching frequently accessed data in local storage, reducing the need for server requests and persisting user-specific settings and data across sessions.",
      "Developed and maintained a robust RESTful API to facilitate front-end and back-end communication, including OpenAI API for resume and cover letter tailoring and Stripe API for payments.",
      "Architected a NoSQL database using MongoDB, optimizing data retrieval and storage processes for scalability.",
    ],
    techStack: ["TypeScript"],
    img: luxebetImg,
    siteUrl: "",
    githubUrl: "",
    allImg: [applyaiImg, applyaiImg2],
  },
};
