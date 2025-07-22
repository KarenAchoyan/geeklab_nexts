import React, {useEffect, useState} from 'react';
import App from "../../components/layouts/app";
import styles from "../../styles/app.module.css";
import itemStyles from "../../styles/item.module.css";
import homeStyles from "../../styles/Home.module.css";
import Item from "../../components/item/item";
import Link from "next/link";
import Head from "next/head";
import {TypeAnimation} from 'react-type-animation';
import {getLessons} from "@/utils/utils";
import { useIntl } from "react-intl";

const Index = () => {
    const [lessons, setLessons] = useState([]);
    const intl = useIntl();
    const t = (key) => intl.formatMessage({id: key});

    useEffect(() => {
        setLessons(getLessons());
    }, []);

    return (
        <>
            <Head>
                <title>GeekLab - Learn Programming, Interior Design, and AutoCAD</title>
                <meta name="description"
                      content="GeekLab offers high-quality programming languages lessons, interior design education lessons, and AutoCAD tutorials. Start learning today!"/>
                <meta name="keywords"
                      content="GeekLab, programming languages, interior design, AutoCAD, tutorials, lessons, learn programming, learn interior design, learn AutoCAD"/>
                <meta name="robots" content="index, follow"/>
                <meta name="author" content="Your Name or GeekLab Team"/>
                <link rel="canonical" href="https://www.geeklab.am/"/>
                <meta property="og:title" content="GeekLab - Learn Programming, Interior Design, and AutoCAD"/>
                <meta property="og:description"
                      content="GeekLab offers high-quality programming languages lessons, interior design education lessons, and AutoCAD tutorials. Start learning today!"/>
                <meta property="og:image" content="https://www.geeklab.am/logo.PNG"/>
                <meta property="og:url" content="https://www.geeklab.am/"/>
                <meta property="og:type" content="website"/>
            </Head>
            <App>
                <div className={homeStyles.banner}>
                    <div className={homeStyles.bannerContent}>
                        <h1>
                            <TypeAnimation
                                sequence={[
                                   t('banner_title'),
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h1>
                        <h2>
                            <TypeAnimation
                                sequence={[
                                    t('banner_subtitle1'),
                                    1000,
                                    t('banner_subtitle2'),
                                ]}
                                wrapper="span"
                                speed={50}
                            />
                        </h2>
                    </div>
                    <div className={styles.discover}>
                        <Link href='/lessons'>
                            <button className={styles.btn1}>{t('discover_courses')}</button>
                        </Link>

                    </div>
                </div>
                <div className={homeStyles.courses}>
                    <h1>{t('our_lessons')}</h1>
                </div>
                <div className={itemStyles.row}>

                    {lessons.map((item) => (
                        <Item key={item.id} item={item}/>
                    ))}
                </div>
                <div className={itemStyles.Program}>
                    <div className={itemStyles.programHead}>
                        <h2>{t('study_program')}</h2>
                        <p>{t('study_program_desc')}</p>
                    </div>
                    <div className={itemStyles.programRow}>
                        <div className={itemStyles.programItem}>
                            <h2>{t('lectures')}</h2>
                            <p>{t('lectures_desc')}</p>
                            <span></span>
                        </div>
                        <div className={itemStyles.programItem}>
                            <h2>{t('seminars')}</h2>
                            <p>{t('seminars_desc')}</p>
                            <span></span>
                        </div>
                        <div className={itemStyles.programItem}>
                            <h2>{t('consultation')}</h2>
                            <p>{t('consultation_desc')}</p>
                            <span></span>
                        </div>
                        <div className={itemStyles.programItem}>
                            <h2>{t('final_project')}</h2>
                            <p>{t('final_project_desc')}</p>
                            <span></span>
                        </div>
                        <div className={itemStyles.programItem}>
                            <h2>{t('certificate')}</h2>
                            <p>{t('certificate_desc')}</p>
                            <span></span>
                        </div>
                        <div className={itemStyles.programItem}>
                            <h2>{t('career')}</h2>
                            <p>{t('career_desc')}</p>
                            <span></span>
                        </div>
                    </div>


                </div>
            </App>

        </>

    );


};

export default Index;