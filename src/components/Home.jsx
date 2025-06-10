import React from 'react';
import './Home.css';
import profileImage from './pic2.jpg';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <section id="home">
            <div className="about-me-container">
                <div className="home-content">
                    <h1>Hi, It's <span style={{ color: '#007bff' }}><b>John Lloyd</b></span></h1>
                    <h3>
                        Aspiring{' '}
                        <span style={{ color: '#007bff', display: 'inline-block' }}>
                            <b>
                                <Typewriter
                                    options={{
                                        strings: ["Software Engineer", "Web Developer"],
                                        autoStart: true,
                                        loop: true,
                                        delay: 100,
                                        deleteSpeed: 75,
                                    }}
                                />
                            </b>
                        </span>
                        {' '}from the Philippines
                    </h3>
                    <div className="button-container">
                        <a href="#about" className="about-button">About Me</a>
                    </div>
                    <div className="home-social-links">
                        <a href="https://www.facebook.com/lloydm28" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/jhnllydmrsgn/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                <img src={profileImage} alt="John Lloyd" className="profile-img" />
            </div>
        </section>
    );
};

export default Home;
