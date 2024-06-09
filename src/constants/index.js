import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate computer science student and beginner in AI and full stack development. I've built AI tools and completed various full stack projects. Eager to learn and innovate, I strive to blend technology and creativity, aiming to contribute to the future of AI and software development.`;

export const ABOUT_TEXT = `My journey in programming started with a profound curiosity about how technology works, and it has since blossomed into a passion for learning and creating. I thrive on tackling new challenges and continuously expanding my skill set. Whether it's developing intuitive web applications or experimenting with AI models, I am dedicated to delivering high-quality, efficient solutions. I enjoy working in collaborative environments and am always eager to contribute and learn from others. Beyond coding, I love exploring new technologies and staying active in the tech community.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],

  }
];

export const PROJECTS = [
  {
    title: "Handwritten Digit Recognition Tool",
    image: project1,
    description: "A handwritten digit recognition tool that uses neural network technology and is based on the MNIST dataset. It includes a demo GUI built with Gradio. Everything is coded using Python and TensorFlow. The model is 98% accurate.",
    technologies: ["Python", "TensorFlow", "Gradio", "MNIST Dataset"],
    gitlink:"https://github.com/nilupulpathum/handwritten-digit-recognizer"
  },
  {
    title: "Inventory Management System",
    image: project2,
    description:
      "An application for managing stocks and generating reports that mainly focused on Gems retail business. Used Python library, Flask for backend and database handling.",
    technologies: ["Python","Flask","HTML", "Tailwind", "SqlAlchemy", "Javascript"],
    gitlink:"https://github.com/nilupulpathum/inventory-managment-system"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    gitlink:"https://github.com/nilupulpathum/react-portfolio-website",
  },
  {
    title: "SP2YT- Spotify playlist downloader",
    image: project4,
    description: "A CLI application that transforms your Spotify playlists into downloadable MP3 files. By using python library yt-dlp, SP2YT fetches high-quality audio files, making your favorite music easily accessible offline for free.",
    technologies: ["Python", "yt-dlp", "Spotify API"],
    gitlink:"https://github.com/nilupulpathum/sp2yt"
  },
];

export const CONTACT = {
  address: "A35/1, Ingiriyawatte, Theligama, Sri Lanka. ",
  phoneNo: "+94 7871 749 61 ",
  email: "n.pathumliyanarachchi@gmail.com",
};

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/nilupul-pathum/",
  github: "https://github.com/nilupulpathum",
  instagram: "https://www.instagram.com/_.pxthx__m/"
}