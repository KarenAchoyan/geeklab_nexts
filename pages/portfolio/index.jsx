import React from 'react';
import Feedback from "../../components/feedback/feedback";
import App from "../../components/layouts/app";
import styles from  "../../styles/portfolio.module.css"
import Item from "../../components/portfolios/item";


const Index = () => {
    return (
        <App>
            <div>
                <div className={styles.PageName}>
                    <h1>Portfolios</h1>
                </div>
                <div className={styles.portfolios}>

                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>

                </div>

            </div>

            <div className={styles.container}>
                <Feedback/>
            </div>
        </App>
    );
};

export default Index;