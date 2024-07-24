// components/StoriesSlider.js

import React from 'react';
import {Card, Image} from 'antd';
import Slider from 'react-slick';
import { PlusOutlined } from '@ant-design/icons';

import 'slick-carousel/slick/slick.css';  // Slick carousel styles
import 'slick-carousel/slick/slick-theme.css';  // Slick carousel theme
const stories = [
    {
        name: 'Create story',
        image: '/ellara.png',
        isCreate: true,
    },
    {
        name: 'Silva Hakobyan',
        image: '/eua.png',
    },
    {
        name: 'Silva Hakobyan',
        image: '/ellara.png',
    },
    {
        name: 'Silva Hakobyan',
        image: '/eua.png',
    },
    {
        name: 'Silva Hakobyan',
        image: '/eua.png',
    },
    {
        name: 'JNEWS.ge',
        image: '/ellara.png',
    },
    {
        name: "L'Arôme.am",
        image: '/ellara.png',
    },
    {
        name: 'Silva Hakobyan',
        image: '/eua.png',
    },
    {
        name: 'REAL STORE',
        image: '/ellara.png',
    },
];

const StoriesSlider = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <Slider {...settings}>
            {stories.map((story, index) => (
                <div key={index} style={{ width:"90%"}}>
                    <Card
                        hoverable
                        style={{ width: '100%', height: 220, borderRadius: 10}}
                        cover={
                            <div style={{width:'100%', position: 'relative', height: '220px' }}>
                                <img
                                    alt={story.name}
                                    src={story.image}
                                    style={{
                                        width:'100%',
                                        height:'100%',
                                        objectFit: 'cover',
                                        borderRadius: 10,
                                    }}
                                />
                            </div>
                        }
                    >
                    </Card>
                </div>
            ))}
        </Slider>
    );
};

export default StoriesSlider;
