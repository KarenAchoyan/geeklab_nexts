import React from 'react';
import styles from "../../styles/portfolio.module.css";
import Image from "next/image";

const Item = () => {
    return (
        <div className={styles.PortfolioParents}>
            <div className={styles.portfoliosChildren}>
                <Image width={1000} height={400} src="/portfolio1.png" alt="logo"/>
            </div>
            <h4>European university of Armenia </h4>
        </div>
    );
};

export default Item;