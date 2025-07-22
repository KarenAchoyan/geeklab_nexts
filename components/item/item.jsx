import React from 'react';
import styles from "@/styles/item.module.css";
import Link from "next/link";
import { useIntl } from "react-intl";
import {useRouter} from "next/router";

const Item = ({isWhite = false, item}) => {
    const router = useRouter();
    const {locale} = router;
    const intl = useIntl();
    const t = (key) => intl.formatMessage({id: key});

    return (
        <div className={`${styles.lesson} ${isWhite ? styles.lessonWhite : null}`}>

            <div className={styles.content}>
                <div className={styles.lessonTitle}>
                    <h2 className={styles.lessonName}>{item.title[locale]}</h2>
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
                    <Link
                        href={{
                            pathname: '/lessons/[name]',
                            query: { name: item.slug }, // or whatever value you want for [name]
                        }}
                        as={`/lessons/${item.slug}`}
                    >
                        <button>{t('apply_now')}</button>
                    </Link>

                </div>
            </div>
        </div>

    );
};
export default Item;
