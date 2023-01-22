// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import jira from "./assets/techstack/jira.png";
import alm from "./assets/techstack/alm.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Richa Sonawane",
  tagline: "I love creating exceptional digital experience.",
  img: profile,
  about: `Experienced and skilled Software Engineer having overall 7 years of functional testing experience across Banking/Consumer Goods/Insurance domain,
  venturing as a Frontend Developer who love to build things for web.
  Through my studies, I've gained a solid understanding of web development concepts, and have dedicated a lot of time to apply these concepts to real-world scenarios and applications.
  When I'm not trying to build, learning, exploring and thinking about how to make things better let it be 
  code or my home interiors, you can catch me watching documentaries.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: `https://www.linkedin.com/in/richa-sonawane`,
  github: "https://github.com/RichaSonawane",
  instagram: "https://www.instagram.com/richadeore/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Associate",
    Company: `Cognizant Technology Solutions`,
    Location: "Pune",
    Type: "Full Time",
    Duration: "Jan 2010 - Jan 2017",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position:
      "Software Engineering Fellowship - Accelerated, software engineering program",
    Company: "Hack bright Academy,",
    Location: "Dallas, Texas",
    Type: "Full Time",
    Duration: "Oct 2022 - Present",
  },
  {
    Position: "Bachelor of Information Technology",
    Company: `Dr. Babasaheb Ambedkar Technological University`,
    Location: "Raigad, Maharashtra, India.",
    Type: "Full Time",
    Duration: "2005 - 2009",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  jira: jira,
  alm: alm,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "TripPlanner",
    image: projectImage1,
    description: `I designed this application for user to know the current weather conditions of destination and manage daily activit's iternary list.I have used 2 APIs, open with API and Google Maps places API. `,
    techstack: "HTML/CSS, JavaScript, Express, Cors, Sequel, Postgress db, API, Axios",
    previewLink: "https://www.loom.com/share/2bbc21dd109749f5a0bfaf0382a7df9e",
    githubLink: "https://github.com/RichaSonawane/CapstoneTripPlanner.git",
  },
  {
    title: "Movie Watchlist",
    image: projectImage2,
    description: `This application can create a list of movies and displays them on the screen. User will be able to add different movies to a watchlist and cycle through pages of movies. `,
    techstack: "JavaScript, React, UseEffect Hook, Modular CSS, Axios, TMDB Movie API ",
    previewLink: "https://www.loom.com/share/e406e09dc8e14c3083b7083b394251b1",
    githubLink:
      "https://github.com/RichaSonawane/Movie-watchlist-react-app.git",
  },
//   {
//     title: "Project title 3",
//     image: projectImage3,
//     description: `This is sample project description random things are here in description This is sample
// project lorem ipsum generator for dummy content`,
//     techstack: "HTML/CSS, JavaScript",
//     previewLink: "https://google.com",
//     githubLink: "https://github.com",
//   },
  //   {
  //     title: "Project title 4",
  //     image: projectImage4,
  //     description: `This is sample project description random things are here in description This is sample
  // project lorem ipsum generator for dummy content`,
  //     techstack: "HTML/CSS, JavaScript",
  //     previewLink: "https://google.com",
  //     githubLink: "https://github.com",
  //   },
  //   {
  //     title: "Project title 5",
  //     image: projectImage5,
  //     description: `This is sample project description random things are here in description This is sample
  // project lorem ipsum generator for dummy content`,
  //     techstack: "HTML/CSS, JavaScript",
  //     previewLink: "https://google.com",
  //     githubLink: "https://github.com",
  //   },
  //   {
  //     title: "Project title 6",
  //     image: projectImage6,
  //     description: `This is sample project description random things are here in description This is sample
  // project lorem ipsum generator for dummy content`,
  //     techstack: "HTML/CSS, JavaScript",
  //     previewLink: "https://google.com",
  //     githubLink: "https://github.com",
  //   },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "Richa.sonawane@gmail.com",
};
