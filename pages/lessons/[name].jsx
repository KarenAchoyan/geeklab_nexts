import React from 'react';
import Feedback from "../../components/feedback/feedback";
import App from "../../components/layouts/app";
import styles from  "../../styles/lessons.module.css"
import Image from "next/image";



const Name = () => {
    return (
        <App>
            <div className={styles.main}>
                <div className={styles.ParentCourse}>
                    <div className={styles.courses}>
                        <div className={styles.courseName}>
                            <h4>Welcome to <span>UI/UX Design!</span></h4>
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
                                <button>Sign up</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.courseInfo}>
                        <div className={styles.informationParent}>
                            <div className={styles.information}>
                                <Image width={100} height={100} src="/Frame1.png" alt=""/>
                                <p>Duration</p>
                                <p>3 months</p>
                            </div>
                            <div className={styles.information}>
                                <Image width={100} height={100} src="/Frame2.png" alt=""/>
                                <p>Monthly fee</p>
                                <p>40,000 AMD</p>
                            </div>
                        </div>
                        <div className={styles.informationParent}>
                            <div className={styles.information}>
                                <Image width={100} height={100} src="/Frame3.png" alt=""/>
                                <p>Deadline</p>
                                <p>05/05/2024</p>
                            </div>
                            <div className={styles.information}>
                                <Image width={100} height={100} src="/Frame4.png" alt=""/>
                                <p>Frequency</p>
                                <p>2 days a week for
                                    1,5 hours</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Statistics}>
                        <div className={styles.staticChildren}>
                            <span>Statistics</span>
                        </div>
                        <div className={styles.ParentStaticChildren}>
                            <div className={styles.staticChildren}>
                                <span>600,000</span>
                                <p>Avarage salary</p>
                            </div>
                            <div className={styles.staticChildren}>
                                <span>15+</span>
                                <p>Vacancies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <Feedback/>
            </div>
        </App>
    );
};

export default Name;