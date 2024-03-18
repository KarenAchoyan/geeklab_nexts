import React from 'react';
import styles from "../../styles/app.module.css";
import Link from "next/link";
import Image from "next/image";

const App = ({children}) => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.rowheader}>
                    <div className={styles.logo}>
                        <Link href='/home'>
                            <Image width={200} height={50} src="/logo.PNG" alt="logo"/>
                        </Link>
                    </div>
                    <div className={styles.user}>
                        <ul>
                            <li><Link href='/home'>Main</Link></li>
                            <li><Link href='/contact'>Contact Us</Link></li>
                            <li><Link href='/lessons'>Lessons</Link></li>
                            <li><Link href='/portfolio'>Portfolio</Link></li>

                        </ul>
                    </div>
                    <div className={styles.search}>
                        <div className={styles.language}>
                            <select name="" id="">
                                <option value="">ENG</option>
                                <option value="">ARM</option>
                            </select>
                        </div>
                        <div className={styles.btn}>
                            <button>ENROLL NOW</button>
                        </div>
                    </div>
                </div>
            </header>
            <main className={styles.main}>
                {children}

            </main>
            <footer className={styles.footer}>
                <div className={styles.rowfooter}>
                        <div className={styles.logo}>
                            <Image width={100} height={100} src="/logo.PNG" alt="logo"/>
                        </div>
                        <div className={styles.date}>
                            <p>2019 - 2024 | Geeklab IT School</p>
                        </div>
                        <div className={styles.user1}>
                            <ul>
                                <li><Link href={"/home"}>Main</Link></li>
                                <li><Link href={"/lessons"}>Courses</Link></li>
                                <li><Link href={"/contact"}>Contact Us</Link></li>
                                <li><Link href={"/about"}>Portfolio</Link></li>
                            </ul>
                        </div>
                </div>
            </footer>
        </>
    );
};

export default App;