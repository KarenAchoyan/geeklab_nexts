import React from 'react';
import App from '../../components/layouts/app'
import styles from "../../styles/contact.module.css"
import {FacebookOutlined, InstagramOutlined, LinkedinOutlined} from "@ant-design/icons";
import Head from "next/head";

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact Us - GeekLab</title>
                <meta name="description"
                      content="Get in touch with GeekLab for any inquiries, feedback, or collaborations. Contact us now!"/>
                <meta name="keywords"
                      content="GeekLab, contact, contact us, get in touch, inquiries, feedback, collaborations"/>
                <meta name="robots" content="index, follow"/>
                <meta name="author" content="Your Name or GeekLab Team"/>
                <link rel="canonical" href="https://www.yourwebsite.com/contact"/>
                <meta property="og:title" content="Contact Us - GeekLab"/>
                <meta property="og:description"
                      content="Get in touch with GeekLab for any inquiries, feedback, or collaborations. Contact us now!"/>
                <meta property="og:url" content="https://www.geeklab.am/contact"/>
                <meta property="og:type" content="website"/>
            </Head>
            <App>
                <div>
                    <div className={styles.location}>
                        <h1>Contact US</h1>
                    </div>
                    <div className={styles.parentMap}>
                        <div className={styles.map}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d97545.62156934674!2d44.5120512!3d40.18012159999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shy!2sam!4v1710150139246!5m2!1shy!2sam"
                            />
                        </div>
                        <div className={styles.information}>
                            <div className={styles.Contacts}>
                                <h5>Contacts</h5>
                                <span>3 Hakob Hakobyan St, Yerevan 0033</span>
                                <span>(374) 44 777 344</span>
                                <span>info@geeklab.am</span>
                            </div>
                            <div className={styles.Contacts}>
                                <h5>Find us</h5>
                                <span><a href="https://www.linkedin.com/in/karen-achoyan-2481011a2/"><LinkedinOutlined/> LinkedIn</a></span>
                                <span><a href="https://www.facebook.com/geeklabSchool"><FacebookOutlined/>Facebook</a></span>
                                <span><a href="https://www.instagram.com/geeklab.am/"><InstagramOutlined/>Instagram</a></span>
                            </div>
                        </div>
                    </div>

                </div>
            </App>
        </>
    );
};

export default Contact;