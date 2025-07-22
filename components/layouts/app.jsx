import React, {useEffect, useState} from 'react';
import styles from "../../styles/app.module.css";
import Link from "next/link";
import Image from "next/image";
import {SearchOutlined} from "@ant-design/icons";
import {useRouter} from "next/dist/client/compat/router";
import {languages, lessons} from "../../utils/utils";
import BranchSelector from "../branch/BranchSelector";
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import {useIntl} from "react-intl";


const SignUpModal = ({ visible, onClose }) => {
    const intl = useIntl();
    const t = (key) => intl.formatMessage({id: key});
    const [form, setForm] = useState({ name: '', email: '', phone: '', branch: '', course: '' });
    const { locale } = useRouter();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    if (!visible) return null;
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        try {
            const res = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setMessage(t('signup_success') || 'Sign up successful!');
                setTimeout(() => {
                    setLoading(false);
                    setMessage('');
                    onClose();
                }, 1200);
            } else {
                const data = await res.json();
                setMessage(data.error || (t('signup_error') || 'Error occurred.'));
                setLoading(false);
            }
        } catch (err) {
            setMessage(t('signup_error') || 'Error occurred.');
            setLoading(false);
        }
    };
    return (
        <div className={require('../../styles/branch.module.css').modalOverlay}>
            <div className={require('../../styles/branch.module.css').modalContent} role="dialog" aria-modal="true">
                <h2 className={require('../../styles/branch.module.css').modalTitle}>{t('sign_up') || 'Sign up'}</h2>
                <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder={t('name') || 'Name'}
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        required
                        style={{ padding: 8, borderRadius: 6, border: '1px solid #ccc' }}
                        disabled={loading}
                    />
                    <input
                        type="email"
                        placeholder={t('email') || 'Email'}
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        required
                        style={{ padding: 8, borderRadius: 6, border: '1px solid #ccc' }}
                        disabled={loading}
                    />
                    <input
                        type="tel"
                        placeholder={t('phone') || 'Phone'}
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        required
                        style={{ padding: 8, borderRadius: 6, border: '1px solid #ccc' }}
                        disabled={loading}
                    />
                    <select
                        value={form.branch || ''}
                        onChange={e => setForm(f => ({ ...f, branch: e.target.value }))}
                        required
                        style={{ padding: 8, borderRadius: 6, border: '1px solid #ccc' }}
                        disabled={loading}
                    >
                        <option value="" disabled>{t('select_branch_modal') || 'Select branch'}</option>
                        <option value="armenia_yerevan">{t('armenia_yerevan')}</option>
                        <option value="georgia_akhalkalak">{t('georgia_akhalkalak')}</option>
                    </select>
                    <select
                        value={form.course}
                        onChange={e => setForm(f => ({ ...f, course: e.target.value }))}
                        required
                        style={{ padding: 8, borderRadius: 6, border: '1px solid #ccc' }}
                        disabled={loading}
                    >
                        <option value="" disabled>{t('select_course') || 'Select course'}</option>
                        {lessons.map(lesson => (
                            <option key={lesson.id} value={lesson.slug}>{lesson.title[locale] || lesson.title.en}</option>
                        ))}
                    </select>
                    {message && <div style={{ color: message.includes('success') ? 'green' : 'red', textAlign: 'center' }}>{message}</div>}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
                        <button type="button" onClick={onClose} style={{ padding: '8px 16px', borderRadius: 6, border: 'none', background: '#ccc' }} disabled={loading}>{t('cancel') || 'Cancel'}</button>
                        <button type="submit" style={{ padding: '8px 16px', borderRadius: 6, border: 'none', background: '#22223b', color: '#fff' }} disabled={loading}>{loading ? (t('signing_up') || 'Signing up...') : (t('sign_up') || 'Sign up')}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


const App = ({children}) => {
    const intl = useIntl();
    const t = (key) => intl.formatMessage({id: key});
    const router = useRouter();
    const [currentLanguage, setCurrentLanguage] = useState('Հայ')
    const [langs, setLangs] = useState([]);
    const [showBranchSelector, setShowBranchSelector] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const { pathname, asPath, query } = router

    useEffect(() => {
        const branch = localStorage.getItem('branch');
        if (!branch) {
            setShowBranchSelector(true);
        }

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

    const handleBranchSelect = () => {
        setShowBranchSelector(false);
    };


    return (
        <>
            {showBranchSelector && <BranchSelector onSelect={handleBranchSelect} />}
            <header className={styles.header}>
                <div className={styles.rowheader}>
                    <div className={styles.logo}>
                        <Link href='/home'>
                            <Image width={200} height={50} src="/logo.PNG" alt="logo"/>
                        </Link>
                    </div>
                    {/* Hamburger icon for mobile */}
                    <button
                        className={styles.hamburger}
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-menu"
                        onClick={() => setMobileMenuOpen((open) => !open)}
                        type="button"
                    >
                        {mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                    </button>
                    <div className={styles.user}>
                        <ul>
                            <li><Link href='/home'>{t('main')}</Link></li>
                            <li><Link href='/portfolio'>{t('portfolio')}</Link></li>
                            <li><Link href='/lessons'>{t('lessons')}</Link></li>
                            <li><Link href='/contact'>{t('contact_us')}</Link></li>
                            <li><Link href='/about'>{t('about_title') || 'About'}</Link></li>
                        </ul>
                    </div>
                    <div className={styles.search}>

                        <div className={styles.language + ' ' + styles.desktopOnly}>
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
                        <div className={styles.btn + ' ' + styles.desktopOnly}>
                            <button onClick={() => setShowSignUp(true)}>{t('sign_up') || 'Sign up'}</button>
                        </div>
                    </div>
                </div>
                {/* Mobile menu overlay */}
                {mobileMenuOpen && (
                    <nav id="mobile-menu" className={styles.mobileMenu} aria-label="Mobile menu">
                        <ul>
                            <li><Link href='/home' onClick={() => setMobileMenuOpen(false)}>{t('main')}</Link></li>
                            <li><Link href='/portfolio' onClick={() => setMobileMenuOpen(false)}>{t('portfolio')}</Link></li>
                            <li><Link href='/lessons' onClick={() => setMobileMenuOpen(false)}>{t('lessons')}</Link></li>
                            <li><Link href='/contact' onClick={() => setMobileMenuOpen(false)}>{t('contact_us')}</Link></li>
                            <li><Link href='/about' onClick={() => setMobileMenuOpen(false)}>{t('about_title') || 'About'}</Link></li>
                        </ul>
                        <div className={styles.mobileMenuLang}>
                            <span className={styles.mobileMenuLangLabel}>Language:</span>
                            <ul>
                                {langs.map((item) => (
                                    <li key={item.id}>
                                        <button
                                            type="button"
                                            className={styles.mobileMenuLangBtn}
                                            onClick={() => {
                                                changeLanguage(item.value, item);
                                                setMobileMenuOpen(false);
                                            }}
                                        >
                                            {item.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.mobileMenuSignup}>
                            <button onClick={() => setShowSignUp(true)}>{t('sign_up') || 'Sign up'}</button>
                        </div>
                    </nav>
                )}
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
            {showSignUp && <SignUpModal visible={showSignUp} onClose={() => setShowSignUp(false)} />}
        </>
    );
};

export default App;


