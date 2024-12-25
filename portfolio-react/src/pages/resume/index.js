import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, resumedata, socialprofils } from "../../content_option";
import { FaGithub, FaLinkedin, FaPlay, FaXTwitter } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export const Resume = () => {
    return (
        <HelmetProvider>
            <Container className="About-header pb-5">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Resume | {meta.title} </title>
                </Helmet>
                <Row className="mb-3 mt-3 pt-md-3">
                    <Col lg="12">
                        <h1 className="display-4 mb-4"> Resume </h1>
                        <hr className="t_border mt-4 ml-0 text-left" />
                    </Col>
                </Row>
                <h1 className="text-3xl font-bold">{meta.title} </h1>
                <h6 className="my-2 text-md font-medium">{meta.description}</h6>
                <h2 className="my-3 text-3xl flex gap-1">
                    {socialprofils.github && <a href={socialprofils.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
                    {socialprofils.linkedin && <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>}
                    {socialprofils.twitter && <a href={socialprofils.twitter} target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>}
                    {socialprofils.email && <a href={socialprofils.email} target="_blank" rel="noopener noreferrer"><BiLogoGmail /></a>}
                    {socialprofils.resume && <a href={socialprofils.resume} target="_blank" rel="noopener noreferrer"><FaFileDownload /></a>}
                </h2>
                {
                    resumedata.map((data, i) => {
                        return (
                            <div key={i} className="pb-4">
                                <h1 className="text-4xl font-bold my-1">{data.title} </h1>
                                {
                                    data.data.map((data, i) => (
                                        <div key={i} className="pt-1">
                                            <h4 className="fw-bold py-1 text-highlight flex items-center text-lg uppercase">
                                                <FaPlay className="me-2" />
                                                {data.link ?
                                                    <a href={data.link} target="_blank" rel="noopener noreferrer">
                                                        {data.heading}
                                                    </a> : data.heading
                                                }
                                            </h4>
                                            {
                                                data.tags &&
                                                <div className="ps-4 ms-2 gap-1 flex flex-wrap">
                                                    {data.tags.map((tag, i) => (
                                                        <h6 key={i} className="bg-tag text-black text-center rounded-sm font-bold p-2">{tag}</h6>
                                                    ))}
                                                </div>
                                            }
                                            {
                                                data.description &&
                                                <div className="ps-4 ms-2 py-2">
                                                    {data.description.map((description, i) => (
                                                        <li key={i} className="mb-1 text-md font-medium">{description}</li>
                                                    ))}
                                                </div>
                                            }
                                            {
                                                data.technologies &&
                                                <div className="ps-4 ms-2 py-2 flex flex-wrap gap-1">
                                                    {data.technologies.map((technology, i) => (
                                                        <img key={i} className="h-[65px] w-[65px]" src={technology} alt={technology} height={65} />
                                                    ))}
                                                </div>
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        );
                    })
                }
            </Container>
        </HelmetProvider>
    );
};
