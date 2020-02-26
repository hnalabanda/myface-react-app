import React from 'react';

import './Header.scss';

function Header() {
    return (
        <header>
            <nav>
                <ul class="myface-banner">
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
        </header>

    );
}

export {Header};