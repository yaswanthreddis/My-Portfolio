import my_profile_pic from "../images/my_profile_pic.jpg"
import github from "../images/github.svg"
import opencv from "../images/opencv.svg"
import pandas1 from "../images/pandas.png"
import express from "../images/express.png"
import bluestock from "../images/bluestock.png"
import intern from "../images/intern.png"
import sasi from "../images/sasi.jpg"
import amoon from "../images/amoon.jpg"
import akhil from "../images/akhil.jpg"
import PAS from "../images/PAS.png"
import res from "../images/res1.jpg"
import boty from "../images/boty1.jpg"
import uber from "../images/uber.jpg"

export const Bio = {
  name: "Yaswanth Reddy",
  roles: [
    "Data Analyst",
    "Python Developer",
    "ML/DL Enthusiast",
  ],
  description:
    "A recent graduate from Bapatla Engineering College with an honors degree in Information Technology. I am currently pursuing the Foundation Level in Data Science from IIT Madras.Now expanding my expertise in data science to drive data-driven decision-making and analytical insights.",
  github: "https://github.com/yaswanthreddis",
  resume:
    "https://drive.google.com/file/d/1bIV255ai6Z0X0Q5fcUaeGY2wTPLZXjgg/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/yaswanthreddys/",
  insta: "https://www.instagram.com/its_me_yaswanth_745/",
};

export const skills = [
  {
    title: "Data Analysis and Visualization", 
    skills: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "MySQL",
        image: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
      },
      {
        name: "Statistics",
        image:
          "https://www.svgrepo.com/show/41657/statistics.svg",
      },
      {
        name: "Excel",
        image:
          "https://www.svgrepo.com/show/452066/ms-excel.svg",
      },
      {
        name: "Power BI",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/900px-New_Power_BI_Logo.svg.png?20210102182532",
      },
    ],
  },
  {
    title: "ML/DL",
    skills: [
      {
        name: "Numpy",
        image:
          "https://www.svgrepo.com/show/373938/numpy.svg",
      },
      {
        name: "Pandas",
        image: pandas1,
      },
      {
        name: "Seaborn",
        image: "https://cdn.worldvectorlogo.com/logos/seaborn-1.svg",
      },
      {
        name: "ML",
        image:
          "https://cdn.iconscout.com/icon/premium/png-512-thumb/machine-learning-2038643-1719199.png?f=webp&w=256",
      },
      {
        name: "NLP",
        image: "https://cdn-icons-png.flaticon.com/128/9716/9716595.png",
      },
      {
        name: "OpenCV",
        image: opencv,
      },
    ],
  },
  {
    title: "Web Development",
    skills: [
      {
        name: "HTML",
        image:
          "https://www.svgrepo.com/show/452228/html-5.svg",
      },
      {
        name: "CSS",
        image:
          "https://www.svgrepo.com/show/452185/css-3.svg",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg",
      },
      {
        name: "Javascript",
        image:
          "https://www.svgrepo.com/show/353925/javascript.svg",
      },
      {
        name: "Node JS",
        image:
          "https://www.svgrepo.com/show/354119/nodejs-icon.svg",
      },
      {
        name: "Express JS",
        image:
          express,
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://www.svgrepo.com/show/452210/git.svg",
      },
      {
        name: "GitHub",
        image:
          github,
      },
      
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "CoPilot",
        image:
          "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/copilot-icon.png",
      },
      {
        name: "ChatGPT",
        image:
          "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png",
      },
      {
        name: "Canva",
        image:
          "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/canva-icon.png",
      },
      {
        name: "Figma",
        image:
          "https://cdn.iconscout.com/icon/free/png-512/free-figma-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-2944870.png?f=webp&w=256",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: bluestock,
    role: "Frontend Developer",
    company: "BlueStock Fintech",
    date: "June 2024 - August 2024",
    desc: "Developed a web application that provides IPO-related information to the public.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
    ],
    doc: "",
  },
  {
    id: 0,
    img: "https://www.maltech.co/assets/img/logo.png",
    role: "UI Developer",
    company: "Maltech Solutions Pvt. Ltd",
    date: "May 2023 - June 2023",
    desc: "During my internship, I successfully created clones of the Maltech and Newchic websites.Gained insights into web development best practices and user interface design",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Javascript",
      "JQuery",
      "Ajax",
    ],
    doc: "",
  },
  {
    id: 0,
    img: intern,
    role: "Web Developer",
    company: "Internshala",
    date: "May 2022 - June 2022",
    desc: "Developed a website called PG Life to display the nearest PG accommodations available in a specific region.Implemented features for users to search and filter PG listings based on location", 
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "MySQL",
      "PHP"
    ],
    doc: "",
  },
];

export const education = [
  {
    id: 0,
    img: "https://logowik.com/content/uploads/images/iit-madras-indian-institute-of-technology-madras4653.jpg",
    school: "IIT Madras B.S. Degree in Data Science",
    date: "July 2024 -Present",
    grade: "7.2 CGPA",
    desc: " I am currently pursuing the Foundation Level in Data Science from IIT Madras.Now expanding my expertise in data science to drive data-driven decision-making and analytical insights.",
    degree: "B.S. Degree in Data Science",
  },
  { 
    id: 1,
    img: "https://image.pngaaa.com/889/4690889-middle.png",
    school: "Bapatla Engineering College",
    date: "Feb 2021 - May 2024",
    grade: "8.92 CGPA",
    desc: "I am recently graduated from Bapatla Engineering College with an honors degree in Information Technology.Where i Learned OS, DBMS, Machine Learning and Data Analysis",
    degree: "Bachelor of Technology - BTech, Information Technology",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNrHzbJIK6_NKR1Tu9OrpqZ8Y9W626fEI1DQ&s",
    school: "Narayana Junior College",
    date: "June 2018 - March 2020",
    grade: "9.7 CGPA",
    desc: "I completed my Plus 2 education at Narayana Junior College, where I studied Mathematics, Physics, and Chemistry.",
    degree: "Intermediate (or) Plus 2",
  },
];

export const projects = [
  {
    id: 2,
    title: "Uber Trip Analysis",
    date: "June 2024 - Present ",
    description:
      "Conducted Uber Trip Analysis using Python, focusing on uncovering patterns and relationships within the datasets.",
    image:
      uber,
    tags: [
      "Python",
      "Excel",
      "Numpy",
      "Pandas",
      "Scikit-learn",
      "MatPlotlib"
    ],
    category: "Data Analysis",
    github: "https://github.com/yaswanthreddis/Uber-Trip-Analysis",
    webapp: "https://github.com/yaswanthreddis/Uber-Trip-Analysis",
    member: [
      {
        name: "Yaswanth Reddy Seelam",
        img: my_profile_pic,
        linkedin: "https://www.linkedin.com/in/yaswanthreddys/",
        github: "https://github.com/yaswanthreddis",
      }
    ],
  },
  {
    id: 0,
    title: "Resource Management System For Educational Instutions",
    date: "July 2024 - Present",
    description:
      "Developed and maintained backend of resource management system using Node.js and Express.js.Designed and managed the database schema with MySQL Workbench,creating efficient and complex SQL queries to support various CRUD operations.",
    image:
     res,
    tags: ["MySQL", "Node JS", "Express JS", "API's", "GithHub", "Logo Designing","website"],
    category: "Web",
    github: "https://github.com/yaswanthreddis/Resource-Management",
    webapp: "https://github.com/yaswanthreddis/Resource-Management",
    member: [
      {
        name: "Yaswanth Reddy Seelam",
        img: my_profile_pic,
        linkedin: "https://www.linkedin.com/in/yaswanthreddys/",
        github: "https://github.com/yaswanthreddis",
      },
      {
        name: "Sasidhar Pinjala",
        img: sasi,
        linkedin: "https://www.linkedin.com/in/sasidhar-pinjala-b09342217/",
        github: "https://github.com/Sasidhar1456",
      },
      {
        name: "Amoon Tabassum",
        img: amoon,
        linkedin: "https://www.linkedin.com/in/amoon-tabassum/",
        github: "https://github.com/amoontabassum",
      },
      {
        name: "Akhill Perumalla",
        img: akhil,
        linkedin: "https://www.linkedin.com/in/akhil-perumalla-22ab8b212/",
        github: "https://github.com/Akhil1188",
      },
    ],
  },
  {
    id: 0,
    title: "Placement Automation System",
    date: "July 2023 - Sep 2023",
    description:
      "Developed a Placement Automation System, streamlining data collection from the exam section and automating the generation of student placement details for faculty, reducing manual efforts and enhancing efficiency.",
    image:
      PAS,
    tags: [
      "HTML",
      "CSS",
      "BootStrap",
      "JavaScript",
      "Php",
      "Excel",
      "MySQL"
    ],
    category: "Web",
    github: "https://github.com/yaswanthreddis/Placement",
    webapp: "https://github.com/yaswanthreddis/Placement",
    member: [
      {
        name: "Yaswanth Reddy Seelam",
        img: my_profile_pic,
        linkedin: "https://www.linkedin.com/in/yaswanthreddys/",
        github: "https://github.com/yaswanthreddis",
      },
      {
        name: "Sasidhar Pinjala",
        img: sasi,
        linkedin: "https://www.linkedin.com/in/sasidhar-pinjala-b09342217/",
        github: "https://github.com/Sasidhar1456",
      },
    ]
  },
  {
    id: 1,
    title: "ChatGPT Chatbot",
    date: "Feb 2023 - Apr 2023",
    description:
      "Developed a chatbot similar to ChatGPT utilizing the OpenAI API key. I designed and implemented a user-friendly interface that allows users to interact seamlessly with the chatbot. The user interface was crafted to ensure intuitive and smooth communication, enabling users to engage in meaningful conversations.",
    image:
      boty,
    tags: ["NLP","HTML", "CSS", "Javascript", "Bootstrap", "OpenAi API",],
    category: "ML/DL/OpenCV",
    github: "https://github.com/yaswanthreddis",
    webapp: "https://github.com/yaswanthreddis",
    member: [
      {
        name: "Yaswanth Reddy Seelam",
        img: my_profile_pic,
        linkedin: "https://www.linkedin.com/in/yaswanthreddys/",
        github: "https://github.com/yaswanthreddis",
      }
    ],
  },
  
];


