import {useState} from "react";
import {useIntl} from "react-intl";

export const validateEmail = (rule, value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value || emailRegex.test(value)) {
        return Promise.resolve();
    }
    return Promise.reject('Please enter a valid email address');
};

export const languages = [
    {id: 1, name: "EN", fullName: "English", value: 'en', flag: "/english.webp"},
    {id: 3, name: "Հայ", fullName: "Հայերեն", value: 'hy', flag: "/amFlag.png"},
];

export const validatePassword = (rule, value) => {
    if (!value || value.length >= 6) {
        return Promise.resolve();
    }
    return Promise.reject('Password must be at least 6 characters long');
};

export const designLessons = []

export const lessons = [
    {
        id: 4,
        title: "Front-end development",
        duration: "6 ",
        price: "40.000",
        Deadline: "15/07/2024",
        isWhite: true,
        content: "Welcome to GeekLab, where we're dedicated to cultivating the next generation of front-end developers. Our Front-end Development Bootcamp is designed to equip you with the skills and knowledge needed to thrive in the dynamic world of web development. Whether you're a beginner or an experienced coder, this course will empower you to create stunning, interactive web experiences using the latest technologies.Front-end development is the art of bringing web designs to life, creating engaging user interfaces, and crafting seamless user experiences. In this comprehensive bootcamp, you'll dive deep into the core technologies of modern web development, including HTML, CSS, JavaScript, React, and Next.js. From building static web pages to developing dynamic web applications, you'll learn everything you need to succeed as a front-end developer."
    },
    {
        id: 5,
        title: "Python development",
        duration: "6 ",
        price: "55.000",
        Deadline: "15/07/2024",
        isWhite: false,
        content: "Welcome to GeekLab, your ultimate destination for cutting-edge tech education. At GeekLab, we believe in empowering individuals with the skills they need to thrive in today's digital landscape. Our Python Development Mastery course is designed to equip you with the knowledge and expertise to become a proficient Python developer. Python has emerged as one of the most popular programming languages due to its versatility, simplicity, and robust community support. Whether you're a beginner looking to dive into the world of programming or an experienced developer seeking to expand your skill set, this course is tailored to meet your needs."
    },
    {
        id: 6,
        title: "MANUAL QA",
        duration: "2 ",
        price: "55.000",
        Deadline: "15/07/2024",
        isWhite: false,
        content: "Manual QA is an essential part of the software testing process where testers manually execute test cases without the use of automation tools. Manual QA ensures that software applications meet specified requirements, function correctly, and are free of defects before they are released to end-users.At GeekLab, we offer comprehensive Manual QA training programs designed to equip you with the knowledge and skills needed to excel in this critical role. Our courses cover a wide range of topics, including test planning, test case design, test execution, defect reporting, and regression testing."
    },
    {
        id: 1,
        title: "AutoCad",
        duration: "3 ",
        price: "35.000 ",
        Deadline: "15/07/2024",
        isWhite: true,
        content: "Our AutoCAD courses cover everything from the basics of navigation and drawing tools to advanced techniques for creating precise and intricate designs. You'll learn how to draft 2D plans, model in 3D, annotate drawings, and customize your workspace for maximum efficiency. With hands-on exercises and practical projects, you'll gain the confidence to tackle any design challenge."
    },
    {
        id: 2,
        title: "Interior Design",
        duration: "6 ",
        price: "50.000 ",
        Deadline: "15/07/2024",
        isWhite: false,
        content: "Unlock the secrets of interior design with our expert-led courses. Explore the principles of design, color theory, space planning, and furniture arrangement to create harmonious and functional interiors. From conceptualization to execution, you'll learn how to bring your design ideas to life while considering factors such as client preferences, budget constraints, and building codes."
    },
    {
        id: 3,
        title: "Rhinoceros",
        duration: "3 ",
        price: "100.000 ",
        Deadline: "15/07/2024",
        isWhite: false,
        content: "Rhinoceros, commonly known as Rhino, is a versatile 3D modeling tool renowned for its flexibility and precision. Whether you're sculpting organic forms, designing intricate architectural structures, or engineering complex mechanical parts, Rhino provides the tools you need to bring your ideas to life with unparalleled accuracy and efficiency.\n" +
            "\nAt GeekLab, we offer comprehensive Rhino courses designed to cater to all skill levels, from beginners to advanced users. Our lessons cover the fundamentals of navigating the Rhino interface, creating and manipulating 3D geometry, applying textures and materials, and generating detailed technical drawings and renderings."
    },

];

export function t(key) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const intl = useIntl();

    const title = intl.formatMessage({id: key})
    return title;
}


export const portfolios = [
    {id: 1, image: "/eua.png", title: "European University of Armenia", path:"https://eua.am/"},
    {id: 2, image: "/poel.png", title: "Peol", path: "https://www.poel.am/home"},
    {id: 3, image: "/ellara.png", title: "Ellara Accounting"},
    {id: 4, image: "/trichq.png", title: "Թռիչք արշավական ակումբ"},
    {id: 5, image: "/infinite.png", title: "Infinite"},
    {id: 6, image: "/5.png", title: "ԴԱՀԿ"},
]

export const designPortfolios = [
    {id: 1, image: "https://ellara.geeklab.am/storage/geeklab/bath%201.jpg"},
    {id: 2, image: "https://ellara.geeklab.am/storage/geeklab/cam001.jpg"},
    {id: 3, image: "https://ellara.geeklab.am/storage/geeklab/Cam%20004.jpg"},
    {id: 4, image: "https://ellara.geeklab.am/storage/geeklab/cam%20006.jpg"},
    {id: 5, image: "https://ellara.geeklab.am/storage/geeklab/master-5.jpg"},
    {id: 6, image: "https://ellara.geeklab.am/storage/geeklab/kid%20cam%201.jpg"},
]