import githublogo from "./assets/images/github-logo.png";
import expresslogo from "./assets/images/expressjs-logo.png";
import leafletlogo from "./assets/images/Leaflet_logo.png";
import vercellogo from "./assets/images/vercel-logo.png";

const logotext = "Ayush Saklani";

const meta = {
    title: "Ayush Saklani",
    short_description: "I’m Ayush Saklani a CS undergrad, Full stack devloper, from Dehradun Uttrarakhand",
    description: `An computer science undergrad pursuing BTech CSE (2025 batch) from GEHU. 
    I am a passionate programmer and a quick learner, always eager to learn new technologies and implement them in my projects.`,
};

const introdata = {
    title: "I’m Ayush Saklani",
    animated: {
        first: "I'm a Full Stack Developer",
        second: "I'm a CS undergrad",
        third: "I develop Web apps",
    },
    description: "I'm Ayush Saklani, an enthusiastic CS undergrad hailing from Dehradun, India.",
    your_img_url: "https://ayushsaklani.vercel.app/assets/img/bgog-sm.jpg",
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
    "nodejs": "https://devicon-website.vercel.app/api/nodejs/original.svg",
    "reactjs": "https://devicon-website.vercel.app/api/react/original.svg",
    "expressjs": expresslogo,
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
    "pandas": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg",
    "scikitlearn": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
    "tensorflow": "https://devicon-website.vercel.app/api/tensorflow/original.svg",
    "leetcode": "https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png",
    "chess.com": "https://play-lh.googleusercontent.com/A3MvSm0eEVCkHQP9rUE1Cl3ju90CqCjTxcQqt4tBDzEMT7RWixWBCFgT7mIcN0hk2Q",
    "pikachu": "https://64.media.tumblr.com/c3becd2c993f457fac2cd7b3bd53538d/tumblr_mivect2TMc1rfjowdo1_r1_500.gifv",
};

const Interests = [
    logos["c"], logos["cplusplus"], logos["leetcode"], logos["python"], logos["jupyter"], logos["java"], logos["html"], logos["css"],
    logos["tailwindcss"], logos["bootstrap"], logos["javascript"], logos["nodejs"], logos["reactjs"], logos["expressjs"], logos["mongodb"],
    logos["mongoose"], logos["azure"], logos["vercel"], logos["mysql"], logos["npm"], logos["openstreetmap"], logos["leaflet"], logos["windows11"],
    logos["linux"], logos["json"], logos["postman"], logos["vscode"], logos["pikachu"],
];

const dataabout = {
    title: "Know Me Better",
    aboutme: `Ayush saklani is an computer science undergrad from Dehradun, Uttarakhand pursuing BTech CSE (2025 batch) from Graphic era hill University.`,
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
    { title: "Website", "data": "ayushsaklani.vercel.app" },
    { title: "Email", "data": "ayushsaklani04@gmail.com" },
    { title: "City", "data": "Dehradun, Uttarakhand" },
    { title: "Degree", "data": "BTech CSE" },
    { title: "Age", "data": "20" },
]

const dataabout3 = [
    {
        title: "Problem solved",
        data: 127,
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
                tags: ["Software Developer Intern", "2024", "November-present"],
            },
            {
                heading: "Technology Business Incubator - GEU",
                tags: ["Full Stack Developer Intern","Summer Internship", "2024", "July-October"],
            },
        ],
    },
    {
        title: "Projects",
        data: [
            {
                heading: "Navit - University campus navigator (v.2.0)",
                link: "https://github.com/ayush-saklani/navit",
                hosted_link: "https://navit.vercel.app/",
                tags: ["2024"],
                description: [
                    "Guides you to the place you want to go inside university campus.",
                    "Designed specially for freshers and Visiting Faculties.",
                    "Uses Dijkstra algorithm and show you the path to the room.",
                    "Uses OpenStreetMap for custom mapping features for map.",
                ],
                technologies: [
                    logos["html"], logos["css"], logos["javascript"], logos['bootstrap'], logos["nodejs"], logos["expressjs"], logos["mongodb"], logos["mongoose"],
                    logos['azure'], logos["vercel"], logos["json"], logos["npm"], logos["python"], logos["postman"], logos["openstreetmap"], logos["leaflet"],
                ],
            },
            {
                heading: "Class-Sync Timetable manager (v.2.0)",
                link: "https://github.com/ayush-saklani/classsync",
                hosted_link: "https://projectclasssync.vercel.app/",
                tags: ["2024"],
                description: [
                    "Created a web application to manage university timetables and prevent classroom scheduling conﬂicts.",
                    "Time table manager for students and teachers.",
                    "Designed server-side functionalities using NodeJS, MongoDB, and ExpressJS.",
                    "Built user interfaces with HTML, CSS, JavaScript, and React.js for students, teachers, and administrators.",
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
                tags: ["2023"],
                description: [
                    "Uses the database from Kaggle with 100K book.",
                    "Machine Learning project that does content-based filtering to recommend the books to users.",
                ],
                technologies: [logos["python"], logos["jupyter"], logos["streamlit"], logos["numpy"], logos["pandas"], logos["scikitlearn"]],
            },
            {
                heading: "Stock price prediction using LSTM",
                link: "https://github.com/ayush-saklani/Stock-price-prediction-using-LSTM?tab=readme-ov-file",
                tags: ["2024"],
                description: [
                    "Uses the database from Kaggle with 100K book.",
                    "Machine Learning project that does content-based filtering to recommend the books to users.",
                ],
                technologies: [logos["python"], logos["jupyter"], logos['tensorflow'], logos["numpy"], logos["pandas"], logos["scikitlearn"]],
            },
            {
                heading: "Mr. Minesweeper",
                tags: ["2024"],
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
                tags: ["2024"],
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
                tags: ["2022"],
                description: [
                    "Implemented in C & C++ using flat file system with user and admin portal using OOPs concepts.",
                    "With admin and user portals.",
                ],
                technologies: [logos["c"], logos["cplusplus"]],
            },
            {
                heading: "Library Management System",
                link: "https://github.com/ayush-saklani/library-management-system",
                tags: ["2022"],
                description: [
                    "LMS implemented in C and CPP using flat file system.",
                    "Using OOPs concepts and basic frontend.",
                    "With Librarian and user portals.",
                ],
                technologies: [logos["c"], logos["cplusplus"]],
            },
        ],
    },
];

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
};