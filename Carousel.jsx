import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        { src: 'pexels-alisa-velieva-17067264.jpg', alt: 'Web Design', name: 'Web Design' },
        { src: 'pexels-alpography-16256556.jpg', alt: 'Books', name: 'Books'},
        { src: 'pexels-anderson-guerra-1154198.jpg', alt: 'Graphic Design', name: 'Graphic Design' }
    ];

    const moveLeft = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const moveRight = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel-container">
            <div className="carousel">
                {images.map((image, index) => {
                    const offset = (index - currentIndex + images.length) % images.length;
                    return (
                        <div 
                            key={index} 
                            className={`carousel-item offset-${offset}`} 
                            style={{ backgroundImage: `url(${image.src})` }}
                        >
                            <div className="carousel-item-content">
                                <h2>{image.name}</h2>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="buttons">
                <button onClick={moveLeft}>Left</button>
                <button onClick={moveRight}>Right</button>
            </div>
        </div>
    );
};

export default Carousel;

