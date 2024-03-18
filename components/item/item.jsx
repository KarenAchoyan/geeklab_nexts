import React from 'react';
import styles from "@/styles/item.module.css";
import Link from "next/link";


const Item = ({isWhite = false, item}) => {
    return (
        <div className={`${styles.lesson} ${isWhite ? styles.lessonWhite : null}`}>

            <div className={styles.content}>
                <div className={styles.lessonTitle}>
                    <h2 className={styles.lessonName}>{item.title}</h2>
                </div>
                <div className={styles.lessonInfo}>
                    <div className={styles.lessonInfoText}>
                        <span>Duration:</span>
                        <span className={styles.lessonName}>{item.duration}</span>
                    </div>
                    <div className={styles.lessonInfoText}>
                        <span>Price:</span>
                        <span className={styles.lessonName}>{item.price}</span>
                    </div>
                    <div className={styles.lessonInfoText}>
                        <span>Deadline:</span>
                        <span className={styles.lessonName}>{item.Deadline}</span>
                    </div>

                </div>
                <div className={styles.lessonButton}>
                    <Link href={"/lessons/" + item.id}>
                        <button>APPLY NOW</button>
                    </Link>

                </div>
            </div>
        </div>

    );

};
export default Item;
