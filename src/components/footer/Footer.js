import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Adrienne Ko's Website
                </p>
                <div className="footer-links">
                    <div className="footer-links-wrapper">
                        <div className="footer-link-items">
                            <Link to='/about-me'>About Me</Link>
                            <Link to='/travel'>Travel</Link>
                            <Link to='/research'>Research</Link>
                            <Link to='/quiz'>Quiz</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section class='social-media-wrap'>
                <div class='social-icons'>
                    <Link
                    class='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                        <a href="https://www.facebook.com/profile.php?id=100011136670722"><i class='fab fa-facebook-f' /></a>
                    </Link>
                    <Link
                    class='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                        <a href="https://www.instagram.com/adrienne_ko/"><i class='fab fa-instagram' /></a>
                    </Link>
                    <Link
                    class='social-icon-link linkedin'
                    to='/'
                    target='_blank'
                    aria-label='LinkedIn'
                    >
                        <a href="https://www.linkedin.com/in/adrienne-ko-5746331a2/"><i class='fab fa-linkedin' /></a>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Footer;