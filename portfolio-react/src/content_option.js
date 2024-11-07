const logotext = "Ayush Saklani";
const meta = {
    title: "Ayush Saklani",
    description: "I’m Ayush Saklani a CS undergrad, Full stack devloper, from Dehradun Uttrarakhand",
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

const dataabout = {
    title: "Know Me Better",
    aboutme: `Ayush saklani is an computer science undergrad from Dehradun, Uttarakhand pursuing BTech CSE (2025 batch) from Graphic era hill University.`,
};
const dataabout2 = [
    { title: "Birthdate", "data": "XX December 2004" },
    { title: "Website", "data": "ayushsaklani.vercel.app" },
    { title: "Phone", "data": "+91 9411169994" },
    { title: "City", "data": "Dehradun,Uttarakhand" },
    { title: "Age", "data": "19" },
    { title: "Degree", "data": "BTech CSE" },
    { title: "Email", "data": "ayushsaklani04@gmail.com" }
]
const worktimeline = [];

const skills = [{
    name: "C/C++",
    value: 90,
},
{
    name: "Python",
    value: 60,
},
{
    name: "JavaScript / Node.js",
    value: 70,
},
{
    name: "Express.js",
    value: 70,
},
{
    name: "React",
    value: 50,
},
{
    name: "MongoDB / Mongoose",
    value: 50,
},
{
    name: "HTML / CSS  / Bootstrap",
    value: 80,
},
{
    name: "Git / Github",
    value: 70,
},
{
    name: "Azure",
    value: 50,
}
];

const services = [];
const Education = [{
    Heading: "Education",
    data: [{
        title: "B.Tech CSE",
        date: "2021-2025",
        content: "Graphic Era Hill University, Dehradun",
        board: "GEHU",
    },
    {
        title: "Intermediate",
        date: "2020",
        content: "Modern School, Rishikesh",
        board: "ICSE",
    },
    {
        title: "Matriculation",
        date: "2018",
        content: "Modern School, Rishikesh",
        board: "ISC",
    },
    ],
}]
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
        title: "Projects",
        data: [
            {
                heading: "University campus navigator (Navit) (v.1.0)",
                tags: ["2024"],
                description: [
                    "Guides you to the place you want to go inside university campus.",
                    "Designed specially for freshers and Visiting Faculties.",
                    "Uses Dijkstra algorithm and show you the path to the room.",
                    "Uses OpenStreetMap for custom mapping features for map.",
                ],
                technologies: [
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                    "https://devicon-website.vercel.app/api/nodejs/original.svg",
                    "https://devicon-website.vercel.app/api/azure/original.svg",
                    "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
                    "https://upload.wikimedia.org/wikipedia/commons/b/b0/Openstreetmap_logo.svg",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Leaflet_logo.svg/1280px-Leaflet_logo.svg.png"],
            },
            {
                heading: "Class-Sync Timetable manager (v.1.8)",
                tags: ["2024"],
                description: [
                    "Created a web application to manage university timetables and prevent classroom scheduling conﬂicts.",
                    "Time table manager for students and teachers.",
                    "Designed server-side functionalities using NodeJS, MongoDB, and ExpressJS.",
                    "Built user interfaces with HTML, CSS, JavaScript, and React.js for students, teachers, and administrators.",
                    "Enabled real-time updates and conﬂict resolution through dedicated viewing and editing pages.",
                ],
                technologies: [
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
                    "https://devicon-website.vercel.app/api/react/original.svg",
                    "https://devicon-website.vercel.app/api/azure/original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
                    "https://upload.wikimedia.org/wikipedia/commons/b/bf/Status_iucn_EX_icon_blank.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-plain.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                ],
            },
            {
                heading: "Mr. Minesweeper",
                tags: ["2024"],
                description: [
                    "This is a implementation of the classic Minesweeper game built using HTML, CSS, and JavaScript.",
                    "Three difficulty levels: Easy, Medium, and Hard with diffrent board size and number of mines.",
                    "Flagging mines, Game over detection and audio effects.",
                ],
                technologies: [
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                ],
            }
        ],
    },
];

const contactConfig = {
    YOUR_EMAIL: "ayushsaklani04@gmail.com",
    YOUR_FONE: "+91 9411169994",
    description: "An computer science undergrad pursuing BTech CSE (2025 batch) from GEHU. I am a passionate programmer and a quick learner, always eager to learn new technologies and implement them in my projects.",
    github: 'github.com/ayush-saklani',
    linkedin: "linkedin.com/in/ayush-saklani",
};

const socialprofils = {
    github: "https://github.com/ayush-saklani/",
    linkedin: "https://www.linkedin.com/in/ayush-saklani/",
    instagram: "https://www.instagram.com/ayush_saklanii/",
    twitter: "https://x.com/ayush_saklanii",
};
export {
    meta,
    dataabout,
    dataabout2,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    resumedata,
};