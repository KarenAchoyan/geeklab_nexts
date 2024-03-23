import React, {useState} from 'react';
import App from "../../components/layouts/app";
import homeStyles from "../../styles/Home.module.css";
import itemStyles from "../../styles/item.module.css";
import Item from "../../components/item/item";
import {lessons} from "../../utils/utils";

const Index = () => {

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
            </App>
        </div>
    );
};

export default Index;