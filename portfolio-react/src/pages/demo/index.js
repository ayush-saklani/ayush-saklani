import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, resumedata, socialprofils } from "../../content_option";
export const Demo = () => {
    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Demo | {meta.title} </title>
                </Helmet>
                <Row className="mb-3 mt-3 pt-md-3">
                    <Col lg="12">
                        <h1 className="display-4 mb-4">Project Demo </h1>
                        <hr className="t_border mt-4 ml-0 text-left" />
                    </Col>
                </Row>
                <div class="row project-super-container">
                    {
                        resumedata[1].data.map((data, i) => {
                            return (
                                data.hosted_link &&
                                <div key={i} className="pb-4 mb-4 project-container">
                                    <h2 className="fw-bold my-3 text-uppercase project-heading py-2 px-2">{data.heading} </h2>
                                    <div className="ratio ratio-16x9 mb-3 project-frame">
                                        <iframe src={data.hosted_link} allowfullscreen></iframe>
                                    </div>
                                </div>
                            );
                        })
                    }
                    <div className="under-development pb-4 mb-4 project-container">
                        <h2 className="placeholder placeholder-wave fw-bold my-3 text-uppercase project-heading my-2 px-2"><b>Lorem ipsum dolor sit amet consectetur.</b></h2>
                        <div className="ratio ratio-16x9 mb-3 project-frame placeholder placeholder-glow">
                            <iframe src="" title="Lorem ipsum dolor" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </Container>
        </HelmetProvider>
    );
};
