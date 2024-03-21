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
  materialui,
  sass,
  git,
  figma,
  bem,
  restaurant,
  clinic,
  movie,
  threejs,
  arome,
  bott,
  burevestnik,
  clt,
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
    title: "Dynamic Web Sites",
    icon: web,
  },
  {
    title: "3D Visuals",
    icon: mobile,
  },
  {
    title: "Custom Animations",
    icon: backend,
  },
  {
    title: "SEO Friendly",
    icon: creator,
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
    name: "Material UI",
    icon: materialui,
  },
  {
    name: "Sass",
    icon: sass,
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
  {
    name: "BEM",
    icon: bem,
  },
];

const experiences = [
  {
    title: "Page for web site",
    company_name: "Burevestnik MashLit",
    icon: burevestnik,
    iconBg: "#E4222B",
    date: "15th of March 2022 - 1st of April 2022",
    points: [
      "Developed and maintained web page using HTML, CSS, JavaScript and other related technologies.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality product.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Connected page to the web site with custom admin panel.",
    ],
  },
  {
    title: "Landing page",
    company_name: "Bot-T",
    icon: bott,
    iconBg: "#383E56",
    date: "17th of July 2022 - 22th of July 2022",
    points: [
      "Developed landing page using HTML, CSS, JavaScript and other related technologies.",
      "Created unique design for the landing page.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Made lot`s of custom animations.",
    ],
  },
  {
    title: "Online shop",
    company_name: "Arome",
    icon: arome,
    iconBg: "#E6DEDD",
    date: "3rd of May 2023 - 17th of May 2023",
    points: [
      "Created online shop using HTML, CSS, JavaScript and other related technologies.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Made lot`s of custom animations.",
    ],
  },
  {
    title: "Web site",
    company_name: "CLT-PRO",
    icon: clt,
    iconBg: "#383E56",
    date: "7th of February 2024 - 4th of March 2024",
    points: [
      "Developed and maintained web page using HTML, CSS, JavaScript and other related technologies.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality product.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Participated in code reviews and provided constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Vlad proved me wrong.",
    name: "Pavel-GoodJob",
    designation: "CFO",
    company: "Bot-T",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Vladislav does.",
    name: "Aleksandr",
    designation: "COO",
    company: "CLT-PRO",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    testimonial:
      "Everything was done as quickly as possible, and most importantly with high quality. We can`t thank him enough!",
    name: "Gazovik7Smirnov",
    designation: "CTO",
    company: "Burevestnik",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const projects = [
  {
    name: "Restaurant",
    description:
      "Web application that uses Telegram WebApps and enables users to add dishes to cart and change the composition of the dish if possible.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "pink-text-gradient",
      },
    ],
    image: restaurant,
    source_code_link: "https://github.com/VladislavSklv/Restaurant",
  },
  {
    name: "Spa salon",
    description:
      "Web application that uses Telegram WebApps and enables users to choose treatments, select a specialist and book everything for the time and date of your choice.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "pink-text-gradient",
      },
    ],
    image: clinic,
    source_code_link: "https://github.com/VladislavSklv/Spa-Salon",
  },
  {
    name: "Movie Search",
    description:
      "A comprehensive movie searching platform that allows users to find any movie, TV series, and TV shows, and read critics' reviews of them.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/VladislavSklv/MovieApp",
  },
];

export { services, technologies, experiences, testimonials, projects };
