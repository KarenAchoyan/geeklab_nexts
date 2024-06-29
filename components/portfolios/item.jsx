import React from 'react';
import styles from "../../styles/portfolio.module.css";
import Image from "next/image";

const Item = ({item}) => {
    return (
        <div className={styles.PortfolioParents}>
            <div className={styles.portfoliosChildren}>
                <a href={item.path ? item.path : "#"}>
                    <Image width={1000} height={400} src={item.image} alt="logo"/>
                </a>
            </div>
            <h4>{item.title}</h4>
        </div>
    );
};

export default Item;