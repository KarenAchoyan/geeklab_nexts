import React, { useState, useEffect } from 'react';
import App from "../../components/layouts/app";
import homeStyles from "../../styles/Home.module.css";
import itemStyles from "../../styles/item.module.css";
import Item from "../../components/portfolios/item";

const Index = () => {
    const [designPortfolios, setDesignPortfolios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from API
    useEffect(() => {
        const fetchDesignPortfolios = async () => {
            try {
                const response = await fetch('https://geeklab.dahk.am/api/designs');
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                setDesignPortfolios(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDesignPortfolios();
    }, []);

    // Handle loading and error states
    if (loading) {
        return (
            <App>
                <div className={homeStyles.courses}>
                    <h1>Loading...</h1>
                </div>
            </App>
        );
    }

    if (error) {
        return (
            <App>
                <div className={homeStyles.courses}>
                    <h1>Error</h1>
                    <p>{error}</p>
                </div>
            </App>
        );
    }

    // Render the component
    return (
        <div>
            <App>
                <div className={homeStyles.courses}>
                    <h1>Design Studio</h1>
                </div>
                <div className={itemStyles.row}>
                    {designPortfolios.map((item) => (
                        <Item key={item.id} item={item} />
                    ))}
                </div>
            </App>
        </div>
    );
};

export default Index;
