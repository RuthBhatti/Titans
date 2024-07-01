import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <div className="header-right">
                {/* <span className="keyboard-shortcuts">Updates to keyboard shortcuts...</span> */}
                {/* <button className="update-btn">Update now</button> */}
                <div className="profile">
                    <span className="initials">r</span>
                </div>
            </div>
        </header>
    );
}

export default Header;