import githublogo from "./assets/images/github-logo.png";
import leafletlogo from "./assets/images/Leaflet_logo.png";
import vercellogo from "./assets/images/vercel-logo.png";
import myphoto2 from "./assets/images/me.jpg";
import myphoto3 from "./assets/images/me_2.png";
const logotext = "Ayush Saklani";

const images = {
    my_photo: myphoto3,
    my_photo2: myphoto3,
}

const meta = {
    title: "Ayush Saklani",
    short_description: "I’m Ayush Saklani a CS undergrad, Full stack devloper, from Dehradun Uttrarakhand",
    description: ` I am Ayush Saklani, a final-year CSE undergrad student. With a strong foundation in Machine Learning and Full-Stack Development. 
    I am a passionate programmer and a quick learner, always eager to learn new technologies and implement them in my projects.`,
};

const introdata = {
    title: "I’m Ayush Saklani",
    animated: {
        first: "I'm a Full Stack Developer",
        second: "I'm a CS undergrad Student",
        third: "I develop Web apps",
    },
    description: "I'm a Software Developer, hailing from Dehradun, Uttarakhand, India.",
    your_img_url: images.my_photo,
};

const logos = {
    "c": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    "cplusplus": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    "python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "jupyter": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg",
    "java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
    "html": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "css": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "tailwindcss": "https://devicon-website.vercel.app/api/tailwindcss/plain.svg",
    "bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    "javascript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "typescript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "graphql": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    "redux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    "nodejs": "https://devicon-website.vercel.app/api/nodejs/original.svg",
    "reactjs": "https://devicon-website.vercel.app/api/react/original.svg",
    "expressjs": "https://devicon-website.vercel.app/api/express/original.svg?color=%23FFFFFF",
    "mongodb": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
    "mongoose": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg",
    "azure": "https://devicon-website.vercel.app/api/azure/original.svg",
    "vercel": vercellogo,
    "json": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-plain.svg",
    "mysql": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    "npm": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
    "postman": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    "openstreetmap": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Openstreetmap_logo.svg",
    "leaflet": leafletlogo,
    "windows11": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg",
    "linux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    "vscode": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    "github": githublogo,
    "streamlit": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg",
    "numpy": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-plain-wordmark.svg",
    "pandas": "https://devicon-website.vercel.app/api/pandas/original-wordmark.svg?color=%23FFFFFF",
    "scikitlearn": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
    "tensorflow": "https://devicon-website.vercel.app/api/tensorflow/original.svg",
    "leetcode": "https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png",
    "chess.com": "https://play-lh.googleusercontent.com/A3MvSm0eEVCkHQP9rUE1Cl3ju90CqCjTxcQqt4tBDzEMT7RWixWBCFgT7mIcN0hk2Q",
    "pikachu": "https://64.media.tumblr.com/c3becd2c993f457fac2cd7b3bd53538d/tumblr_mivect2TMc1rfjowdo1_r1_500.gifv",
    "pikachu2": "https://i.pinimg.com/originals/ab/be/28/abbe28a943ed44fcd98452687f7c46c9.gif",
    "nextjs": "https://devicon-website.vercel.app/api/nextjs/original-wordmark.svg?color=%23FFFFFF",
    "nginx": "https://devicon-website.vercel.app/api/nginx/original.svg",
    "firebase": "https://devicon-website.vercel.app/api/firebase/plain-wordmark.svg",
    "postgressql": "https://devicon-website.vercel.app/api/postgresql/original.svg",

};

const Interests = [
    logos["c"], logos["cplusplus"], logos["leetcode"], logos["python"], logos["jupyter"], logos["reactjs"], logos["nextjs"],
    logos["tailwindcss"],  logos["javascript"], logos["typescript"], logos["nodejs"],
    logos["expressjs"], logos["firebase"], logos["mongodb"], logos["azure"],
    logos["mysql"], logos["openstreetmap"], logos["leaflet"], logos["json"], logos["postman"], logos["pikachu"],
];

const dataabout = {
    title: "Know Me Better",
    aboutme: "I am a final-year CSE undergrad student. With a strong foundation in Machine Learning and Full-Stack Development. I am a passionate programmer and a quick learner, always eager to learn new technologies and implement them in my projects.",
};

const socialprofils = {
    email: "mailto:ayushsaklani04@gmail.com",
    resume: "",
    github: "https://github.com/ayush-saklani/",
    linkedin: "https://www.linkedin.com/in/ayush-saklani/",
    instagram: "https://www.instagram.com/ayush_saklanii/",
    twitter: "https://x.com/ayush_saklanii",
    leetcode: "",
    chesscom: "https://www.chess.com/member/ayushsaklani",
};

const dataabout2 = [
    { title: "Email", "data": "ayushsaklani04@gmail.com" },
    { title: "City", "data": "Dehradun, Uttarakhand" },
    { title: "Degree", "data": "BTech CSE" },
    { title: "Age", "data": "20" },
    { title: "Languages", data: "English, Hindi" },
    // { title: "Interests", data: "Programming, Web Development, Machine Learning" },
]

const dataabout3 = [
    {
        title: "Problem solved",
        data: 148,
        logo_link: logos["leetcode"],
        link: socialprofils.leetcode,
    },
    {
        title: "Projects done",
        data: 10,
        logo_link: logos["github"],
        link: socialprofils.github,
    },
    {
        title: "Rapid Rating",
        data: 1552,
        logo_link: logos["chess.com"],
        link: socialprofils.chesscom
    }
];

const resumedata = [
    {
        title: "Education",
        data: [
            {
                heading: "Graphic Era Hill University, Dehradun",
                tags: ["GEHU", "B.Tech CSE", "2021-2025"],
            },
            {
                heading: "Modern School, Rishikesh",
                tags: ["ICSE", "Intermediate", "2020"],
            },
            {
                heading: "Modern School, Rishikesh",
                tags: ["ISC", "Matriculation", "2018"],
            }
        ],
    },
    {
        title: "Experience",
        data: [
            {
                heading: "Crux Sphere Technologies",
                tags: ["Software Developer Intern", "November 2024 - April 2025"],
            },
            {
                heading: "Technology Business Incubator - GEU",
                tags: ["Full Stack Developer Intern", "July 2024 - October 2024"],
            },
        ],
    },
    {
        title: "Projects",
        data: [
            {
                heading: "Timetable Generation using Genetic Algorithm",
                link: "https://github.com/ayush-saklani/classsync-generator",
                hosted_link: "",
                tags: ["2025", "Machine Learning"],
                description: [
                    "Created a Genetic Algorithm from scratch to generate the timetable for university.",
                    "This eliminates any conflicts, clashes and optimizes the timetable Scheduling.",
                    "It uses the data from the Class-Sync project to generate the timetable.",
                    "It Generates the timetable and saves it back to the database.",
                ],
                technologies: [
                    logos['python'], logos["jupyter"], logos["numpy"], logos["pandas"],
                    logos["javascript"], logos["nodejs"], logos["mongodb"], logos["json"]
                ],
            },
            {
                heading: "Navit - University campus navigator (v.2.1)",
                link: "https://github.com/ayush-saklani/navit",
                hosted_link: "https://navit.vercel.app/",
                tags: ["2024", "Web Development"],
                description: [
                    "Guides you to the place you want to go inside university campus.",
                    "Designed specially for freshers and Visiting Faculties.",
                    "Uses Dijkstra algorithm and show you the path to the room.",
                    "Uses OpenStreetMap for custom mapping features for map.",
                ],
                technologies: [
                    logos['reactjs'], logos["tailwindcss"],
                    logos["javascript"], logos['bootstrap'], logos["nodejs"], logos["expressjs"], logos["mongodb"], logos["mongoose"],
                    logos["json"], logos["openstreetmap"], logos["leaflet"], logos['azure'], logos["vercel"], logos["postman"],
                ],
            },
            {
                heading: "Class-Sync Timetable manager (v.2.0)",
                link: "https://github.com/ayush-saklani/classsync",
                hosted_link: "https://projectclasssync.vercel.app/",
                tags: ["2024", "Web Development"],
                description: [
                    "Created a web application to manage university timetables and prevent classroom scheduling conﬂicts.",
                    "Time table manager for Students and Teachers.",
                    "Designed server-side functionalities using NodeJS, MongoDB, and ExpressJS.",
                    "Built user interfaces with HTML, CSS, JavaScript, and React.js for students, teachers, and admins.",
                    "Enabled real-time updates and conﬂict resolution through dedicated viewing and editing pages.",
                ],
                technologies: [
                    logos["html"], logos["css"], logos["javascript"], logos['bootstrap'], logos["nodejs"], logos["expressjs"], logos["mongodb"], logos["mongoose"],
                    logos['azure'], logos["vercel"], logos["json"], logos["npm"], logos["postman"],
                ],
            },
            {
                heading: "Book Recommender System",
                link: "https://github.com/ayush-saklani/book-recommendation-system",
                tags: ["2023", "Machine Learning"],
                description: [
                    "Uses the database from Kaggle with 100K book.",
                    "Machine Learning project that does content-based filtering to recommend the books to users.",
                ],
                technologies: [logos["python"], logos["jupyter"], logos["streamlit"], logos["numpy"], logos["pandas"], logos["scikitlearn"]],
            },
            {
                heading: "Stock price prediction using LSTM",
                link: "https://github.com/ayush-saklani/Stock-price-prediction-using-LSTM?tab=readme-ov-file",
                tags: ["2024", "Machine Learning"],
                description: [
                    "Uses the database from Kaggle with 100K book.",
                    "Machine Learning project that does content-based filtering to recommend the books to users.",
                ],
                technologies: [logos["python"], logos["jupyter"], logos['tensorflow'], logos["numpy"], logos["pandas"], logos["scikitlearn"]],
            },
            {
                heading: "Mr. Minesweeper",
                tags: ["2024", "Web Development"],
                hosted_link: "https://mrminesweeper.vercel.app/",
                link: "https://github.com/ayush-saklani/minesweeper",
                description: [
                    "This is a implementation of the classic Minesweeper game built using HTML, CSS, and JavaScript.",
                    "Three difficulty levels: Easy, Medium, and Hard with diffrent board size and number of mines.",
                    "Flagging mines, Game over detection and audio effects.",
                ],
                technologies: [logos["html"], logos["css"], logos["javascript"], logos["bootstrap"],],
            },
            {
                heading: "Attendance Marking System (Mark my spot)",
                link: "https://github.com/ayush-saklani/QR-Atttendence-System",
                hosted_link: "https://markmyspot.vercel.app/",
                tags: ["2024", "Web Development"],
                description: [
                    "The Smart Attendance Marking web-based application.",
                    "It allows students to input their details via a web form and generates QR codes",
                    "Enables teachers to scan QR codes to mark attendance",
                    "later a CSV file with record can be downloaded.",
                ],
                technologies: [logos["html"], logos["css"], logos["javascript"]],
            },
            {
                heading: "Car Rental Management System",
                link: "https://github.com/ayush-saklani/car-rental-system",
                tags: ["2022", "Terminal Based"],
                description: [
                    "Implemented in C & C++ using flat file system with user and admin portal using OOPs concepts.",
                    "With admin and user portals.",
                ],
                technologies: [logos["c"], logos["cplusplus"]],
            },
            {
                heading: "Library Management System",
                link: "https://github.com/ayush-saklani/library-management-system",
                tags: ["2022", "Terminal Based"],
                description: [
                    "LMS implemented in C and CPP using flat file system.",
                    "Using OOPs concepts and basic terminal frontend.",
                    "With Librarian and user portals.",
                ],
                technologies: [logos["c"], logos["cplusplus"]],
            },
        ],
    },
];
const Education = [
    {
        heading: "Graphic Era Hill University, Dehradun",
        tags: ["GEHU", "B.Tech CSE"],
        year: "2021-2025",
        certification: "B.Tech CSE",
        board: "GEHU",
    },
    {
        heading: "Modern School, Rishikesh",
        tags: ["ICSE", "Intermediate"],
        year: "2020",
        certification: "12th",
        board: "ICSE",
    },
    {
        heading: "Modern School, Rishikesh",
        tags: ["ISC", "Matriculation"],
        year: "2018",
        certification: "10th",
        board: "ICSE",
    }
]
const Experience = [
    {
        heading: "Crux Sphere Technologies",
        role: "Software Developer Intern",
        year: "November 2024 - April 2025",
        tags: ["Software Developer Intern", "November 2024 - April 2025"],
        description: [
            "Worked on developing and maintaining web applications.",
            "Collaborated with a team to design and implement new features.",
            "Gained hands-on experience with full-stack development technologies.",
        ],
    },
    {
        heading: "Technology Business Incubator - GEU",
        role: "Full Stack Developer Intern",
        year: "July 2024 - October 2024",
        tags: ["Full Stack Developer Intern", "July 2024 - October 2024"],
        description: [
            "Worked on developing and maintaining web applications.",
            "Collaborated with a team to design and implement new features.",
            "Gained hands-on experience with full-stack development technologies.",
        ],
    },
]
const Projects = [
    {
        heading: "Class-Sync Generator - Timetable Generation using Genetic Algorithm",
        link: "https://github.com/ayush-saklani/classsync-generator",
        hosted_link: "",
        tags: ["2025", "Machine Learning"],
        description: [
            "Created a Genetic Algorithm from scratch to generate the timetable for university.",
            "It uses the data from the Class-Sync project to generate the timetable.",
            "It Generates the timetable and saves it back to the database.",
            "This eliminates any conflicts, clashes and optimizes the timetable Scheduling.",

        ],
        technologies: [
            logos["javascript"], logos["nodejs"], logos["mongodb"], logos["json"]
        ],
    },
    {
        heading: "Navit - University campus navigator (v.2.2)",
        link: "https://github.com/ayush-saklani/navit",
        hosted_link: "https://navit.vercel.app/",
        tags: ["2024", "Web Development"],
        description: [
            "Guides you to the place you want to go inside university campus.",
            "Designed specially for freshers and Visiting Faculties.",
            "Uses Dijkstra algorithm and show you the path to the room.",
            "Uses OpenStreetMap for custom mapping features for map.",
        ],
        technologies: [
            logos['reactjs'], logos["tailwindcss"],
            logos["javascript"], logos['bootstrap'], logos["nodejs"], logos["expressjs"], logos["mongodb"], logos["mongoose"],
            logos["json"], logos["openstreetmap"], logos["leaflet"], logos['azure'], logos["vercel"], logos["postman"],
        ],
    },
    {
        heading: "Class-Sync Timetable manager (v.2.0)",
        link: "https://github.com/ayush-saklani/classsync",
        hosted_link: "https://projectclasssync.vercel.app/",
        tags: ["2024", "Web Development"],
        description: [
            "Created a web application to manage university timetables and prevent classroom scheduling conﬂicts.",
            "Time table manager for Students and Teachers.",
            "Designed server-side functionalities using NodeJS, MongoDB, and ExpressJS.",
            "Built user interfaces with HTML, CSS, JavaScript, and React.js for students, teachers, and admins.",
            "Enabled real-time updates and conﬂict resolution through dedicated viewing and editing pages.",
        ],
        technologies: [
            logos["html"], logos["css"], logos["javascript"], logos['bootstrap'], logos["nodejs"], logos["expressjs"], logos["mongodb"], logos["mongoose"],
            logos['azure'], logos["vercel"], logos["json"], logos["npm"], logos["postman"],
        ],
    },
    {
        heading: "Book Recommender System",
        link: "https://github.com/ayush-saklani/book-recommendation-system",
        tags: ["2023", "Machine Learning"],
        description: [
            "Uses the database from Kaggle with 100K book.",
            "Machine Learning project that does content-based filtering to recommend the books to users.",
        ],
        technologies: [logos["python"], logos["jupyter"], logos["streamlit"], logos["numpy"], logos["pandas"], logos["scikitlearn"]],
    },
    {
        heading: "Stock price prediction using LSTM",
        link: "https://github.com/ayush-saklani/Stock-price-prediction-using-LSTM?tab=readme-ov-file",
        tags: ["2024", "Machine Learning"],
        description: [
            "Uses the database from Kaggle with 100K book.",
            "Machine Learning project that does content-based filtering to recommend the books to users.",
        ],
        technologies: [logos["python"], logos["jupyter"], logos['tensorflow'], logos["numpy"], logos["pandas"], logos["scikitlearn"]],
    },
    {
        heading: "Mr. Minesweeper",
        tags: ["2024", "Web Development"],
        hosted_link: "https://mrminesweeper.vercel.app/",
        link: "https://github.com/ayush-saklani/minesweeper",
        description: [
            "This is a implementation of the classic Minesweeper game built using HTML, CSS, and JavaScript.",
            "Three difficulty levels: Easy, Medium, and Hard with diffrent board size and number of mines.",
            "Flagging mines, Game over detection and audio effects.",
        ],
        technologies: [logos["html"], logos["css"], logos["javascript"], logos["bootstrap"],],
    },
    {
        heading: "Attendance Marking System (Mark my spot)",
        link: "https://github.com/ayush-saklani/QR-Atttendence-System",
        hosted_link: "https://markmyspot.vercel.app/",
        tags: ["2024", "Web Development"],
        description: [
            "The Smart Attendance Marking web-based application.",
            "It allows students to input their details via a web form and generates QR codes",
            "Enables teachers to scan QR codes to mark attendance",
            "later a CSV file with record can be downloaded.",
        ],
        technologies: [logos["html"], logos["css"], logos["javascript"]],
    },
    {
        heading: "Car Rental Management System",
        link: "https://github.com/ayush-saklani/car-rental-system",
        tags: ["2022", "Terminal Based"],
        description: [
            "Implemented in C & C++ using flat file system with user and admin portal using OOPs concepts.",
            "With admin and user portals.",
        ],
        technologies: [logos["c"], logos["cplusplus"]],
    },
    {
        heading: "Library Management System",
        link: "https://github.com/ayush-saklani/library-management-system",
        tags: ["2022", "Terminal Based"],
        description: [
            "LMS implemented in C and CPP using flat file system.",
            "Using OOPs concepts and basic terminal frontend.",
            "With Librarian and user portals.",
        ],
        technologies: [logos["c"], logos["cplusplus"]],
    },
]

export {
    meta,
    dataabout,
    dataabout2,
    dataabout3,
    introdata,
    socialprofils,
    logotext,
    resumedata,
    logos,
    Interests,
    images,
    Education,
    Experience,
    Projects,
};