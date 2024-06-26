import React from 'react';
import App from "../../components/layouts/app";
import homeStyles from "../../styles/Home.module.css";
import itemStyles from "../../styles/item.module.css";
import {designPortfolios} from "../../utils/utils";
import Item from "../../components/portfolios/item";

const Index = () => {
    return (
        <div>
            <App>
                <div className={homeStyles.courses}>
                    <h1>Design Studio</h1>
                    <p>ՇՈՒՏՈՎ պարտաստ կլինի Ինտերիեր դիզայնի համար նախատեսված մեր կայքը որի մեջ կտեղադրվի ամբողջ մեր պորտֆոլիոն</p>
                </div>
                <div className={itemStyles.row}>
                    {designPortfolios.map((item)=>(
                        <Item key={item.id} item={item}/>
                    ))}
                </div>

            </App>
        </div>
    );
};

export default Index;