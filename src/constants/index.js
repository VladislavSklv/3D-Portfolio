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
  meta,
  starbucks,
  tesla,
  shopify,
  restaurant,
  clinic,
  movie,
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
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
