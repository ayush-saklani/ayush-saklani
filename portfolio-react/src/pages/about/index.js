import React from "react";
import "./style.css";
import CountUp from 'react-countup';
import github_logo from "../../assets/images/github-logo.png";
import my_photo from "../../assets/images/me.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
    dataabout,
    dataabout2,
    dataabout3,
    meta,
    Interests
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


                <Row className="sec_sp row">
                    <img src={my_photo} className="col-xl-4 col-lg-7 py-4" style={{ objectFit: "contain" }} />
                    <div className="col-xl-8 col-lg-5  row">
                        <h3 className="color_sec py-2 fw-bold">{dataabout.title}</h3>
                        <p><b>{dataabout.aboutme}</b></p>
                        {dataabout2.map((data, i) => {
                            return (
                                <div key={i} className="col-lg-12 col-sm-6 col-xl-6 col-sm-12">
                                    <h4 className="color_sec py-1" style={{ color: "var(--text-color-4)" }}><b>{data.title}</b></h4>
                                    <h5>{data.data}</h5>
                                </div>
                            );
                        })}
                    </div>
                </Row>
                <div class="row sec_sp">
                    {dataabout3.map((data, i) => {
                        return (
                            <div class="col-lg-4 col-md-4 col-sm-4">
                                <div class="trans-box-count row p-4">
                                    <div class="col-lg-4 p-3 text-center">
                                        <i><img src={data.logo_link} alt="github" height="60px" /></i>
                                    </div>
                                    <div class="col-lg-8 text-center">
                                        <CountUp end={data.data} />
                                        <a class="text" href={data.link} target="_blank"><b>{data.title}</b></a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Row className="sec_sp pb-5">
                    {/* <h3 className="color_sec py-2">Coding Skills &amp; Interests</h3> */}
                    <div class="row text-center">
                        {
                            Interests.map((data, i) => {
                                return (
                                    <div key={i} className="col-lg-1 col-md-2 col-sm-3 py-2 px-1 col-4">
                                        <img src={data} height="70" />
                                    </div>
                                );
                            })
                        }
                    </div>
                </Row>
            </Container>
        </HelmetProvider>
    );
};
