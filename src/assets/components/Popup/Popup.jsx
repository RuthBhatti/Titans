import React from 'react';
import './Popup.scss';

const Popup = ({ title, subtitle, prompt, handleClose }) => {
    return (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={handleClose}>X</button>
                <h1 className="popup-title">{title}</h1>
                <h2 className="popup-subtitle">{subtitle}</h2>
                <input type="text" className="popup-prompt" placeholder={prompt} />
            </div>
        </div>
    );
};

export default Popup;