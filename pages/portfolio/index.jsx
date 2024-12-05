import React, { useEffect, useState } from 'react';
import Feedback from "../../components/feedback/feedback";
import App from "../../components/layouts/app";
import styles from "../../styles/portfolio.module.css";
import Item from "../../components/portfolios/item";

const Index = () => {
    const [portfolios, setPortfolios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from API
    useEffect(() => {
        const fetchPortfolios = async () => {
            try {
                const response = await fetch('https://geeklab.dahk.am/api/websites');
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                setPortfolios(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPortfolios();
    }, []);

    // Handle loading and error states
    if (loading) {
        return (
            <App>
                <div>Loading...</div>
            </App>
        );
    }

    if (error) {
        return (
            <App>
                <div>Error: {error}</div>
            </App>
        );
    }

    // Render the portfolios
    return (
        <App>
            <div>
                <div className={styles.PageName}>
                    <h1>Portfolios</h1>
                </div>
                <div className={styles.portfolios}>
                    {portfolios.map((item) => (
                        <Item key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </App>
    );
};

export default Index;
