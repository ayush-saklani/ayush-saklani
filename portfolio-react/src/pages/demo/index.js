import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, resumedata } from "../../content_option";
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
                <div className="row project-super-container">
                    {
                        resumedata[resumedata.length - 1].data.map((data, i) => {
                            return (
                                data.hosted_link &&
                                <div key={i} className="pb-3 mb-4 project-container">
                                    <a href={data.link} target="_blank" rel="noopener noreferrer">
                                        <h2 className="font-bold text-2xl my-1 uppercase p-2 text-highlight hover:text-highlight-hover">{data.heading} </h2>
                                    </a>
                                    <div className="ratio ratio-16x9 project-frame">
                                        <iframe src={data.hosted_link} allowfullscreen title={data.heading}></iframe>
                                    </div>
                                </div>
                            );
                        })
                    }
                    <div className="under-development pb-3 mb-4 project-container">
                        <h2 className="placeholder placeholder-wave my-3 px-2 font-bold text-2xl uppercase text-highlight hover:text-highlight-hover"><b>Lorem ipsum dolor sit amet consectetur.</b></h2>
                        <div className="ratio ratio-16x9 project-frame placeholder placeholder-glow">
                            <iframe src="" title="Lorem ipsum dolor" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </Container>
        </HelmetProvider>
    );
};
