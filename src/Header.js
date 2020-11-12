import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <>
        <header id="homepage-header" className="banner">

            <nav className="navbar justify-content-center navbar-expand-lg navbar-dark center mb-3">
                <div className="navbar-inner">
                    <ul className="navbar-nav">
                        <li className="nav-item active mx-5">
                            <span className="nav-link"><Link to="/">Home</Link></span>
                        </li>
                        <li className="nav-item mx-5">
                            <span className="nav-link"><Link to="/about">About</Link></span>
                        </li>
                        <li className="nav-item mx-5">
                            <span className="nav-link"><Link to="/articles-list">Articles</Link></span>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="profile-picture"></div>
            <div className="profile-name">Hugo Perez</div>
            <div className="subtext">Welcome to my thought pad.</div>

        </header>

    </>
);

export default Header;