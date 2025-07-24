import React, { useEffect, useState } from 'react';
import App from "../../components/layouts/app";
import styles from "../../styles/lessons.module.css";
import { useRouter } from "next/router";
import { getLessons } from "@/utils/utils";
import Head from "next/head";
import { Button, Modal, Form, Input, DatePicker, message, Collapse } from 'antd';
import { CheckOutlined, PlusOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const Name = () => {
    const router = useRouter();
    const { name } = router.query;
    const { locale } = useRouter();
    const [content, setContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => {
        if (name) {
            const lessons = getLessons();
            const data = lessons.find(x => x.slug === name);
            setContent(data);
        }
    }, [name]);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields();
    };

    const handleOk = () => {
        form.validateFields()
            .then(values => {
                message.success('Հայտը հաջողությամբ ուղարկվեց!');
                setIsModalOpen(false);
                form.resetFields();
            })
            .catch(() => {});
    };

    const getLocalizedText = (field) => {
        return locale === 'hy'
            ? field?.hy
            : locale === 'ge'
                ? field?.ge
                : field?.en;
    };

    if (!content) return null;

    return (
        <App>
            <Head>
                <title>{getLocalizedText(content?.title)}</title>
                <meta name="description" content={getLocalizedText(content?.content)} />
                <meta name="keywords" content="GeekLab, programming, development, design, marketing, lessons, courses, learning" />
                <meta property="og:title" content={getLocalizedText(content?.title)} />
                <meta property="og:description" content={getLocalizedText(content?.content)} />
                <link rel="canonical" href={`https://www.yourwebsite.com/lessons/${content?.slug}`} />
            </Head>

            {/* Hero Section */}
            <div className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>{getLocalizedText(content?.title) || 'Web Development'}<br />Level Up</h1>
                    <div className={styles.heroSubtitle}>
                        <span className={styles.gearIcon}>⚙️</span>
                        Ծրագիրը կազմված է Picsart-ի կողմից
                    </div>
                    <div className={styles.heroText}>
                        {getLocalizedText(content?.content)}
                    </div>
                    {content?.program && (
                        <ul className={styles.featureList}>
                            {content.program.map((mod, idx) => (
                                <li key={idx}><b>{getLocalizedText(mod)}</b><CheckOutlined className={styles.checkIconRight} /></li>
                            ))}
                        </ul>
                    )}
                    <Button
                        type="primary"
                        className={styles.ctaButton}
                        onClick={showModal}
                    >
                        ԴԱՍԸՆԹԱՑԻ ՀԱՄԱՐ
                    </Button>
                </div>
                <div className={styles.heroImageWrap}>
                    {/* Placeholder for JS/React image */}
                    <img src="/public/Frame1.png" alt="JS" className={styles.heroImage} />
                </div>
            </div>

            {/* Accordion Section */}
            <div className={styles.accordionSection}>
                <h2 className={styles.sectionTitle}>
                    Դասընթացի հիմնական փուլերը
                </h2>
                <div className={styles.accordionWrap}>
                    <Collapse accordion bordered={false} className={styles.collapse}
                        expandIcon={({ isActive }) => <span><PlusOutlined rotate={isActive ? 45 : 0} className={styles.plusIcon} /></span>}>
                        {content?.program && content.program.map((mod, idx) => (
                            <Panel
                                header={<div className={styles.panelHeader}><span className={styles.panelHeaderHy}>{mod.hy}</span><span className={styles.panelHeaderEn}>{mod.en}</span></div>}
                                key={idx}
                                className={styles.panel}
                            >
                                <div className={styles.panelContent}>Բովանդակություն շուտով...</div>
                            </Panel>
                        ))}
                    </Collapse>
                </div>
            </div>

            {/* Pricing Section */}
            <div className={styles.pricingSection}>
                <div className={styles.pricingCard}>
                    <div className={styles.pricingTitle}>8 ամիս՝<br />89,000 դրամ ամսական</div>
                    <div className={styles.pricingSub}>Կամ ~36,000 դրամ ամսական (24 ամիս ապառիկ տարբերակով)</div>
                    <div className={styles.pricingText}>Դասընթացի տևողությունը 3-4 օր՝ շաբաթական 2 ժամ</div>
                    <div className={styles.pricingText}>Դասընթացի ավարտին ուսանողները կստանան երկլեզու հավաստագիր։</div>
                    <Button
                        type="primary"
                        className={styles.ctaButton}
                        onClick={showModal}
                    >
                        Դիմել հիմա
                    </Button>
                </div>
            </div>

            {/* FAQ Section */}
            <div className={styles.faqSection}>
                <h2 className={styles.sectionTitle}>
                    Հաճախ տրվող հարցեր
                </h2>
                <div className={styles.accordionWrap}>
                    <Collapse accordion bordered={false} className={styles.collapse}
                        expandIcon={({ isActive }) => <PlusOutlined rotate={isActive ? 45 : 0} className={styles.plusIcon} />}> 
                        {content?.faq && content.faq.map((faq, idx) => (
                            <Panel
                                header={<span className={styles.faqHeader}>{faq.q}</span>}
                                key={idx}
                                className={styles.panel}
                            >
                                <div className={styles.panelContent}>{faq.a}</div>
                            </Panel>
                        ))}
                    </Collapse>
                </div>
            </div>

            {/* Description Section */}
            <div className={styles.descSection}>
                <div className={styles.descCard}>
                    {getLocalizedText(content?.content)}
                </div>
            </div>

            {/* Application Modal */}
            <Modal
                title="Դիմել այս դասընթացին"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Ուղարկել"
                cancelText="Փակել"
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="applyForm"
                >
                    <Form.Item
                        name="name"
                        label="Անուն Ազգանուն"
                        rules={[{ required: true, message: 'Խնդրում ենք լրացնել անուն ազգանունը' }]}
                    >
                        <Input placeholder="Անուն Ազգանուն" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Էլ. հասցե"
                        rules={[{ required: true, type: 'email', message: 'Խնդրում ենք լրացնել վավեր էլ. հասցե' }]}
                    >
                        <Input placeholder="mail@example.com" />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Հեռախոսահամար"
                        rules={[{ required: true, message: 'Խնդրում ենք լրացնել հեռախոսահամարը' }]}
                    >
                        <Input placeholder="+374..." />
                    </Form.Item>
                    <Form.Item
                        name="birthday"
                        label="Ծննդյան օր"
                        rules={[{ required: true, message: 'Խնդրում ենք նշել ծննդյան օրը' }]}
                    >
                        <DatePicker
                            picker="date"
                            style={{ width: '100%' }}
                            placeholder="YYYY-MM-DD"
                            format="YYYY-MM-DD"
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </App>
    );
};

export default Name;
