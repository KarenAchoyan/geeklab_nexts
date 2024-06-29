import React from 'react';
import styles from "@/styles/item.module.css";
import Link from "next/link";
import {t} from "../../utils/utils";


const Item = ({isWhite = false, item}) => {
    return (
        <div className={`${styles.lesson} ${isWhite ? styles.lessonWhite : null}`}>

            <div className={styles.content}>
                <div className={styles.lessonTitle}>
                    <h2 className={styles.lessonName}>{item.title}</h2>
                </div>
                <div className={styles.lessonInfo}>
                    <div className={styles.lessonInfoText}>
                        <span>{t('duration')}:</span>
                        <span className={styles.lessonName}>{item.duration}{t('month')}</span>
                    </div>
                    <div className={styles.lessonInfoText}>
                        <span>{t('price')}:</span>
                        <span className={styles.lessonName}>{item.price} {t('amd')}</span>
                    </div>
                    <div className={styles.lessonInfoText}>
                        <span>{t('deadline')}:</span>
                        <span className={styles.lessonName}>{item.Deadline}</span>
                    </div>

                </div>
                <div className={styles.lessonButton}>
                    <Link href={"/lessons/" + item.title}>
                        <button>{t('apply_now')}</button>
                    </Link>

                </div>
            </div>
        </div>

    );

};
export default Item;
