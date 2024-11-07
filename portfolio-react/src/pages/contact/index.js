import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_option";

export const ContactUs = () => {
    const [formData, setFormdata] = useState({
        email: "",
        name: "",
        message: "",
        loading: false,
        show: false,
        alertmessage: "",
        variant: "",
    });

    return (
        <HelmetProvider>
            <Container>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{meta.title} | Contact</title>
                    <meta name="description" content={meta.description} />
                </Helmet>
                <Row className="mb-5 mt-3 pt-md-3">
                    <Col lg="12">
                        <h1 className="display-4 mb-4">Contact Me</h1>
                        <hr className="t_border my-4 ml-0 text-left" />
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="12">
                        <Alert
                            variant={formData.variant}
                            className={`rounded-0 co_alert ${formData.show ? "d-block" : "d-none"
                                }`}
                            onClose={() => setFormdata({ show: false })}
                            dismissible
                        >
                            <p className="my-0">{formData.alertmessage}</p>
                        </Alert>
                    </Col>
                    <Col lg="5" className="mb-5">
                        <h3 className="color_sec py-4">Get in touch</h3>
                        <address >
                            <p >
                                <strong>Email:</strong>{" "}
                                <a style={{ textDecoration: "none" }} href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                                    {contactConfig.YOUR_EMAIL}
                                </a>
                            </p>
                            <p>
                                <strong>Github:</strong>
                                <a style={{ textDecoration: "none" }} href={`https://${contactConfig.github}`}> {contactConfig.github}</a>
                            </p>
                            <p>
                                <strong>linkedin:</strong>
                                <a style={{ textDecoration: "none" }} href={`https://${contactConfig.linkedin}`}> {contactConfig.linkedin}</a>
                            </p>
                            <p>
                                <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                            </p>

                        </address>
                        <p>{contactConfig.description}</p>
                    </Col>
                </Row>
            </Container>
            <div className={formData.loading ? "loading-bar" : "d-none"}></div>
        </HelmetProvider>
    );
};
