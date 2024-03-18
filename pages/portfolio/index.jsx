import React from 'react';
import Feedback from "@/components/feedback/feedback";
import App from "@/components/layouts/app";
import styles from  "@/styles/portfolio.module.css"
import Image from "next/image";


const Index = () => {
    return (
        <App>
            <div>
                <div className={styles.PageName}>
                    <h1>Portfolios</h1>
                </div>
                <div className={styles.portfolios}>

                    <div className={styles.PortfolioParents}>
                        <div className={styles.portfoliosChildren}>
                            <Image width={100} height={100} src="/logo.PNG" alt="logo"/>
                        </div>
                        <h4>Web Site</h4>
                    </div>
                    <div className={styles.PortfolioParents}>
                        <div className={styles.portfoliosChildren}>
                            <Image width={100} height={100} src="/logo.PNG" alt="logo"/>

                        </div>
                        <h4>Web Site</h4>
                    </div>
                    <div className={styles.PortfolioParents}>
                        <div className={styles.portfoliosChildren}>
                            <Image width={100} height={100} src="/logo.PNG" alt="logo"/>

                        </div>
                        <h4>Web Site</h4>
                    </div>
                    <div className={styles.PortfolioParents}>
                        <div className={styles.portfoliosChildren}>
                            <Image width={100} height={100} src="/logo.PNG" alt="logo"/>

                        </div>
                        <h4>Web Site</h4>
                    </div>
                    <div className={styles.PortfolioParents}>
                        <div className={styles.portfoliosChildren}>
                            <Image width={100} height={100} src="/logo.PNG" alt="logo"/>

                        </div>
                        <h4>Web Site</h4>
                    </div>
                    <div className={styles.PortfolioParents}>
                        <div className={styles.portfoliosChildren}>
                            <Image width={100} height={100} src="/logo.PNG" alt="logo"/>

                        </div>
                        <h4>Web Site</h4>
                    </div>
                    <div className={styles.PortfolioParents}>
                        <div className={styles.portfoliosChildren}>
                            <Image width={100} height={100} src="/logo.PNG" alt="logo"/>

                        </div>
                        <h4>Web Site</h4>
                    </div>
                    <div className={styles.PortfolioParents}>
                        <div className={styles.portfoliosChildren}>
                            <Image width={100} height={100} src="/logo.PNG" alt="logo"/>

                        </div>
                        <h4>Web Site</h4>
                    </div>
                    <div className={styles.PortfolioParents}>
                        <div className={styles.portfoliosChildren}>
                            <Image width={100} height={100} src="/logo.PNG" alt="logo"/>

                        </div>
                        <h4>Web Site</h4>
                    </div>
                    <div className={styles.PortfolioParents}>
                        <div className={styles.portfoliosChildren}>
                            <Image width={100} height={100} src="/logo.PNG" alt="logo"/>

                        </div>
                        <h4>Web Site</h4>
                    </div>
                    <div className={styles.PortfolioParents}>
                        <div className={styles.portfoliosChildren}>
                            <Image width={100} height={100} src="/logo.PNG" alt="logo"/>

                        </div>
                        <h4>Web Site</h4>
                    </div>
                    <div className={styles.PortfolioParents}>
                        <div className={styles.portfoliosChildren}>
                            <Image width={100} height={100} src="/logo.PNG" alt="logo"/>

                        </div>
                        <h4>Web Site</h4>
                    </div>


                </div>

            </div>

            <div className={styles.container}>
                <Feedback/>
            </div>
        </App>
    );
};

export default Index;