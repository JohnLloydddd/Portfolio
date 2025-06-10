import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Projects.css';
import proj1 from './project1.png';
import proj2 from './project2.jpg';
import proj3 from './project3.png';

const Projects = () => {
    const projects = [
        {
            title: "Classroom Monitoring System",
            description: "A system that tracks classroom occupancy and displays real-time availability through a web interface.",
            technologies: ["Python", "HTML/CSS", "Arduino"],
            image: proj1,
        },
        {
            title: "Student Information System",
            description: "A system for managing student records, including registration, data updates, search functionality, and printable reports.",
            technologies: ["PHP", "MySQL"],
            image: proj2,
        },
        {
            title: "School Landing Page",
            description: "A user-friendly landing page for a school, featuring responsive design and interactive elements to enhance user experience.",
            technologies: ["HTML/CSS", "JavaScript"],
            image: proj3,
        }
    ];

    return (
        <section id="projects" className="min-vh-100">
            <Container>
                <h2 className="projects-title text-center"><span>My</span> Projects</h2>
                <Row className="g-4">
                    {projects.map((project, index) => (
                        <Col lg={4} md={6} key={index}>
                            <div className="project-card">
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="technologies">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Projects;