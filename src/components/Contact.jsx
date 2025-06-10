import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    return (
        <section id="contact">
            <Container>
                <h2 className="contact-title text-center">Contact <span>Me</span></h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={6} className="pe-lg-4">
                            <div className="form-group mb-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Full Name"
                                    required
                                />
                            </div>
                            <div className="form-group mb-4">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="form-group mb-4">
                                <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="Phone Number"
                                />
                            </div>
                        </Col>
                        <Col lg={6} className="ps-lg-4">
                            <div className="form-group h-100">
                                <textarea
                                    className="form-control h-100"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>
                        </Col>
                    </Row>
                    <div className="text-center mt-4">
                        <button type="submit" className="send-button">
                            Send Message
                        </button>
                    </div>
                </form>

                <Modal 
                    show={showModal} 
                    onHide={() => setShowModal(false)}
                    centered
                    className="custom-modal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Under Development</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        This feature is currently under development. Please try again later.
                    </Modal.Body>
                </Modal>
            </Container>
        </section>
    );
};

export default Contact;