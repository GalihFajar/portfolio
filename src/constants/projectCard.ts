interface project {
  projectTitle: string;
  projectText: string;
  projectImage: any;
  projectLink: string;
}

const projects: project[] = [
  {
    projectTitle: "Amadeus",
    projectText: `Amadeus is a system for detecting social distancing violation (prior to COVID-19 protocol). 
       The system is designed to detect violations that occur in an indoor environment. 
       This project is the part of my team's final project at college.`,
    projectImage: "/project1.JPG",
    projectLink: `https://github.com/GalihFajar/Amadeus_UI`,
  },
  {
    projectTitle: "ltka-bot",
    projectText:
      "ltka-bot is a Telegram Bot, which its main features is its NLP capabilities. Powered by Facebook's wit.ai, ltka-bot can receive casual conversation as its input to deliver the result based on several API, such as wikipedia, wolfram, and random meme.",
    projectImage: "/project2.JPG",
    projectLink: `https://github.com/GalihFajar/ltka-bot`,
  },
  {
    projectTitle: "Portofolio",
    projectText: `This project is this actual page. Built by React-Typescript and Tailwind CSS, this project's main goal is
      to provide simplicity and can be easily modified thus can be recycled by anyone else.`,
    projectImage: "/project3.JPG",
    projectLink: "https://github.com/GalihFajar/portfolio",
  },
];

export default projects;
