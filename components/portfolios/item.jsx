import React from 'react';
import styles from "../../styles/portfolio.module.css";
import Image from "next/image";

const Item = ({item}) => {
    return (
        <div className={styles.PortfolioParents}>
            <a href={item.path ? item.path : "#"}>

                <div className={styles.portfoliosChildren}>
                    <Image width={800} height={400} src={"https://geeklab.dahk.am/storage/"+item.image} alt="logo"/>
                </div>
            </a>

        </div>
    )
        ;
};

export default Item;