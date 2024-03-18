import React, {useState} from 'react';
import App from "../../components/layouts/app";
import homeStyles from "../../styles/Home.module.css";
import itemStyles from "../../styles/item.module.css";
import Item from "../../components/item/item";
import Feedback from "../../components/feedback/feedback";
import lessonsStyles from "../../styles/lessons.module.css"

const Index = () => {
    const [lessons, setLessons] = useState([
        {id: 1, title: "Web Development", duration: "3 month", price: "40.000", Deadline: "01/03/2024", isWhite: true},
        {id: 2, title: "VUI/UX Design", duration: "3 month", price: "40.000", Deadline: "01/03/2024", isWhite: false},
        {id: 3, title: "Graphic Design", duration: "3 month", price: "40.000", Deadline: "01/03/2024", isWhite: false},
        {id: 4, title: "Python", duration: "3 month", price: "40.000", Deadline: "01/03/2024", isWhite: true},
        {id: 5, title: "Robotics", duration: "3 month", price: "40.000", Deadline: "01/03/2024", isWhite: true},
        {id: 1, title: "Web Development", duration: "3 month", price: "40.000", Deadline: "01/03/2024", isWhite: false},
        {id: 2, title: "VUI/UX Design", duration: "3 month", price: "40.000", Deadline: "01/03/2024", isWhite: false},
        {id: 3, title: "Graphic Design", duration: "3 month", price: "40.000", Deadline: "01/03/2024", isWhite: true},
        {id: 4, title: "Python", duration: "3 month", price: "40.000", Deadline: "01/03/2024", isWhite: true},
        {id: 5, title: "Robotics", duration: "3 month", price: "40.000", Deadline: "01/03/2024", isWhite: false},
    ])
    return (
        <div>
            <App>
                <div className={homeStyles.courses}>
                    <h1>Discover Courses</h1>
                </div>
                <div className={itemStyles.row}>

                    {lessons.map((item) => (
                        <Item key={item.id} isWhite={item.isWhite} item={item}/>
                    ))}
                </div>
                <div className={lessonsStyles.container}>
                    <Feedback/>
                </div>
            </App>
        </div>
    );
};

export default Index;