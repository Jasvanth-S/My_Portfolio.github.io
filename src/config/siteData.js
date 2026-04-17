import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const siteData = {
    name: "Jasvanth. S",
    roles: [
        {
            title: "Full-Stack AI Developer",
            description: "Architecting hyper-intelligent platforms by fusing scalable frontend architectures with state-of-the-art Generative AI and deeply integrated RAG workflows."
        },
        {
            title: "AI & ML Engineer",
            description: "Forging the future of decision intelligence. I design, train, and deploy robust machine learning models and predictive pipelines to solve real-world complexities."
        },
        {
            title: "Agentic AI Developer",
            description: "Pioneering autonomous intelligence. I engineer dynamic agentic systems equipped with sophisticated multi-step reasoning, persistent memory, and advanced tool-calling."
        },
        {
            title: "FARM-Stack Architect",
            description: "Crafting lightning-fast, production-grade web experiences. I build seamless software ecosystems driven by high-performance APIs and stunning visual interfaces."
        },
        {
            title: "Data Intelligence Analyst",
            description: "Transforming raw datasets into actionable strategic foresight. Unleashing the power of advanced analytics and immersive visual dashboards to drive corporate strategy."
        }
    ],
    bio: "Passionate AI & Data Science Engineer focused on building intelligent systems, scalable products and real-world AI innovation. I specialize in Generative AI, RAG pipelines and Agentic workflows, combining advanced analytics with modern full-stack development. My mission is to bridge the gap between complex machine learning models and intuitive user experiences.",
    email: "jasvanth1010@gmail.com",
    profilePhoto: "/assets/profile.png",
    socials: [
        { name: "GitHub", url: "https://github.com/Jasvanth-S", icon: <FaGithub /> },
        { name: "LinkedIn", url: "https://linkedin.com/in/jasvanth1010", icon: <FaLinkedin /> },
        { name: "Email", url: "mailto:jasvanth1010@gmail.com", icon: <FaEnvelope /> },
    ],
    cvFiles: [
        { role: "Full-Stack AI Developer", file: "/assets/cv/Jasvanth_CV_Full_Stack_AI_Developer.pdf" },
        { role: "AI/ML Engineer", file: "/assets/cv/Jasvanth_CV_AI_ML_Engineer.pdf" },
        { role: "Agentic AI Engineer", file: "/assets/cv/Jasvanth_CV_Agentic_AI_Developer.pdf" },
        // { role: "FARM Stack Developer", file: "/assets/cv/Jasvanth_CV_FARM_Stack_Developer.pdf" },
        { role: "Data Intelligence Analyst", file: "/assets/cv/Jasvanth_CV_Data_Intelligence_Analyst.pdf" },
    ],

    // ---------------------------------------------------------
    // 1. WHO I'M SECTION DATA
    // ---------------------------------------------------------
    education: [
        {
            degree: "Bachelor of Technology", // Update as per actual degree
            institution: "Arjun College of Technology",
            specialization: "Artificial Intelligence and Data Science",
            year: "2023 - 2027",
            cgpa: "8.21",
            achievements: [
                "Sustained a high level of academic distinction with specialized expertise in Artificial Intelligence and Data Science, demonstrating strong analytical and problem-solving capabilities",
                "Led and executed technology-driven initiatives, fostering a culture of innovation through structured workshops, technical sessions and collaborative development efforts",
                "Architected and delivered a comprehensive capstone solution addressing real-world challenges, showcasing end-to-end proficiency in design, development and deployment of intelligent systems"
            ]
        }
    ],

    experience: [
        {
            role: "Artificial Intelligence Intern",
            company: "Grow Your Skills",
            location: "Bengaluru, Karnataka, India (Remote)",
            period: "Jul 2025 - Oct 2025",
            description: "Worked as an AI Intern with a strong focus on Generative AI, applied machine learning and data analytics. Contributed to the development of LLM-powered applications.",
            achievements: [
                "Built end-to-end AI solutions covering data preprocessing, model development and API deployment",
                "Developed LLM-based applications with exposure to agentic AI systems",
                "Designed and optimized data analysis pipelines for automation use cases"
            ]
        },
        {
            role: "Data Analyst Intern",
            company: "Besant Technologies",
            location: "Coimbatore, Tamil Nadu, India (Remote)",
            period: "Aug 2025 - Sep 2025",
            description: "Focused on transforming raw datasets into meaningful insights through analysis and visualization using SQL, Power BI and Python.",
            achievements: [
                "Performed data analysis to extract actionable business insights",
                "Designed interactive dashboards and reports using Power BI",
                "Improved data visualization clarity for better decision-making"
            ]
        },
        {
            role: "Data Visualization Intern (Power BI)",
            company: "Gateway Software Solutions",
            location: "Remote",
            period: "Apr 2025 - May 2025",
            description: "Worked on data visualization projects, converting business requirements into interactive dashboards.",
            achievements: [
                "Designed 4+ interactive Power BI dashboards for sales data",
                "Collaborated with stakeholders to gather requirements",
                "Improved report clarity by approximately 30%"
            ]
        },
        {
            role: "Data Analyst Intern",
            company: "Edunet Foundation",
            location: "Remote",
            period: "Sep 2024 - Oct 2024",
            description: "Focused on data analysis, visualization and stakeholder reporting using Power BI and Python.",
            achievements: [
                "Analyzed datasets with 10,000+ records to extract business insights",
                "Developed 5+ interactive Power BI dashboards",
                "Optimized data collection workflows, increasing accuracy by 15%"
            ]
        }
    ],

    highlights: [
         {
        title: "CIT Alumni Meet 2026",
        location: "Onsite",
        images: [
            "https://media.licdn.com/dms/image/v2/D5622AQFsi9c1OoWK6g/feedshare-shrink_2048_1536/B56Z0JKDwgH0Ao-/0/1773975125568?e=1778112000&v=beta&t=eLJFyC-EtVZ_iWCsmOEYyJXiF-c6-2phlBRWyIO9mqc",
            "https://media.licdn.com/dms/image/v2/D5622AQFktiHiyoFpGQ/feedshare-shrink_1280/B56Z0JKAg_H0AM-/0/1773975111975?e=1778112000&v=beta&t=9_pyO1wzSs0BdooeNo5ppWRXR7DgHbGlAntGS8JdwJY",
            "https://media.licdn.com/dms/image/v2/D5622AQFSFmiUfwVqGg/feedshare-shrink_2048_1536/B56Z0JKAnLH8Ak-/0/1773975112422?e=1778112000&v=beta&t=EwZ8Sj9ppJvDWH8ka2pI5BNS_jKXFM7U7dAagDkL-ow"
        ],
        description: "Attended the CIT Alumni Meet, exploring innovative projects and entrepreneurial ideas while engaging with industry leaders and inspiring personalities. Gained valuable insights, mentorship and motivation to apply learnings toward future innovations and team-driven growth.",
        date: "Mar 2026"
    },
    {
        title: "TNFS National Technical Paper Presentation – VIT Chennai",
        location: "Onsite",
        images: [
            "https://media.licdn.com/dms/image/v2/D5622AQHSCuYIOz4ukw/feedshare-shrink_2048_1536/B56Z0lPf53JgAg-/0/1774446313302?e=1778112000&v=beta&t=6_EroFEdVhVUxM1vV6rbhbBi_P-byeVmPm-NazY6CGw",
            "https://media.licdn.com/dms/image/v2/D5622AQHCG0xTaq1ZcA/feedshare-shrink_2048_1536/B56Z0lPgx0GYAg-/0/1774446316929?e=1778112000&v=beta&t=0iRNVn9HcL0wx6aXK6QMG5le5gmYqiFsEdVuQUpNmQY",
            "https://media.licdn.com/dms/image/v2/D5622AQHN6udlAoMF8A/feedshare-shrink_1280/B56Z0lPf6bJMAM-/0/1774446313396?e=1778112000&v=beta&t=8Y09-tu3NwsfDm9VXfGW2SRVDeQ-W07bzqz_wNFIX3U"
        ],
        description: "Participated in the TNFS National Technical Paper Presentation at VIT Chennai, presenting “SmartFire” and securing a place among the Top 23 finalists in the final round. Gained valuable recognition, teamwork experience and motivation to build impactful, technology-driven solutions for real-world challenges.",
        date: "Mar 2026"
    },
    {
        title: "Youth Talk 2025",
        location: "Onsite",
        images: [
            "https://media.licdn.com/dms/image/v2/D5622AQHBxGlgcUBRWA/feedshare-shrink_800/B56Zno07hnHUAg-/0/1760547816941?e=1778112000&v=beta&t=BkzH7LXMFEojwG4QcNjtW3uqk7F7AHB4K6a6VZGscgI",
            "https://media.licdn.com/dms/image/v2/D5622AQEWMx6PbqZqzw/feedshare-shrink_1280/B56Zno07hYI0As-/0/1760547814961?e=1778112000&v=beta&t=TD7xAs1LAwixxMWOyuwMXURelFdns4Mp_NqqNcf-8VM",
            "https://media.licdn.com/dms/image/v2/D5622AQFXP2LEW5z39w/feedshare-shrink_1280/B56Zno07iGI8As-/0/1760547814909?e=1778112000&v=beta&t=W-yk02gati7jqQ9RzYBYbut9yzdamKX2F1v_22FyvhY"
        ],
        description: "Attended Youth Talk 2025 at Coimbatore, gaining insights into the power of communication, leadership and impactful storytelling among young innovators. Inspired to enhance my public speaking and expression skills while embracing opportunities that foster confidence, clarity and meaningful influence.",
        date: "Nov 2025"
    },
    {
        title: "TN Global Startup Summit 2025",
        location: "Onsite",
        images: [
            "https://media.licdn.com/dms/image/v2/D5622AQGF5gEi5-LKcQ/feedshare-shrink_2048_1536/B56ZnoqtXjJ8Aw-/0/1760545135745?e=1778112000&v=beta&t=-Q62y-zKgcSBQlQbQ1yV0-sS5gh-NCZeoK4RCchu6JA",
            "https://media.licdn.com/dms/image/v2/D5622AQGU2WQR4twtBg/feedshare-shrink_2048_1536/B56ZnoqtW.JYA4-/0/1760545135547?e=1778112000&v=beta&t=u9Kjn6fXCiM-JTSaEL1Y5l8tRg3HTLyFQL-bFXofE-w",
            "https://media.licdn.com/dms/image/v2/D5622AQE8Bx5GQ0l5rw/feedshare-shrink_2048_1536/B56ZnoqtXsIsAw-/0/1760545135383?e=1778112000&v=beta&t=m16-_gKBy1t9r_C3cMWvuixaAf8xGDgLdwPYCGmbn18",
            "https://media.licdn.com/dms/image/v2/D5622AQHAmQN55-Ppjw/feedshare-shrink_1280/B56ZnoqtXVHIAs-/0/1760545135598?e=1778112000&v=beta&t=TWOn_Lni8USyLnw29lo1o2Y3pCnsPr_xW60mSTfAvkg"
        ],
        description: "Attended the Tamil Nadu Global Startup Summit 2025, gaining exposure to cutting-edge innovations, startup ecosystems and global entrepreneurial insights. Engaged with industry leaders, expanded my network and strengthened my perspective on building impactful, scalable solutions.",
        date: "Oct 2025"
    },
    {
        title: "Smart India Hackathon",
        location: "Internal Presentation",
        images: [
            "https://media.licdn.com/dms/image/v2/D5622AQELOGsOM1cLkA/feedshare-shrink_800/B56ZmMTLDpJkAg-/0/1758995460952?e=1778112000&v=beta&t=ESHs3Cu2_a9cIbUiMR4yvNe37Qo_xTICiM_yruxRjRM"
        ],
        description: "Presented “EasyML - Democratizing AI for Everyone” at Smart India Hackathon prelims, showcasing a scalable platform that simplifies AI/ML for non-technical users. Gained hands-on experience in building, deploying and pitching an end-to-end solution, strengthening my focus on accessible and impactful AI innovation.",
        date: "Oct 2025"
    },
    {
        title: "ZARAK 2K25 - HCAS",
        location: "Onsite",
        images: [
            "https://media.licdn.com/dms/image/v2/D5622AQHa_VxLCDkF3A/feedshare-shrink_800/B56ZmMX5PRHUAg-/0/1758996706498?e=1778112000&v=beta&t=aGA4Kug8kKAEZT0Iyu53mzxZ3Al7PP754EjExRtvJW4",
            "https://media.licdn.com/dms/image/v2/D5622AQHlwcKtbSjgtw/feedshare-shrink_2048_1536/B56ZmMX5O2JkAw-/0/1758996700843?e=1778112000&v=beta&t=hAwRE8hmKxltfnnBPCvdIUViyKS7A0H_AJAflsiAd3Y",
            "https://media.licdn.com/dms/image/v2/D5622AQHlPX1c9QqBhg/feedshare-shrink_2048_1536/B56ZmMX5PUHAAw-/0/1758996699216?e=1778112000&v=beta&t=Fv8GAVTM90i87Pkg0weOPmcL6hOr5H5TtgmD-3pOg9A",
            "https://media.licdn.com/dms/image/v2/D5622AQFmHZ7TraHvsg/feedshare-shrink_2048_1536/B56ZmMX5OvJsAw-/0/1758996701652?e=1778112000&v=beta&t=BRa5rBO_DsVoxNxAjk8gfAKMJb3atf5lDlVS3iJPtYA"
        ],
        description: "Presented on “The Role of Data Science in Industry 4.0 Manufacturing,” showcasing how AI, IoT and data-driven insights enable predictive maintenance, real-time monitoring and smarter operations. Gained valuable exposure to smart manufacturing innovations and strengthened my vision of integrating AI with industrial transformation.",
        date: "Sep 2025"
    },
    {
        title: "Youth for Climate Action",
        location: "Onsite",
        images: [
            "https://media.licdn.com/dms/image/v2/D5622AQGSIIIW6b4JmQ/feedshare-shrink_2048_1536/B56Znon6ABG4A0-/0/1760544436183?e=1778112000&v=beta&t=NqbbJrhdO2JYSv1GWzs2gPTnjhfXDJPGiZ_k-yULcdY",
            "https://media.licdn.com/dms/image/v2/D5622AQEWYuT-ANfuGA/feedshare-shrink_2048_1536/B56Znon6BCJkAw-/0/1760544435325?e=1778112000&v=beta&t=C-bXlWAeQOIrj_4ALoT1Cb2tuQ9Ea_5gKzfvLGzUF54",
            "https://media.licdn.com/dms/image/v2/D5622AQEzG0WKfr4xMg/feedshare-shrink_2048_1536/B56Znon6B2JoA0-/0/1760544433421?e=1778112000&v=beta&t=QrcKi66YqepQLq7JPjh8U8ivh20s6qQWtUrvlC3ag18"
        ],
        description: "Attended Youth for Climate Action — Lead the Change at Sri Eshwar College, a dynamic summit in collaboration with Anna University focused on climate-smart campus initiatives. Gained valuable insights from municipal leaders, academia and student innovators on driving practical, low-carbon solutions. An inspiring experience connecting policy, research and youth-led impact.",
        date: "Jan 2025"
    },
    {
        title: "PCET Code War  v1.0",
        location: "Onsite",
        images: [
            "https://www.codewar.in/img/CodeWarv1.0/img%20(17).png",
            "https://www.codewar.in/img/CodeWarv1.0/img%20(6).jpg"
        ],
        description: "Participated in a Python-based problem-solving event, successfully addressing the given challenge while actively engaging throughout the session. This experience marked our first event and provided valuable exposure to collaborative learning.",
        date: "DEC 2023"
    }
    ],

    // ---------------------------------------------------------
    // 2. EXPERTISE SECTION DATA
    // ---------------------------------------------------------
    skillsCategorized: [
        {
            category: "Programming Languages",
            skills: [
                { name: "Python", level: 95, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "JavaScript", level: 75, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "TypeScript", level: 70, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            ]
        },
        {
            category: "AI / Machine Learning",
            skills: [
                { name: "Scikit Learn", level: 70, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
                { name: "Pytorch", level: 85, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
                { name: "LLMs", level: 75, iconUrl: "https://drive.google.com/thumbnail?id=19Ty8w0YQTyxGS6fX0C_rytTHpE-97BHk&sz=w1000", customClass: "scale-[2.3]" },
                { name: "Agentic AI", level: 80, iconUrl: "https://cdn0.iconfinder.com/data/icons/ai-agent/512/ai-intelligent-agent-robot-03-256.png" },
                { name: "LangChain", level: 70, iconUrl: "https://api.iconify.design/simple-icons:langchain.svg?color=%2300F0FF" },
                { name: "LangGraph", level: 70, iconUrl: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langgraph-color.png" },
                { name: "CrewAI", level: 70, iconUrl: "https://avatars.githubusercontent.com/u/170677839?s=200&v=4" },
                { name: "RAG Systems", level: 75, iconUrl: "https://api.iconify.design/mdi:database-search.svg?color=%2300F0FF" },
                { name: "Vector DBs", level: 55, iconUrl: "https://vectorseek.com/wp-content/uploads/2023/09/Pinecone-Icon-Logo-Vector.svg-.png", customClass: "dark:invert" },
                { name: "Prompt Engineering", level: 80, iconUrl: "https://static.vecteezy.com/system/resources/previews/022/841/114/original/chatgpt-logo-transparent-background-free-png.png" },
                { name: "Generative AI", level: 85, iconUrl: "https://drive.google.com/thumbnail?id=1sKfzPRCS-VU8EmNtCM__c1r29LXOsoQt&sz=w1000", customClass: "scale-[2.5]"},
            ]
        },
        {
            category: "Data Analytics",
            skills: [
                { name: "Pandas", level: 95, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
                { name: "NumPy", level: 90, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
                { name: "SQL", level: 85, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
                { name: "Power BI", level: 90, iconUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
                { name: "Tableau", level: 80, iconUrl: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
            ]
        },
        {
            category: "Full Stack Development",
            skills: [
                { name: "React", level: 65, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Next.js", level: 65, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                { name: "Tailwind CSS", level: 80, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
                { name: "FastAPI", level: 80, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
                { name: "Django", level: 50, iconUrl: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/django-icon.png" },
                { name: "Flask", level: 70, iconUrl: "https://www.seekpng.com/png/full/875-8753366_flask-png.png" },
                { name: "Streamlit", level: 70, iconUrl: "https://miro.medium.com/v2/resize:fit:628/1*MpZGG5oPHVFlFDTu4b_1IA.png" },
                { name: "MongoDB", level: 75, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                { name: "PostgreSQL", level: 65, iconUrl: "https://freepnglogo.com/images/all_img/postgresql-logo-e3e7.png" }
            ]
        },
        {
            category: "Tools & Platforms",
            skills: [
                { name: "Git & GitHub", level: 90, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "Docker", level: 55, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                { name: "VS Code", level: 90, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
                { name: "Jupyter Notebook", level: 95, iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
                { name: "n8n", level: 40, iconUrl: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/n8n.png" },
                { name: "Excel & Sheets", level: 90, iconUrl: "https://www.pngall.com/wp-content/uploads/15/Excel-Logo-PNG-Images-HD.png" },
                { name: "PPT & Slides", level: 90, iconUrl: "https://static.vecteezy.com/system/resources/thumbnails/022/037/341/small_2x/3d-file-ppt-folder-icon-illustration-png.png" }
            ]
        }
    ],

    certifications: [
        {
            name: "Gen AI Engineering Mastermind",
            organization: "Outskill",
            year: "2026",
            image: "https://media.licdn.com/dms/image/v2/D562DAQF0cXcyRUXaEg/profile-treasury-image-shrink_1920_1920/B56Z182XPiHAAg-/0/1775916120314?e=1776787200&v=beta&t=foUSQK7nQvJNk2wqr99l-6fSlltV6D8xXleAARLRsPU",
            link: "#" // Insert real credential link here
        },
        {
            name: "The Complete React.js Beginner Course",
            organization: "Udemy",
            year: "2026",
            image: "https://media.licdn.com/dms/image/v2/D562DAQFLb7ENt2SUjA/profile-treasury-document-images_1280/B56ZyJPGMEG4AU-/1/1771828964252?e=1776902400&v=beta&t=dD0AiLjo5d3ZevbmJExDZTYM8xARQY0Zi2HxNavf24U",
            link: "#" // Insert real credential link here
        },
        {
            name: "AI Agents Intensive Course with Google",
            organization: "Google",
            year: "2025",
            image: "" ,
            link: "https://www.kaggle.com/certification/badges/jasvanth10/105" // Insert real credential link here
        },
        {
            name: "Master class on Data Science using Python",
            organization: "Udemy",
            year: "2025",
            image: "https://media.licdn.com/dms/image/v2/D562DAQFYHWU0f1JckA/profile-treasury-image-shrink_1920_1920/B56ZgZXB9IHQAc-/0/1752772125375?e=1776787200&v=beta&t=84sOnl4cLeewJ6XZUF8-2oIgtAhNhqzjnQxgGWOsKm8",
            link: "#" // Insert real credential link here
        },
        {
            name: "Master in Data Science to become a Data Scientist",
            organization: "Udemy",
            year: "2025",
            image: "https://udemy-certificate.s3.amazonaws.com/image/UC-73839a10-3dbd-4baa-bfe0-64ec386a5efe.jpg?v=1752771360000",
            link: "https://www.udemy.com/certificate/UC-73839a10-3dbd-4baa-bfe0-64ec386a5efe/" // Insert real credential link here
        },
        {
            name: "Oracle Certified Foundations Associate",
            organization: "Oracle University",
            year: "2025",
            image: "https://media.licdn.com/dms/image/v2/D562DAQHLu_zdtJjyxg/profile-treasury-image-shrink_1280_1280/B56Zf3sQYtHoAQ-/0/1752207264772?e=1776787200&v=beta&t=zVsmQ9bRgvsjsTPScdhXTtjwESDyKuA-fFeYvKsnLHc",
            link: "#" // Insert real credential link here
        },
        {
            name: "AI Tools Master Class",
            year: "2026",
            image: "https://drive.google.com/file/d/1JnIc3onZdFbsMZOM258XP2AP1wgYS8Bk/view?usp=sharing",
            link: "#" // Insert real credential link here
        },
        {
            name: "Data Analyst Internship Completion",
            organization: "Besant Technologies",
            year: "2025",
            image: "https://media.licdn.com/dms/image/v2/D5622AQHe5atYSN_OtA/feedshare-shrink_800/B56ZnZCGzpJwAg-/0/1760282833339?e=1778112000&v=beta&t=sCM-TfjXjMfEzL9Ml8kqA_0FXChPupf2ZtEW0qA5GIQ",
            link: "#" // Insert real credential link here
        },
        {
            name: "Full-Stack Master Class",
            organization: "Noviteh",
            year: "2025",
            image: "https://drive.google.com/file/d/1i5C037fqBA34sv9KggI0aBj5-lYT8831/view?usp=sharing",
            link: "https://drive.google.com/file/d/1i5C037fqBA34sv9KggI0aBj5-lYT8831/view?usp=sharing" // Insert real credential link here
        },
        {
            name: "Power BI Master Class",
            organization: "OfficeMaster",
            year: "2025",
            image: "https://drive.google.com/file/d/1AQh9MMW7woiyYAg4QMqM-6BzT4Sgu3QZ/view?usp=sharing",
            link: "https://drive.google.com/file/d/1AQh9MMW7woiyYAg4QMqM-6BzT4Sgu3QZ/view?usp=sharing" // Insert real credential link here
        },
        {
            name: "Cyber Secrity",
            organization: "Naan Mudhalvan - ingage",
            year: "2025",
            image: "https://drive.google.com/file/d/1y2j6HkcBYjs0XK_7cTj2_D8Luf6GU056/view?usp=sharing",
            link: "#" // Insert real credential link here
        },
        {
            name: "Gen AI Foundation with Copilot",
            organization: "Microsoft Learning",
            year: "2025",
            image: [
                "https://drive.google.com/file/d/1B66as29K6bnv7ltAFFyuootoohozQ2Vm/view?usp=sharing",
                "https://drive.google.com/file/d/1-zjv1oY9DyZiWXsOMVykuZ1lsHfFww8Y/view?usp=sharing",
                "https://drive.google.com/file/d/1l2DqXFNRHEv6-vnujoJaArLQ4SGYRDjk/view?usp=sharing"
            ],
            link: "#" // Insert real credential link here
        },
        {
            name: "Flipkart Project Completion Certificate",
            organization: "Devtown - [Google, Microsoft, MSME]",
            year: "2025",
            image: [
                "https://drive.google.com/file/d/1_bD0ZfBZcTqK93k0o3inOQKmChgSPrrQ/view?usp=sharing",
                "https://drive.google.com/file/d/1jcEbRbpLNh76KBotsf9fr2uvzXga8dmC/view?usp=sharing",
                "https://drive.google.com/file/d/1n_j65mYPxkP2vpkZo_ukwCquKUSpcS5j/view?usp=sharing"
            ],
            link: "#" // Insert real credential link here
        },
        {
            name: "Heart Disease Prediction Project Completion",
            organization: "Devtown - [Google, Microsoft, MSME]",
            year: "2025",
            image: [
                "https://drive.google.com/file/d/1jlgo9rQKDmaLG6X7yAWX-RH_-ijR0JBh/view?usp=sharing",
                "https://drive.google.com/file/d/1khRF26Bo1lPTYqQn-tXaolaC7mhN-Su5/view?usp=sharing",
                "https://drive.google.com/file/d/1g6J7seIwAXACPNF6MKZHjvZ1YfVFm3U9/view?usp=sharing"
            ],
            link: "#" // Insert real credential link here
        },
        {
            name: "Course and Internship Completion for Data Science & AI",
            organization: "Devtown - [Google, Microsoft, MSME]",
            year: "2025",
            image: [
                "https://drive.google.com/file/d/1jr6kyOktoiNI9Gdzw1Bsydor6CEsrrzL/view?usp=sharing",
                "https://drive.google.com/file/d/1QWVkNVLOfkbu4r40SfOgPCZAPSCcn9NQ/view?usp=sharing"
            ],
            link: "#" // Insert real credential link here
        },
        {
            name: "Green Skills and AI Foundation",
            organization: "Edunet Foundation - Skil4Future",
            year: "2024",
            image: "https://media.licdn.com/dms/image/v2/D5622AQEIsUL9eezkhQ/feedshare-shrink_800/B56ZfE9KToHoAo-/0/1751356058331?e=1778112000&v=beta&t=x4QY4gzczo4RfJBWFvr5-nueVzj9mtZB9cVueZERnpI",
            link: "#" // Insert real credential link here
        }
    ],

    // ---------------------------------------------------------
    // 3. CREATIONS SECTION DATA
    // ---------------------------------------------------------
    signatureProjects: [
        {
            title: "Jasvanth | AI & Full Stack Portfolio",
            description: "Personal portfolio showcasing AI, machine learning, and full stack development projects with a modern and professional interface.",
            problemSolved: "Creates a centralized platform to present skills, projects, and professional achievements to recruiters and collaborators.",
            technologies: ["React.js", "Tailwind CSS", "JavaScript", "Framer Motion", "Git", "Rsponsive Design"],
            outcome: "Established a strong professional presence through a structured and visually engaging portfolio.",
            image: "https://avatars.githubusercontent.com/u/178203878?s=96&v=4",
            github: "https://github.com/Jasvanth-S/my_portfolio",
            live: "https://jasvanth-s.github.io/my_portfolio/"
        },
        {
            title: "Smart_Academic_Assistance",
            description: "A production-ready Agentic RAG Telegram Bot with a 'Dual-Brain' architecture. Prioritizes strict answers from Google Drive, seamlessly falling back to Llama 3 for general knowledge.",
            problemSolved: "Bridges static documentation with dynamic AI to provide instantaneous academic assistance.",
            technologies: ["Python", "FastAPI", "LangChain", "CrewAI", "RAG", "Docker", "Llama 3", "Groq Console", "Telegram Bot"],
            outcome: "Reduced document lookup time by 80% with real-time conversational interface.",
            image: "https://avatars.githubusercontent.com/u/178203878?s=96&v=4",
            github: "https://github.com/Jasvanth-S/Smart_Academic_Assistance",
            live: "https://t.me/Academic_Smart_v1_bot",
        },
        {
            title: "EasyML",
            description: "End-to-end web app that lets you explore tabular data, clean it, choose ML models, visualize results, and run real-time predictions without notebooks.",
            problemSolved: "Simplifies the complex ML pipeline into an accessible, no-code/low-code interface.",
            technologies: ["Python", "HTML", "CSS", "JavaScript", "Flask", "Scikit-learn", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Render"],
            outcome: "Empowered non-technical users to generate trained models and insights in minutes.",
            image: "https://avatars.githubusercontent.com/u/178203878?s=96&v=4",
            github: "https://github.com/Jasvanth-S/EasyML",
            live: "https://easyml-webapp.onrender.com/",
        },
        {
            title: "Trading_Prediction",
            description: "Interactive web application using machine learning to forecast short-term stock and cryptocurrency movements. Built with Streamlit and Yahoo Finance.",
            problemSolved: "Helps retail investors analyze market trends using predictive AI modeling.",
            technologies: ["Python", "Streamlit", "Scikit-Learn", "Pandas", "Numpy", "Matplotlib", "yfinance", "jupyter Notebook", "Joblib"],
            outcome: "Delivered intuitive visualizations mapping historical data to ML predictions.",
            image: "https://avatars.githubusercontent.com/u/178203878?s=96&v=4",
            github: "https://github.com/Jasvanth-S/Trading_Prediction",
            live: "",
        },
        {
            title: "Heart Disease Prediction Model",
            description: "Machine learning application that predicts heart disease risk using clinical and lifestyle data.",
            problemSolved: "Enables early risk assessment to support proactive healthcare decisions.",
            technologies: ["Python", "Streamlit", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Kaggle", "Jupyter Notebook", "Joblib"],
            outcome: "Delivered accurate predictions with clear data visualizations for better interpretability.",
            image: "https://avatars.githubusercontent.com/u/178203878?s=96&v=4",
            github: "https://github.com/Jasvanth-S/Heart_Disease_Prediction",
            live: ""
        }
    ],

    professionalEngagements: [
        {
            client: "3D Print With Sruthi",
            summary: "End-to-End E-commerce Platform Development",
            contribution: "Designed and developed a full-stack e-commerce website using Next.js and Tailwind CSS, with role based authentication and integrating Cashfree for secure online payments and seamless checkout experience.",
            impact: "Enabled the client to establish a scalable online presence, streamline product sales and improve customer conversion rates.",
            image: "https://drive.google.com/uc?export=view&id=1GMkOqol79gFsRWDYbz7H2MlDW05M1Fel",
            link: "https://www.3dprintwithsruthi.in/",
            category: "Full Stack Development"
        },
        {
            client: "Arjun College of Technology",
            summary: "Event Management and Registration Platform for Futurix 2026",
            contribution: "Developed a dynamic event website to showcase event details, department and college information, along with an integrated registration and payment system for seamless participant onboarding.",
            impact: "Streamlined event promotions and registrations, improving participant engagement and enabling efficient digital management of Futurix 2026.",
            image: "https://drive.google.com/uc?export=view&id=1M4sBBsNbVJqSBGlcW3VkUruJw3wqNge1",
            link: "https://act-blogs.github.io/FuturiX_2026/",
            category: "Web Development"
        },
        {
            client: "KeyMart Global",
            summary: "Premium Digital Subscription Retailer, Automated Account Creation and Status Tracking System",
            contribution: "Developed dedicated account creation and status tracking pages for Adobe and Canva premium subscriptions, integrated with WhatsApp automation to manage and update order status in real time.",
            impact: "Reduced manual processing, improved operational efficiency and enabled seamless communication and status updates for customers.",
            image: "https://drive.google.com/uc?export=view&id=1ZV3LwcEBSBssdBzzFmV5e-YfaW5K3M-_",
            link: "https://adobe-seller--jasvanth1010.replit.app/",
            category: "Automation & Web Development"
        }
    ],

    research: [
        {
            title: "Leveraging Artificial Intelligence and Data Science for Small Business Growth: Opportunities, Challenges and Solutions",
            conference: "Draft",
            summary: "Artificial Intelligence and Data Science are increasingly enabling small businesses to enhance operational efficiency, improve decision-making and deliver more personalized customer experiences through accessible and cost-effective technologies. This paper examines how these technologies create competitive advantages, outlines the key challenges in adoption and presents practical solutions and real-world applications that support sustainable growth and innovation in small enterprises.",
            link: "https://drive.google.com/file/d/12k-N4qII3qFK11TCxP-Q7lX2ojcx-hgE/view?usp=sharing"
        },
        {
            title: "HEALTH GUARDIAN AI: Agentic Wearable Health Orchestration System",
            conference: "Progression",
            summary: "Health Guardian AI is an agentic wearable health system that integrates multi-agent coordination, digital twins and federated learning to enable continuous, proactive and privacy-preserving health monitoring. It combines edge, device and cloud intelligence to deliver real-time risk assessment, prioritized alerts and seamless clinical integration, improving decision-making and long-term patient care.",
            link: "https://drive.google.com/file/d/1LPVpAH4bilmcEWVG_dGABWjdk-Yekzh4/view?usp=sharing"
        },
        {
            title: "SMARTFIRE AI OPTIMIZER: AI-Based Fire-Station Location Optimization for Enhanced Fire and Rescue Coverage Using Risk-Aware Demand Modelling and Response-Time Prediction",
            conference: "National Conference - TNFS",
            summary: " SmartFire AI Optimizer is an AI-driven system that uses GIS-based risk modelling, real-time traffic prediction and optimization algorithms to determine the most effective fire station locations. By integrating multi-source data and agentic AI coordination, it significantly improves emergency response coverage, reducing high-risk unserved areas and enabling faster, data-driven fire and rescue planning.",
            link: "https://drive.google.com/file/d/1yLgl7fpbYbpo-_Zp5oW5aazyNWnMG94s/view?usp=sharing"
        },
        {
            title: "CYBER JARVIS: An Agentic AI Framework for Autonomous Cyber Defense and Self-Healing Infrastructure ",
            conference: "Draft",
            summary: "Cyber Jarvis is an agentic AI-based cybersecurity framework that enables autonomous threat detection, decision-making and response using hybrid AI models and reinforcement learning. It introduces a self-healing, closed-loop defense system that reduces alert fatigue, improves detection accuracy and enables context-aware, adaptive cyber threat mitigation in modern security operations centers.",
            link: "https://drive.google.com/file/d/1KL_hHuUBRTzXWonErs9dXT3ascvy32GP/view?usp=sharing"
        }
    ],

    presentations: [

        {
            topic: "Student Innovation: Swadeshi Smart Automation",
            event: "SIH - 2024",
            focus: "Easy_ML is a user-friendly, resource-efficient platform designed to democratize AI by allowing non-technical users to easily upload data, auto-train models, and gain automated insights.",
            link: "#",
            image: "https://drive.google.com/uc?export=view&id=1eO1s1ikjQDoVZTJ9X7i15XEvqs4wySRc"
        },
        {
            topic: "Data Science in Industry 4.0",
            event: "KAHE - Tech-Fest",
            focus: "Data Science transforms traditional manufacturing into intelligent Industry 4.0 systems by using predictive analytics, AI, and real-time monitoring to optimize production, quality control, and supply chain operations.",
            link: "#",
            image: "https://drive.google.com/file/d/1uW9s6GeyzAMa01pJ-KW8AZ2x-2qpgG0o/view?usp=sharing"
        },
        {
            topic: "Advanced Predictive Techniques for Maintenance Optimization",
            event: "TCE Hackathon",
            focus: "This presentation outlines an AI-powered system that monitors real-time vehicle sensor data—such as sound, heat, and vibration—to predict part failures and provide optimized maintenance schedules to prevent unexpected breakdowns.",
            link: "#",
            image: "https://drive.google.com/file/d/177eeMf3BckYFxvyryn6-fZyE_ZtluYWa/view?usp=sharing"
        },
        {
            topic: "SMARTFIRE AI OPTIMIZER",
            event: "National Conference - TNFS",
            focus: "The SmartFire AI Optimizer is an AI-based system designed to optimize fire station locations in Indian cities by integrating multi-variable risk modeling, predictive analytics, and Mixed-Integer Programming (MIP) to enhance emergency coverage and reduce response times.",
            link: "https://drive.google.com/file/d/1ijhhxfFEOhYg1weJrFElgTeDbzyQODOC/view?usp=sharing",
            image: "https://drive.google.com/file/d/1ijhhxfFEOhYg1weJrFElgTeDbzyQODOC/view?usp=sharing"
        },
        {
            topic: "Health Guardian AI: Agentic Wearable Health Orchestration System",
            event: "Research Conference - ICSIEKAHE",
            focus: "This system aims to transform fragmented wearable health data into orchestrated, actionable clinical intelligence through a multi-agent framework that integrates digital twins, federated learning, and zero-trust security while ensuring clinical interoperability via FHIR standards.",
            link: "https://drive.google.com/file/d/1wmjS7dQxwDiM2-xpYmUyHDjkkO-M1KtT/view?usp=sharing",
            image: "https://drive.google.com/file/d/1wmjS7dQxwDiM2-xpYmUyHDjkkO-M1KtT/view?usp=sharing"
        }
    ]
};

export default siteData;
