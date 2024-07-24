import React, {useEffect, useState} from 'react';
import styles from "../../styles/app.module.css";
import Link from "next/link";
import Image from "next/image";
import {SearchOutlined} from "@ant-design/icons";
import {useRouter} from "next/dist/client/compat/router";
import {languages, t} from "../../utils/utils";


const App = ({children}) => {
    const router = useRouter();
    const [currentLanguage, setCurrentLanguage] = useState('Հայ')
    const [langs, setLangs] = useState([]);
    const { pathname, asPath, query } = router

    useEffect(() => {
        let l = JSON.parse(localStorage.getItem('lang')) || {name: 'Հայ', flag: '/amFlag.png'}
        setCurrentLanguage(l.name)
        const language = languages.find(x=>x.name===l.name);

        const locales = language?.value || "hy";
        router.push({ pathname, query }, asPath, { locale: locales })
    }, [])

    useEffect(() => {
        setLangs(languages.filter(x => x.name !== currentLanguage))
    }, [currentLanguage])

    const changeLanguage = (newLang, item) => {
        setCurrentLanguage(item.name)
        const l = JSON.stringify({name: item.name, flag: item.flag})
        localStorage.setItem('lang', l);
    };


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
                            <li><Link href='/home'>{t('main')}</Link></li>
                            <li><Link href='/portfolio'>{t('portfolio')}</Link></li>
                            <li><Link href='/lessons'>{t('lessons')}</Link></li>
                            <li><Link href='/contact'>{t('contact_us')}</Link></li>
                        </ul>
                    </div>
                    <div className={styles.search}>

                        <div className={styles.language}>
                            <SearchOutlined className={styles.searchIcon}/>
                            <div className={styles.dropdown}>
                                <span className={styles.dropspan}>{currentLanguage}</span>
                                <div className={styles.dropdownContent}>
                                   <ul>
                                       {langs.map((item) => (
                                           <li key={item.id}>
                                               <Link href={'#'} locale={item.value} onClick={() => changeLanguage(item.value, item)}>
                                                   <div className={styles.drbLangRow}>
                                                       <span>{item.name}</span>
                                                   </div>
                                               </Link>
                                           </li>
                                       ))}
                                   </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.btn}>
                            <a href="tel:+37444777344" className="signup-button">
                                <button>Sign up</button>
                            </a>
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
                            <li><Link href={"/designstudio"}>Interior Design</Link></li>
                            <li><Link href={"/contact"}>Contact Us</Link></li>
                            <li><Link href={"/portfolio"}>Portfolio</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default App;


