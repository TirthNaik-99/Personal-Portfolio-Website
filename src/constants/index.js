import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  python,
  aws,
  reactjs,
  java,
  springboot,
  nodejs,
  mongodb,
  git,
  sql,
  docker,
  archi,
  mahindra,
  vanillakart,
  prabhupada,
  docubot,
  cryptovault,
  vaccine,

  langchain,
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
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Enthusiast",
    icon: creator,
  },
];

const technologies = [

  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
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
    name: "Springboot",
    icon: springboot,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Langchain",
    icon: langchain,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },

  {
    name: "git",
    icon: git,
  },
  
 
  
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Archi Farming Equipments",
    icon: archi,
    iconBg: "#ffffff",
    date: "August 2023 - February 2024",
    points: [
      "Contributed to the development of an E-commerce platform using Java (Spring Boot), React, and MySQL",
      "Integrated third-party APIs into the application, leveraging AWS services to extend functionality and enable seamless interaction ",
      "Diagnosed and resolved production issues, utilizing monitoring tools like Datadog to ensure system stability, performance, and quick resolution of critical bugs",
      "Automated CI/CD pipelines using Jenkins and GitHub Actions, integrating backend testing with Selenium",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "VanillaKart",
    icon: vanillakart,
    iconBg: "#e9ecef",
    date: "June 2023 - July 2023",
    points: [
      "Developed and optimized user interfaces using React.js, gaining hands-on experience with React Hooks, Context API, and state management tools.",
      "Assisted in backend development using Java and Spring Boot, working on RESTful APIs and implementing error handling and monitoring mechanisms.",
      "Worked with databases using SQL and PostgreSQL, optimizing queries to enhance data retrieval efficiency.",
      "Collaborated with cross-functional teams, participating in code reviews, debugging issues, and improving system performance.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Prabhupada world",
    icon: prabhupada,
    iconBg: "#f9f7f3",
    date: "July 2022 - Aug 2022",
    points: [
      "Assisted in developing and optimizing machine learning models using Python, Scikit-learn, and TensorFlow, improving model accuracy and efficiency.",
      "Implemented and tested predictive models for classification and regression tasks, fine-tuning hyperparameters for better results.",
      "Worked with databases using SQL and Pandas, extracting and analyzing large datasets for machine learning applications.",
      "Collaborated with seniors to develop machine learning models to enhance customer experience, including chatbot automation, sentiment analysis, and personalized recommendations.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Mahindra & Mahindra",
    icon: mahindra,
    iconBg: "#E6DEDD",
    date: "May 2021 - April 2022",
    points: [
      "Engineered dynamic user interfaces using React and TypeScript, while developing RESTful APIs with Spring Boot, ensuring efficient communication between frontend and backend and optimizing data processing and scalability.",
      "Implemented JWT-based authentication and role-based access control in both frontend (React/TypeScript) and backend (Java/Spring Boot) to enhance security, ensuring secure user access and data protection across the application.",
      "Managed MongoDB databases for optimized data handling and query performance, utilizing Git, Docker, Postman, and MERN stack technologies for version control, containerization, and API testing.",
      "Performed UI testing using Jest and Selenium to validate functionality, improve reliability, and seamless integration",
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
    name: "Document Bot",
    description:
      "The DocumentBOT is an AI-powered document assistant developed to explore RAG and LLMs, automating text extraction, summarization, and classification. It features secure authentication, search, and retrieval, enhancing workflow efficiency. Built with Python, NLP libraries, OCR (Tesseract), and a database, it showcases expertise in AI-driven automation and document management. The system is designed for researchers, professionals, and organizations to efficiently process and organize large volumes of data.",
    tags: [
      {
        name: "LLM",
        color: "blue-text-gradient",
      },
      {
        name: "RAG",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: docubot,
    source_code_link: "https://github.com/TirthNaik-99/DocumentBOT",
  },
  {
    name: "Cryptovault - Cryptocurrency website",
    description:
      "CryptoVault is a Progressive Web Application (PWA) designed to help users track cryptocurrency prices, monitor trends, and receive real-time alerts. Built with React.js, Redux, Node.js, Express.js, and REST API integration, it provides a seamless experience across desktop and mobile devices with offline capabilities, making it a reliable tool for crypto enthusiasts and traders.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: cryptovault,
    source_code_link: "https://github.com/TirthNaik-99/CryptoVault---Crpyocurrency-website",
  },
  {
    name: "Vaccine Management System",
    description:
      "The Vaccine Management System is a Java Swing-based application with database integration for vaccine distribution, inventory tracking, and appointment scheduling. It features real-time stock management and secure authentication for administrators, healthcare providers, and patients. Built with Java, Java Swing, and a database, it ensures efficient vaccine allocation and streamlined operations.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "javaswing",
        color: "green-text-gradient",
      },
      {
        name: "dbms",
        color: "pink-text-gradient",
      },
    ],
    image: vaccine,
    source_code_link: "https://github.com/TirthNaik-99/Vaccine-Management-System",
  },
];

export { services, technologies, experiences, testimonials, projects };
