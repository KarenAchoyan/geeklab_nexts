import {useState} from "react";

export const validateEmail = (rule, value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value || emailRegex.test(value)) {
        return Promise.resolve();
    }
    return Promise.reject('Please enter a valid email address');
};

export const validatePassword = (rule, value) => {
    if (!value || value.length >= 6) {
        return Promise.resolve();
    }
    return Promise.reject('Password must be at least 6 characters long');
};

export const designLessons = [
    {id: 1, title: "AutoCad", duration: "3 month", price: "35.000 AMD", Deadline: "01/05/2024", isWhite: true},
    {id: 2, title: "Interior Design", duration: "6 month", price: "50.000 AMD", Deadline: "01/05/2024", isWhite: false},
]

export const lessons = [
    {id: 3, title: "Web Development", duration: "3 month", price: "40.000", Deadline: "01/03/2024", isWhite: true},
    {id: 4, title: "VUI/UX Design", duration: "3 month", price: "40.000", Deadline: "01/03/2024", isWhite: false},
    {id: 5, title: "Graphic Design", duration: "3 month", price: "40.000", Deadline: "01/03/2024", isWhite: false},
    {id: 6, title: "Python", duration: "3 month", price: "40.000", Deadline: "01/03/2024", isWhite: true},
    {id: 7, title: "Robotics", duration: "3 month", price: "40.000", Deadline: "01/03/2024", isWhite: true},
    {id: 8, title: "Web Development", duration: "3 month", price: "40.000", Deadline: "01/03/2024", isWhite: false},
    {id: 9, title: "VUI/UX Design", duration: "3 month", price: "40.000", Deadline: "01/03/2024", isWhite: false},
    {id: 10, title: "Graphic Design", duration: "3 month", price: "40.000", Deadline: "01/03/2024", isWhite: true},
    {id: 11, title: "Python", duration: "3 month", price: "40.000", Deadline: "01/03/2024", isWhite: true},
    {id: 12, title: "Robotics", duration: "3 month", price: "40.000", Deadline: "01/03/2024", isWhite: false},
];