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
  carrent,
  jobit,
  tripguide,
  threejs, pgql, aws, laravel, wordpress, glowlogix, brackets,
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
    title: "Full Stack Software Enginner",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Custom Software",
    icon: backend,
  },
  {
    title: "3rd Party Integration",
    icon: creator,
  },
];

const technologies = [
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
    name: "Wordpress",
    icon: wordpress,
  },
  {
    name: "laravel",
    icon: laravel,
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
    name: "shopify",
    icon: shopify,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostGreSql",
    icon: pgql,
  },
  {
    name: "Amazon Web Services",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },
  // {
  //   name: "pgql",
  //   icon: pgql,
  // },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "Image Solutions",
    icon: starbucks,
    iconBg: "#383E56",
    date: "February 2019 – July 2019",
    points: [
      "Provided maintenance and support for Laravel-based applications, ensuring smooth operation\n" +
      "and functionality.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Lead Software Engineer",
    company_name: "Glowlogix Pvt Ltd",
    icon: glowlogix,
    iconBg: "#E6DEDD",
    date: "Sep 2019 – Jan 2023",
    points: [
      "Led a team of 7 developers in designing and deploying scalable web applications using PHP (Laravel) and modern front-end frameworks.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Collaborated closely with clients to deliver custom, user-centric web solutions.",
      "Ensured high-quality code standards and on-time project delivery through effective team coordination.",
      "Introduced process improvements to enhance productivity and project efficiency.",
    ],
  },
  {
    title: "Lead Software Engineer",
    company_name: "Brackets Pvt Limited",
    icon: brackets,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Led full-stack development of backend portals and frontend applications, optimizing system\n" +
      "performance and scalability by 30%.",
      "Collaborated with clients to gather requirements and delivered customized solutions aligned\n" +
      "with business needs.",
      "Implemented secure authentication systems and optimized database migrations to enhance\n" +
      "data integrity.",
      "Automated deployments using CI/CD pipelines, reducing deployment time by 50%, and\n" +
      "conducting code reviews to ensure adherence to best practices.",
      "Established real-time monitoring systems, reducing downtime by 40% and improving user\n" +
      "experience.",
    ],
  }
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
    name: "Tour27",
    description:
      "Developed a SaaS platform for immersive online tours, integrating microservices and virtual reality\n" +
        "features, serving over 10,000 users monthly.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://tour27.com/",
  },
  {
    name: "Vax Concierge",
    description:
      "Built a secure, multi-tenant vaccine tracking system with robust state-wise data management, handling\n" +
        "over 1 million records efficiently.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Eflea Watch Mobile App",
    description:
        "Developed a replica of the Miwitracker watch with real-time activity" +
        " tracking and customizable alerts for calls, messages, and apps. Optimized for extended battery life, lasting up to 10 days.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "grpc",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Derm on Demand",
    description:
      "Created a telemedicine platform for dermatology consultations, streamlining patient-doctor\n" +
        "interactions and handling 5,000 consultations monthly.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "grpc",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Gospel Musician App (Shopify App)",
    description:
      "Developed an order fulfillment app with API-based license management for digital product activation, supporting 1,000+ orders per month.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "shopify",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "custom-app",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "PlatinumHR",
    description:
      "Developed a comprehensive HR management platform integrating e-document solutions, an LMS, project boards, " +
        "and custom chat features, adopted by a Fortune 500 company in the USA.",
    tags: [
      {
        name: "vueJS",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "wordpress",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },

];

export { services, technologies, experiences, testimonials, projects };
