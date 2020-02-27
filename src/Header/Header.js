import React from 'react';

import './Header.scss';

function Header() {
    return (
        <header>
            <div>
           
            <nav>
                <ul className="main-nav">
                    <li>
                        <a className="logo">MyFace</a>
                    </li>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a >Posts</a>
                    </li>
                    <li>
                        <a>Users</a>
                    </li>
                    <li>
                        <a>Privacy</a>
                    </li>
                </ul>

            </nav>
            </div>  
            <div className="bannerdiv">.</div>
        </header>

    );
}

export {Header};