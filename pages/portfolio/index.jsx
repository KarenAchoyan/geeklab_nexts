import React from 'react';
import Feedback from "../../components/feedback/feedback";
import App from "../../components/layouts/app";
import styles from  "../../styles/portfolio.module.css"
import Item from "../../components/portfolios/item";
import {portfolios} from "../../utils/utils";


const Index = () => {
    return (
        <App>
            <div>
                <div className={styles.PageName}>
                    <h1>Portfolios</h1>
                </div>
                <div className={styles.portfolios}>
                    {portfolios.map((item)=>(
                        <Item key={item.id} item={item}/>
                    ))}
                </div>

            </div>

        </App>
    );
};

export default Index;