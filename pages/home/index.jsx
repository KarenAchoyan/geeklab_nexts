import React, {useState} from 'react';
import App from "../../components/layouts/app";
import styles from "../../styles/app.module.css";
import itemStyles from "../../styles/item.module.css";
import homeStyles from "../../styles/Home.module.css";
import Item from "../../components/item/item";
import Feedback from "../../components/feedback/feedback";
import Link from "next/link";
import Head from "next/head";
import {TypeAnimation} from 'react-type-animation';
import {lessons} from "@/utils/utils";
import {t} from "../../utils/utils";


const Index = () => {

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
                                   "Unlock Your Potential with Geeklab",
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
                                    ' Welcome to Geeklab, the ultimate destination for aspiring innovators and lifelong learners alike.',
                                    1000,
                                    'Here, we\'re more than just a platform – we\'re a community driven by passion, curiosity, and the relentless pursuit of knowledge.',
                                ]}
                                wrapper="span"
                                speed={50}
                            />
                        </h2>
                    </div>
                    <div className={styles.discover}>
                        <Link href='/lessons'>
                            <button className={styles.btn1}>discover courses</button>
                        </Link>

                    </div>
                </div>
                <div className={homeStyles.courses}>
                    <h1>Discover Courses</h1>
                </div>
                <div className={itemStyles.row}>

                    {lessons.map((item) => (
                        <Item key={item.id} isWhite={item.isWhite} item={item}/>
                    ))}
                </div>
                <div className={itemStyles.Program}>
                    <div className={itemStyles.programHead}>
                        <h2>Study Program</h2>
                        <p>The excellence of our courses lies in the meticulously structured lesson process, blending
                            theoretical and practical sessions seamlessly. This includes thoughtfully crafted homework
                            assignments and opportunities for meaningful interactions with instructors outside the
                            classroom, ensuring a comprehensive and enriching learning experience.</p>
                    </div>
                    <div className={itemStyles.programRow}>
                        <div className={itemStyles.programItem}>
                            <h2>Lectures</h2>
                            <p>Throughout the lectures, students delve into the realm of theoretical knowledge, acquaint
                                themselves with cutting-edge technologies and innovative working methodologies, all
                                while engaging in lively discussions to deepen their understanding of the subject
                                matter.</p>
                            <span></span>
                        </div>
                        <div className={itemStyles.programItem}>
                            <h2>Seminars</h2>
                            <p>In our seminars, students embark on the exciting journey of applying the theoretical
                                knowledge acquired in their classes. With the guidance of our dedicated tutors, each
                                student receives personalized support to navigate through any challenges they encounter,
                                fostering a collaborative and empowering learning environment.</p>
                            <span></span>
                        </div>
                        <div className={itemStyles.programItem}>
                            <h2>Consulation</h2>
                            <p>Were here to offer you all-encompassing details about our courses, highlighting their
                                unique features and potential outcomes, to assist you in reaching a confident decision.
                                From admission to graduation, our dedicated course coordinators will stay connected with
                                you, providing support at every stage of your academic journey. </p>
                            <span></span>
                        </div>
                        <div className={itemStyles.programItem}>
                            <h2>Final Project</h2>
                            <p>In the final stage of our Professional courses, students collaborate in teams on
                                project-based work. This phase solidifies learning, fosters teamwork, and sparks
                                innovation, paving the way for meaningful growth and achievement.</p>
                            <span></span>
                        </div>
                        <div className={itemStyles.programItem}>
                            <h2>Certificate</h2>
                            <p>Upon successful completion of our specialized courses, students are bestowed with
                                prestigious certificates, symbolizing their dedication and mastery in their chosen
                                field.</p>
                            <span></span>
                        </div>
                        <div className={itemStyles.programItem}>
                            <h2>Career</h2>
                            <p>Our courses provide sufficient knowledge for entry-level positions. Top students in
                                Specialized courses receive job search support, though employers make the final
                                decision.</p>
                            <span></span>
                        </div>
                    </div>


                </div>
            </App>

        </>

    );


};

export default Index;