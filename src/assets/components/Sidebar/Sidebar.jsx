import React, { useState } from 'react';
import './Sidebar.scss';
import Backaround from '../../../assets/image.png';
import logo from '../../../assets/logo.png';
import Popup from '../Popup/Popup';

const Sidebar = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    return (
        <>
            <div className="sidebar">
                <img src={logo} alt="Logo" className="sidebar__logo" />
                <button className="new-btn" onClick={togglePopup}>+ New</button>
                <nav>
                    <ul>
                        <li className="active">Home</li>
                        <li>My Drive</li>
                        <li>Computers</li>
                        <li>Shared with me</li>
                        <li>Recent</li>
                        <li>Starred</li>
                        <li>Spam</li>
                        <li>Trash</li>
                        <li>Storage</li>
                    </ul>
                </nav>
                {isPopupVisible && (
                    <Popup
                        title="Hello,Titan"
                        subtitle="How can I help you today?"
                        prompt="Enter a prompt here"
                        handleClose={togglePopup}
                    />
                )}
            </div>
        </>
    );
}

export default Sidebar;