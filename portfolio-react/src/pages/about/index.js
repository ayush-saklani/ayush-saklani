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
                <Row>
                    <Col lg="3">
                        <h3 className="color_sec py-4">{dataabout.title}</h3>
                    </Col>
                    <Col lg="9" className="d-flex align-items-center">
                        <div>
                            <p>{dataabout.aboutme}</p>
                        </div>
                    </Col>
                </Row>

                <Row className="sec_sp row">
                    <img src={my_photo} className="col-lg-4 pb-4" style={{ objectFit: "contain" }} />
                    <div className="col-lg-8 row">
                        {dataabout2.map((data, i) => {
                            return (
                                <div key={i} className="col-lg-6 col-sm-6">
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
                                        <a class="text" href="https://github.com/ayush-saklani?tab=repositories" target="_blank"><b>{data.title}</b></a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* <div class="container">
                    <h6 class="text text-uppercase text-secondary"><b>Coding Skills &amp; Interests</b></h6>
                    <div class="row text-center">
                        <div class="col-lg-1 col-md-2 col-sm-3 py-3 px-1 col-4">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" height="60" />
                        </div>
                        <div class="col-lg-1 col-md-2 col-sm-3 py-3 px-1 col-4">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" height="60" />
                        </div>
                        <div class="col-lg-1 col-md-2 col-sm-3 py-3 px-1 col-4">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="60" />
                        </div>
                        <div class="col-lg-1 col-md-2 col-sm-3 py-3 px-1 col-4">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" height="60" />
                        </div>
                        <div class="col-lg-1 col-md-2 col-sm-3 py-3 px-1 col-4">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" height="60" />
                        </div>
                        <div class="col-lg-1 col-md-2 col-sm-3 py-3 px-1 col-4">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="60" />
                        </div>
                        <div class="col-lg-1 col-md-2 col-sm-3 py-3 px-1 col-4">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="60" />
                        </div>
                        <div class="col-lg-1 col-md-2 col-sm-3 py-3 px-1 col-4">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="60" />
                        </div>
                        <div class="col-lg-1 col-md-2 col-sm-3 py-3 px-1 col-4">
                            <img src="https://devicon-website.vercel.app/api/nodejs/original.svg" height="60" />
                        </div>
                        <div class="col-lg-1 col-md-2 col-sm-3 py-3 px-1 col-4">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" height="60" />
                        </div>
                        <div class="col-lg-1 col-md-2 col-sm-3 py-3 px-1 col-4">
                            <img src="/assets/img/expressjs-logo.png" height="60" />
                        </div>
                        <div class="col-lg-1 col-md-2 col-sm-3 py-3 px-1 col-4">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" height="60" />
                        </div>
                        <div class="col-lg-1 col-md-2 col-sm-3 py-3 px-1 col-4">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg" height="60" />
                        </div>
                        <div class="col-lg-1 col-md-2 col-sm-3 py-3 px-1 col-4">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-plain.svg" height="60" />
                        </div>
                        <div class="col-lg-1 col-md-2 col-sm-3 py-3 px-1 col-4">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" height="60" />
                        </div>
                        <div class="col-lg-1 col-md-2 col-sm-3 py-3 px-1 col-4">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" height="60" />
                        </div>
                        <div class="col-lg-1 col-md-2 col-sm-3 py-3 px-1 col-4">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" height="60" />
                        </div>
                        <div class="col-lg-1 col-md-2 col-sm-3 py-3 px-1 col-4">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Openstreetmap_logo.svg" height="60" />
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 py-3 px-2 col-8">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Leaflet_logo.svg/1280px-Leaflet_logo.svg.png" height="60" />
                        </div>
                        <div class="col-lg-1 col-md-2 col-sm-3 py-3 px-1 col-4">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg" height="60" />
                        </div>
                        <div class="col-lg-1 col-md-2 col-sm-3 py-3 px-1 col-4">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" height="60" />
                        </div>
                        <div class="col-lg-1 col-md-2 col-sm-3 py-3 px-1 col-4">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height="60" />
                        </div>
                        <div class="col-lg-1 col-md-2 col-sm-3 py-3 px-1 col-4">
                            <img src="https://devicon-website.vercel.app/api/azure/original.svg" height="60" />
                        </div>
                        <div class="col-lg-11 col-md-10 col-sm-12 py-3 px-2">
                            <img src="https://64.media.tumblr.com/c3becd2c993f457fac2cd7b3bd53538d/tumblr_mivect2TMc1rfjowdo1_r1_500.gifv" height="60" />
                        </div>
                    </div>
                </div> */}
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
