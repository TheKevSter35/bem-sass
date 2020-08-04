import React from 'react';
import Logo from '../img/logo.svg';
function Nav() {
    return (
        <header>
            <div class="container">
                <div class="logo">
                    <a href="/">
                    <img src={Logo} alt="Logo"/>
                    </a>
                </div>
                <div class="nav">
                    <nav>
                        <a href="/">Work</a>
                        <a href="/">About</a>
                        <a href="/">Contact</a>
                    </nav>
                </div>
            </div>

        </header>
    );
}

export default Nav;