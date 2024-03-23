import React, {useEffect, useState} from 'react';
import App from "../../components/layouts/app";
import styles from "../../styles/lessons.module.css"
import Image from "next/image";
import {useRouter} from "next/router";
import {designLessons, lessons} from "@/utils/utils";
import Head from "next/head";


const Name = () => {
    const router = useRouter();
    const {name} = router.query;
    const [content, setContent] = useState({});
    useEffect(() => {
        console.log(designLessons.find(x => x.title === name))
        const data = designLessons.find(x => x.title === name);
        const cont = data === undefined ? lessons.find(x => x.title === name) : data;
        setContent(cont)
    }, [router.query]);

    return (
        <>
            <Head>
                <title>{content?.title} - GeekLab</title>
                <meta name="keywords"
                      content={`${content?.title}, AutoCAD`}/>
                <meta name="robots" content="index, follow"/>
                <meta name="author" content="Your Name or GeekLab Team"/>
                <link rel="canonical" href={`https://www.yourwebsite.com/lessons/${content?.slug}`}/>
                {/* Open Graph meta tags for better social sharing */}
                <meta property="og:title" content={`${content?.title} - GeekLab`}/>
                <meta property="og:type" content="article"/>
            </Head>
            <App>
                <div className={styles.main}>
                    <div className={styles.ParentCourse}>
                        <div className={styles.courses}>
                            <div className={styles.courseName}>
                                <h4>Welcome to <span>{content?.title}!</span></h4>
                                <p>Unlock the secrets of great design with our UI/UX course.
                                    Dive into the world of User Interface
                                    (UI) and User Experience (UX) design,
                                    where creativity meets functionality.
                                    From wireframing to prototyping,
                                    our specialized
                                    curriculum empowers you to
                                    create compelling digital
                                    experiences.</p>
                            </div>
                            <div className={styles.signUp}>
                                <div className={styles.join}><p>Join us and elevate your design prowess today!</p></div>
                                <div className={styles.btnSignUp}>
                                    <a href="tel:+37444777344" className="signup-button">
                                        <button>Sign up</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.courseInfo}>
                            <div className={styles.informationParent}>
                                <div className={styles.information}>
                                    <Image width={100} height={100} src="/Frame1.png" alt=""/>
                                    <p>Duration</p>
                                    <p>{content.duration}</p>
                                </div>
                                <div className={styles.information}>
                                    <Image width={100} height={100} src="/Frame2.png" alt=""/>
                                    <p>Monthly fee</p>
                                    <p>{content.price}</p>
                                </div>
                            </div>
                            <div className={styles.informationParent}>
                                <div className={styles.information}>
                                    <Image width={100} height={100} src="/Frame3.png" alt=""/>
                                    <p>Deadline</p>
                                    <p>{content.Deadline}</p>
                                </div>
                                <div className={styles.information}>
                                    <Image width={100} height={100} src="/Frame4.png" alt=""/>
                                    <p>Frequency</p>
                                    <p>2 days a week for
                                        2 hours</p>
                                </div>
                            </div>
                        </div>
                        {/*<div className={styles.Statistics}>*/}
                            {/*<div className={styles.staticChildren}>*/}
                            {/*    <span>Statistics</span>*/}
                            {/*</div>*/}
                            {/*<div className={styles.ParentStaticChildren}>*/}
                                {/*<div className={styles.staticChildren}>*/}
                                {/*    <span>600,000</span>*/}
                                {/*    <p>Avarage salary</p>*/}
                                {/*</div>*/}
                                {/*<div className={styles.staticChildren}>*/}
                                {/*    <span>15+</span>*/}
                                {/*    <p>Vacancies</p>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    </div>
                </div>

            </App>
        </>
    );
};

export default Name;