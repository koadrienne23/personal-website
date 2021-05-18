import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    // Mouse clicked
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // Scrolled - to make the hamburger menu sticky
    const [scrolled,setScrolled]=React.useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 5){ setScrolled(true); }
        else{ setScrolled(false); }
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })

    let menuIconScroll=['menu-icon'];
    let navMenuActiveScroll=['nav-menu active'];
    let navMenuScroll=['nav-menu'];
    if(scrolled){
        menuIconScroll.push('scrolled');
        navMenuActiveScroll.push('scrolled');
        navMenuScroll.push('scrolled');
    }

    return (
        <div>
            <header className='navbar'>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Adrienne.
                    </Link>
                    <div className={menuIconScroll.join(" ")} onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? navMenuActiveScroll.join(" ") : navMenuScroll.join(" ")}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about-me' className='nav-links' onClick={closeMobileMenu}>
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/travel' className='nav-links' onClick={closeMobileMenu}>
                                Travel
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/research' className='nav-links' onClick={closeMobileMenu}>
                                Research
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/quiz' className='nav-links' onClick={closeMobileMenu}>
                                Quiz
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header;
