import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './styles/App.css';
import Contact from './components/Contact';

const App = () => {
    return (
        <div>
            <Header />
            <section id="home" className="section">
                <Home />
            </section>
            <section id="about" className="section">
                <AboutMe />
            </section>
            <section id="skills" className="section">
                <Skills />
            </section>
            <section id="projects" className="section">
                <Projects />
            </section>
            <section id="contact" className="section">
                <Contact />
            </section>
        </div>
    );
};

export default App;