import React, {useState} from 'react';
import App from "../../components/layouts/app";
import homeStyles from "../../styles/Home.module.css";
import itemStyles from "../../styles/item.module.css";
import Item from "../../components/item/item";
import Feedback from "../../components/feedback/feedback";
import lessonsStyles from "../../styles/lessons.module.css"
import {designLessons, lessons} from "../../utils/utils";

const Index = () => {

    return (
        <div>
            <App>
                <div className={homeStyles.courses}>
                    <h1>Design Studio</h1>
                </div>
                <div className={itemStyles.row}>
                    {designLessons.map((item) => (
                        <Item key={item.id} isWhite={item.isWhite} item={item}/>
                    ))}
                </div>

            </App>
        </div>
    );
};

export default Index;