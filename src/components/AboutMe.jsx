import React from 'react';
import './AboutMe.css';
import profileImage from './pic4.jpg';

const AboutMe = () => {
    return (
        <section id="about">
            <div className="about-container">
                <h2 className="about-title">About <span>Me</span></h2>
                <div className="about-content">
                    <div className="about-left">
                        <img src={profileImage} alt="John Lloyd" className="about-profile-img" />
                    </div>
                    <div className="about-right">
                        <h3 className="about-heading">Computer Engineering Graduate</h3>
                        <h4 className="about-subheading">Aspiring Software Engineer / Web Developer</h4>
                        <p>I'm a Computer Engineering graduate with a passion for software development and web technologies. I enjoy building responsive, user-friendly applications and constantly strive to improve my skills.</p>
                        <div className="contact-info">
                            <p><span className="arrow">></span> Phone: +63 939 569 6768</p>
                            <p><span className="arrow">></span> Location: San Rafael, Bulacan</p>
                            <p><span className="arrow">></span> Email: johnlloydmarasigan0328@gmail.com</p>
                        </div>
                        <p>Ever since I was a kid, I’ve been curious about how things work, especially electronics and computers. That curiosity led me to pursue Computer Engineering. Along the way, I’ve explored different technologies through academic projects, learned from hands-on practice, and developed a strong interest in building real-world solutions. Now, I’m excited to turn that passion into a career, creating meaningful software and systems that make a difference.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;