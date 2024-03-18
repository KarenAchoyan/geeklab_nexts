import React from 'react';
import Image from "next/image";
import styles from "../../styles/feedback.module.css"

const Feedback = () => {
    return (
        <div>
            <div className={styles.GetCustomAdvice}>
                <div className={styles.GetCustomAdviceText}>
                    <h2>Get Custom Advice</h2>
                    <p>Please fill out this short form, and our Support team will contact you to help you find
                        out which course fits you best.</p>
                </div>
                <div className={styles.section}>
                    <form action="">
                        <div className={styles.formGroup}>
                            <div className={styles.row}>
                                <div>
                                    <input type="text" placeholder={"Name Surname"}/>
                                </div>
                                <div>
                                    <input type="text" placeholder={"Email"}/>
                                </div>
                            </div>
                            <div className={styles.row}>
                                <Image width={10} height={10} src="/flag.png" alt=""/>
                                <input className={styles.inputNumber} type="text"
                                       placeholder={"Phone Number (+374)"}/>
                            </div>
                            <div className={styles.EnrollButton}>
                                <button>ENROLL</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>

        </div>

    );
};

export default Feedback;