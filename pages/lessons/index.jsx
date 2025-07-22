import React, {useEffect, useState} from 'react';
import styles from "../../styles/lessons.module.css"
import App from "../../components/layouts/app";
import Item from "../../components/item/item";
import {getLessons} from "../../utils/utils";
import Head from "next/head";

const Index = () => {
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        setLessons(getLessons());
    }, []);

    return (
        <App>
            <div className={styles.row}>
                {lessons.map((item) => (
                    <Item key={item.id} item={item}/>
                ))}
            </div>
        </App>
    );
};

export default Index;