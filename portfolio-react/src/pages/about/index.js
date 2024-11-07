import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
    dataabout,
    dataabout2,
    meta,
    skills,
    socialprofils,
} from "../../content_option";

export const About = () => {
    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> About | {meta.title}</title>
                    <meta name="description" content={meta.description} />
                </Helmet>
                <Row className="mb-3 mt-3 pt-md-3">
                    <Col lg="12">
                        <h1 className="display-4 mb-4">About me</h1>
                        <hr className="t_border my-4 ml-0 text-left" />
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="3">
                        <h3 className="color_sec py-4">{dataabout.title}</h3>
                    </Col>
                    <Col lg="9" className="d-flex align-items-center">
                        <div>
                            <p>{dataabout.aboutme}</p>
                        </div>
                    </Col>
                </Row>
                <Row className="sec_sp">
                    {dataabout2.map((data, i) => {
                        return (
                            <>
                                <Col lg="3" key={i}>
                                    <h4 className="color_sec py-1">{data.title}</h4>
                                    <p>{data.data}</p>
                                </Col>
                            </>
                        );
                    })}
                </Row>
                <Row className="sec_sp pb-5">
                    <Col lg="3">
                        <h3 className="color_sec py-4">Skills</h3>
                    </Col>
                    <Col lg="9">
                        {skills.map((data, i) => {
                            return (
                                <div key={i}>
                                    <h3 className="progress-title">{data.name}</h3>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            style={{
                                                width: `${data.value}%`,
                                            }}
                                        >
                                            <div className="progress-value">{data.value}%</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Col>
                </Row>
            </Container>
        </HelmetProvider>
    );
};
