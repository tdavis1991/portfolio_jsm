import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  briefcase,
  carrent,
  filmpire,
  refine,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Chemical Operator",
    company_name: "Koppers Performance Chemical",
    icon: briefcase,
    iconBg: "#FFFFFF",
    date: "Dec 2016 - Present",
    points: [
      "Test product samples for specific particle size and copper percentage.",
      "Work successfully with a diverse group of coworkers to accomplish goals and address issues related to ourproducts and services.",
      "Assist in training multiple employees in our work process and workplace safety.",
      "Took the initiative to learn the entire process to make and ship our product.",
      "Demonstrate self-reliance by meeting and exceeding workflow needs.",
    ],
  },
  {
    title: "Team Lead(Volunteer)",
    company_name: "Lambda School",
    icon: briefcase,
    iconBg: "#FFFFFF",
    date: "Dec 2019 - Feb 2020",
    points: [
      "Served as teaching assistant leading team of 10 students in daily code challenges in HTML, CSS, and JS.",
      "Delivered 1:1 feedback and code reviews on a weekly basis, and gave students feedback on areas of improvement.",
      "Led daily standup meetings to build camaraderie, facilitate the sharing of ideas and work progress, and provide guidance for that week’s study material",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Filmpire",
    description:
      "This web application enables users to sign in, favorite, and add movies to their watchlist. Additionally, users can view movie and actor details, as well as watch trailers provided by TMDB.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "alanAi",
        color: "pink-text-gradient",
      },
    ],
    image: filmpire,
    source_code_link: "https://github.com/tdavis1991/filmpire",
  },
  {
    name: "Refine",
    description:
      "This web application, built using Refine and React, allows users to sign in, create properties, view their properties, and delete their properties through CRUD operations using Mongoose and MongoDB. The application enables users to create various types of properties, collect and store relevant data for each property, and manage their properties efficiently.",
    tags: [
      {
        name: "refine",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: refine,
    source_code_link: "https://github.com/tdavis1991/yariga",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };