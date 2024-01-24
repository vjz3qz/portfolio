export const education = [
  {
    school: "University of Virginia",
    logo: "/images/uva.png",
    degree: "Bachelors of Science",
    degreeAbbreviation: "B.S.",
    major: "Computer Science",
    time: "August 2021 – Dec 2024",
    gpa: "3.81",
    coursework:
      "Data Structures & Algorithms, Software Development, Machine Learning, Operating Systems, Computer Architecture, Cybersecurity, Discrete Mathematics, Linear Algebra, Probability, Statistics, Calculus, & Physics",
  },
];

export const experiences = [
  {
    company: "Trace AI",
    logo: "/images/traceai.jpg",
    position: "Founding Software Engineer",
    location: "San Francisco, VA",
    time: "Octover 2023 – Present",
    description: [
      "Built an AI-powered knowledge base for industrial facilities, using React, Flutter, Flask, and PostgreSQL.",
      "Led the end-to-end development of Trace AI’s platform, from user research and product management to DevOps, testing, and CI/CD. Managed a team of 3 developers using Agile and Kanban methods.",
      "Developed a multimodal retrieval-augmented generation system with LangChain, PG Vector, Elasticsearch, and ChromaDB, enabling search and interpretation across images, videos, and documents. Integrated OpenAI’s API.",
      "Trained a custom YOLOv8 model for computer vision in engineering diagrams, achieving 87% accuracy.",
      "Deployed on AWS cloud infrastructure (IAM, EC2, S3, Sagemaker, Lambda) and Supabase.",
    ],
    skills: [
      "React",
      "Flutter",
      "Flask",
      "PostgreSQL",
      "AWS",
      "Supabase",
      "CI/CD",
      "Computer Vision",
      "Generative AI",
    ],
  },
  {
    company: "Freddie Mac",
    logo: "/images/freddiemac.png",
    position: "Software Engineering Intern",
    location: "McLean, VA",
    time: "May 2023 – August 2023",
    description: [
      "Developed a data analysis app with object-oriented programming, slashing manual processing by 20+ hours monthly. Leveraged Python, Excel, and Tableau for data visualization, data analytics, and business analytics.",
      "Collaborated in an Agile Scrum team of interns in conceiving and pitching a secured document management software to combat data exfiltration. Designed a streamlined, scalable architecture with AWS cloud services (EC2, S3, Lambda). Won 2nd place in pitch competition.",
    ],
    skills: ["Python", "AWS", "Tableau", "Excel"],
  },
  {
    company: "Charlottesville Albemarle Rescue Squad",
    logo: "/images/cars.webp",
    position: "Software Engineering Intern",
    location: "Charlottesville, VA",
    time: "January 2023 – May 2023",
    description: [
      "Implemented a database manager application using the MERN stack, incorporating REST APIs and data validation to manage station-wide door permissions for 100+ members through secure CRUD operations.",
      "Tested and deployed [CARS Access Control](https://github.com/vjz3qz/carsac), a distributed, software security system (embedded system) with Python. Optimized the badge search via hash tables, slashing server CPU usage by 90% and lowering scan latency from 5s to 1s.",
      "Improved web services deployment with Ansible and Docker on Google Cloud (GCP), cutting time by 90%.",
    ],
    skills: [
      "Python",
      "C/C++",
      "Javascript",
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
    ],
  },
  {
    company: "Computation Systems Biology Lab at the University of Virginia",
    logo: "/images/uva.png",
    position: "Undergraduate Research Assistant",
    location: "Charlottesville, VA",
    time: "April 2022 – October 2023",
    description: [
      "Trained predictive [machine learning models](https://github.com/vjz3qz/cancer-metabolic-analysis) for human metabolic networks using MATLAB and Python (Pandas, Scikit-Learn, NumPy, Matplotlib), achieving a 94% accuracy in disease state predictions.",
      "Implemented parallel pre-processing using Bash and SLURM in a Linux/Unix HPC environment, reducing processing time by 60%.",
      "Recognized with the [GIDI-UP: Summer Research Award](https://gidi.virginia.edu/gidiup-summer-research-award) and awarded a grant of $10,000.",
    ],
    skills: [
      "Python",
      "Machine Learning",
      "Random Forest",
      "Unix/Linux",
      "HPC",
      "Bash",
      "MATLAB",
    ],
  },
];

export const projects = [
  {
    title: "DefibRadar",
    subtitle: "React Native, Django, PostgreSQL, AWS, Supabase, SQL",
    description:
      "DefibRadar is a mobile application that  that navigates users to AEDs by scraping public data via API in the backend.",
    image: "/images/defibradar.png",
    link: "https://github.com/vjz3qz/defib-radar",
  },
  {
    title: "Leftover Link",
    subtitle: "React.js, Node.js, Express.js, MongoDB, AWS, NoSQL",
    description:
      "Leftover Link is a full-stack application that aims to bridge the gap between local restaurants and homeless shelters, facilitating the donation of unused food before it goes to waste.",
    image: "/images/leftoverlink.png",
    link: "https://github.com/vjz3qz/leftover-link",
  },
  {
    title: "Brick Breaker",
    subtitle: "Java, Gradle, JUnit",
    description:
      "A Java-based GUI application replicating the classic Brick Breaker game, incorporating object oriented design and real-life physics principles.",
    image: "/images/brickbreaker.png",
    link: "https://github.com/vjz3qz/brick-breaker",
  },
  {
    title: "RateMyUVACourse",
    subtitle: "Java, Gradle, SQLite",
    description:
      "A secure Java-based Course Review Software System with a three-layer architecture, featuring user authentication and database persistence with SQLite.",
    image: "/images/coursereview.png",
    link: "https://github.com/vjz3qz/course-review",
  },
  {
    title: "FitLog",
    subtitle: "React.js, Node.js, Express.js, MongoDB, AWS",
    description:
      "Created a workout catalog/tracker enabling users to create, track, and add new workouts.",
    image: "/images/fitlog.png",
    link: "https://github.com/sanyashetty/workout-app",
  },
  {
    title: "Wordle",
    subtitle: "Java, Gradle, SQLite",
    description:
      "Developed a CLI-based Wordle clone. Followed TDD, achieving 100% unit test coverage with exception handling.",
    image: "/images/wordle.png",
    link: "https://github.com/vjz3qz/wordle",
  },
  {
    title: "Socket Chat",
    subtitle: "C, Unix/Linux, Socket Programming",
    description:
      "Socket Chat is a basic chat program written in C that enables real-time communication between two users over a network. It uses BSD-sockets to establish connections.",
    image: "/images/socketchat.png",
    link: "https://github.com/vjz3qz/socket-chat",
  },
];

export const skills = {
  languages: ["Python", "JavaScript", "Java", "SQL"],
  concepts: [
    "Object-Oriented Programming",
    "Machine Learning",
    "Web/Mobile Development",
    "CI/CD",
  ],
  frameworks: ["React/React Native", "Node.js/Express.js", "Flask", "Django"],
  devops: ["Git", "Docker", "AWS", "Linux/Unix"],
  databases: ["MongoDB", "PostgreSQL", "SQLite"],
  ml: [
    "LangChain",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Reinforcement Learning",
  ],
};
