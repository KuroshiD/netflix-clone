import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/320px-Logonetflix.png"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://c.tenor.com/48wCLxOB0GMAAAAC/satou-kazuma-kono-suba.gif"/> 
                </a>
            </div>
        </header>
    )
}