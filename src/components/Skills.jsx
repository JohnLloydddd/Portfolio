import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { DiJavascript1, DiPython, DiJava, DiReact } from 'react-icons/di';
import { SiCplusplus, SiHtml5 } from 'react-icons/si';
import { FaUserFriends, FaUsers, FaClock, FaRandom, FaPuzzlePiece, FaBrain } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
    const codingSkills = [
        { name: 'HTML/CSS', progress: 85, icon: <SiHtml5 /> },
        { name: 'JavaScript', progress: 60, icon: <DiJavascript1 /> },
        { name: 'Python', progress: 80, icon: <DiPython /> },
        { name: 'Java', progress: 70, icon: <DiJava /> },
        { name: 'C++', progress: 80, icon: <SiCplusplus /> },
        { name: 'React', progress: 65, icon: <DiReact /> }
    ];

    const softSkills = [
        { name: 'Communication', icon: <FaUserFriends /> },
        { name: 'Team Collaboration', icon: <FaUsers /> },
        { name: 'Time Management', icon: <FaClock /> },
        { name: 'Adaptability', icon: <FaRandom /> },
        { name: 'Problem-Solving', icon: <FaPuzzlePiece /> },
        { name: 'Critical Thinking', icon: <FaBrain /> }
    ];

    return (
        <section id="skills" className="min-vh-100 d-flex align-items-center">
            <Container>
                <h2 className="skills-title text-center mb-6">My <span>Skills</span></h2>
                <Row className="justify-content-center g-4">
                    <Col lg={6}>
                        <div className="skills-box">
                            <h3 className="text-center mb-4">Technical Skills</h3>
                            <div className="coding-grid">
                                {codingSkills.map((skill, index) => (
                                    <div key={index} className="coding-item">
                                        <div className="coding-header">
                                            <span className="skill-icon">{skill.icon}</span>
                                            <span className="skill-name">{skill.name}</span>
                                        </div>
                                        <ProgressBar 
                                            now={skill.progress} 
                                            variant="danger" 
                                            className="custom-progress"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="skills-box">
                            <h3 className="text-center mb-4">Soft Skills</h3>
                            <div className="soft-skills">
                                {softSkills.map((skill, index) => (
                                    <div key={index} className="soft-item">
                                        <span className="bullet">{skill.icon}</span>
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Skills;