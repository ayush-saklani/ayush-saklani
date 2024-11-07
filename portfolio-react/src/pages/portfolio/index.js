import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, resumedata } from "../../content_option";
import { FaCentos, FaPlay } from "react-icons/fa6";
export const Portfolio = () => {
    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Portfolio | {meta.title} </title>{" "}
                    <meta name="description" content={meta.description} />
                </Helmet>
                <Row className="mb-5 mt-3 pt-md-3">
                    <Col lg="12">
                        <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
                        <hr className="t_border my-4 ml-0 text-left" />
                    </Col>
                </Row>
                {
                    resumedata.map((data, i) => {
                        return (
                            <div key={i} className="pb-4">
                                <h1 className="fw-bold">{data.title} </h1>
                                {
                                    data.data.map((data, i) => (
                                        <div key={i} className="pt-3 ">
                                            {/* <FaCentos fontSize={30} /> */}
                                            <h4 className="fw-bold"><FaPlay className="me-1"/> {data.heading}</h4>
                                            <div className="tags ps-4 ms-2">
                                                {
                                                    data.tags.map((tag, i) => (
                                                        <h6 key={i} className="tag-element">{tag}</h6>
                                                    ))
                                                }
                                            </div>
                                            <div className="description ps-4 ms-2 ">
                                            {
                                                data.description && data.description.map((description, i) => (
                                                    <li key={i} className="description-element pb-1">{description}</li>
                                                ))
                                            }
                                            </div>
                                            <div className="technologies ps-4 ms-2">
                                            {
                                                data.technologies && data.technologies.map((technology, i) => (
                                                    <img key={i} className="technology-element pe-1" src={technology} alt={technology} height={65} />
                                                ))
                                            }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        );
                    })}
            </Container>
        </HelmetProvider>
    );
};
