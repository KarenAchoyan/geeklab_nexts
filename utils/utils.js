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

export const designLessons = [
    {id: 1, title: "AutoCad", duration: "3 month", price: "35.000 AMD", Deadline: "15/05/2024", isWhite: true, content:"Our AutoCAD courses cover everything from the basics of navigation and drawing tools to advanced techniques for creating precise and intricate designs. You'll learn how to draft 2D plans, model in 3D, annotate drawings, and customize your workspace for maximum efficiency. With hands-on exercises and practical projects, you'll gain the confidence to tackle any design challenge."},
    {id: 2, title: "Interior Design", duration: "6 month", price: "50.000 AMD", Deadline: "15/05/2024", isWhite: false, content:"Unlock the secrets of interior design with our expert-led courses. Explore the principles of design, color theory, space planning, and furniture arrangement to create harmonious and functional interiors. From conceptualization to execution, you'll learn how to bring your design ideas to life while considering factors such as client preferences, budget constraints, and building codes."},
    {id: 3, title: "Rhinoceros", duration: "3 month", price: "100.000 AMD", Deadline: "15/05/2024", isWhite: false, content:"Rhinoceros, commonly known as Rhino, is a versatile 3D modeling tool renowned for its flexibility and precision. Whether you're sculpting organic forms, designing intricate architectural structures, or engineering complex mechanical parts, Rhino provides the tools you need to bring your ideas to life with unparalleled accuracy and efficiency.\n" +
            "\nAt GeekLab, we offer comprehensive Rhino courses designed to cater to all skill levels, from beginners to advanced users. Our lessons cover the fundamentals of navigating the Rhino interface, creating and manipulating 3D geometry, applying textures and materials, and generating detailed technical drawings and renderings."},
]

export const lessons = [
    {id: 3, title: "Front-end development", duration: "6 month", price: "40.000", Deadline: "15/05/2024", isWhite: true},
    {id: 3, title: "Python development", duration: "6 month", price: "55.000", Deadline: "15/05/2024", isWhite: false},
    {id: 4, title: "MANUAL QA", duration: "2 month", price: "55.000", Deadline: "15/05/2024", isWhite: false, content:"Manual QA is an essential part of the software testing process where testers manually execute test cases without the use of automation tools. Manual QA ensures that software applications meet specified requirements, function correctly, and are free of defects before they are released to end-users.At GeekLab, we offer comprehensive Manual QA training programs designed to equip you with the knowledge and skills needed to excel in this critical role. Our courses cover a wide range of topics, including test planning, test case design, test execution, defect reporting, and regression testing."},
    {id: 6, title: "Python", duration: "3 month", price: "50.000", Deadline: "01/03/2024", isWhite: true},
];

export function t(key) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const intl = useIntl();

    const title = intl.formatMessage({id: key})
    return title;
}
