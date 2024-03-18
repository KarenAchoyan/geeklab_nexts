import React from 'react';
import App from '../../components/layouts/app'
import Feedback from "../../components/feedback/feedback";
import styles from "../../styles/contact.module.css"
import {LinkedinOutlined} from "@ant-design/icons";

const Contact = () => {
    return (
        <App>
            <div>
                <div className={styles.location}>
                    <h1>Our Location</h1>
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
                            <span>(374) 90 00 00 00</span>
                            <span>geeklab@gmail.com</span>
                        </div>
                        <div className={styles.Contacts}>
                            <h5>Find us</h5>
                            <span><LinkedinOutlined/> LinkedIn</span>
                            <span>Facebook</span>
                            <span>Instagram</span>
                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <Feedback/>
                </div>
            </div>
        </App>
    );
};

export default Contact;