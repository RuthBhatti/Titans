import React from 'react';
import './Popup.scss';
import cardImage1 from '../../images/card-images-1.jpeg';
import cardImage2 from '../../images/card-images-2.jpeg';
import cardImage3 from '../../images/card-images-4.jpeg';

const cards = [
    {
        title: "Generate an image in a specific style",
        images: [
            cardImage1,
            cardImage2,
            cardImage3
        ]
    },
    {
        title: "Explain Python concepts",
        description: "1. Creating a dictionary of squares: squares = {x: x**2 for x in range(1, 6)} print(squares) # Output: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}"
    },
    {
        title: "Explore insights for aspiring novelists",
        description: "Crafting Compelling Characters: 1. Depth and Complexity: Characters should be multi-dimensional, with strengths, weaknesses, desires, fears, and contradictions. They should..."
    },
    {
        title: "Develop a board game shop business plan",
        description: "Business Plan: [Your Shop Name] – Atlanta’s Premier Board Game Destination 1. Executive Summary [Your Shop Name] will be a unique retail establishment dedicated to..."
    }
];

const Popup = ({ title, subtitle, prompt, handleClose }) => {
    return (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={handleClose}>X</button>
                <h1 className="popup-title">{title}</h1>
                <h2 className="popup-subtitle">{subtitle}</h2>

                <div className="popup-cards">
                    {cards.map((card, index) => (
                        <div key={index} className="popup-card">
                            <h3>{card.title}</h3>
                            {card.images ? (
                                <div className="card-images">
                                    {card.images.map((image, imgIndex) => (
                                        <img key={imgIndex} src={image} alt={`Card image ${imgIndex + 1}`} />
                                    ))}
                                </div>
                            ) : (
                                <p>{card.description}</p>
                            )}
                        </div>
                    ))}
                </div>
                <input type="text" className="popup-prompt" placeholder={prompt} />
            </div>
        </div>
    );
};

export default Popup;