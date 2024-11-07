import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, resumedata,socialprofils } from "../../content_option";
import { FaAddressCard, FaDownload, FaGithub, FaLinkedin, FaPlay, FaXTwitter } from "react-icons/fa6";
export const Portfolio = () => {
    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Portfolio | {meta.title} </title>
                </Helmet>
                <Row className="mb-3 mt-3 pt-md-3">
                    <Col lg="12">
                        <h1 className="display-4 mb-4"> Portfolio </h1>
                        <hr className="t_border mt-4 ml-0 text-left" />
                    </Col>
                </Row>
                <h1 className="fw-bold">{meta.title} </h1>
                <h6 className=" py-1">{meta.description}</h6>
                <h2 className="mb-5">
                    {socialprofils.github && <a href={socialprofils.github} target="_blank"><FaGithub className="me-2" /></a>}
                    {socialprofils.linkedin && <a href={socialprofils.linkedin} target="_blank"><FaLinkedin className="me-2" /></a>}
                    {socialprofils.twitter && <a href={socialprofils.twitter} target="_blank"><FaXTwitter className="me-2" /></a>}
                    {socialprofils.email && <a href={socialprofils.email} target="_blank"><FaAddressCard className="me-2" /></a>}
                    {socialprofils.resume && <a href={socialprofils.resume} target="_blank"><FaDownload className="me-2"/></a>}
                </h2>
                {
                    resumedata.map((data, i) => {
                        return (
                            <div key={i} className="pb-4">
                                <h1 className="fw-bold">{data.title} </h1>
                                {
                                    data.data.map((data, i) => (
                                        <div key={i} className="pt-3 ">
                                            <h4 className="fw-bold pt-1 resume-heading"><FaPlay className="me-2" />
                                                {data.link ?
                                                    <a href={data.link} target="_blank">
                                                        {data.heading}
                                                    </a> : data.heading
                                                }
                                            </h4>
                                            {
                                                data.tags &&
                                                <div className="tags ps-4 ms-2">
                                                    {data.tags.map((tag, i) => (
                                                        <h6 key={i} className="tag-element">{tag}</h6>
                                                    ))}
                                                </div>
                                            }
                                            {
                                                data.description &&
                                                <div className="description ps-4 ms-2 ">
                                                    {data.description.map((description, i) => (
                                                        <li key={i} className="description-element pb-1">{description}</li>
                                                    ))}
                                                </div>
                                            }
                                            {
                                                data.technologies &&
                                                <div className="technologies ps-4 ms-2">
                                                    {data.technologies.map((technology, i) => (
                                                        <img key={i} className="technology-element pe-1" src={technology} alt={technology} height={65} />
                                                    ))}
                                                </div>
                                            }
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
