import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Education, meta, resumedata, socialprofils } from "../../content_option";
import { FaGithub, FaLinkedin, FaPlay, FaXTwitter } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Project_Card from "../../components/Project_Card";

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
                <h1 className="text-3xl font-bold my-2">{meta.title} </h1>
                <h6 className="my-2 text-base font-semibold">{meta.description}</h6>
                <h2 className="my-3 text-3xl flex gap-2">
                    {socialprofils.github && <a href={socialprofils.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
                    {socialprofils.linkedin && <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>}
                    {socialprofils.twitter && <a href={socialprofils.twitter} target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>}
                    {socialprofils.email && <a href={socialprofils.email} target="_blank" rel="noopener noreferrer"><BiLogoGmail /></a>}
                    {socialprofils.resume && <a href={socialprofils.resume} target="_blank" rel="noopener noreferrer"><FaFileDownload /></a>}
                </h2>
                {/* {
                    <div className="py-3">
                        <h1 className="text-4xl font-bold my-1">Education</h1>
                        {
                            Education.map((data, i) => (
                                <div key={i} className="rounded-m p-3 my- bg-[#25252549]">
                                    <h4 className="px-2  text-highlight flex items-center justify-between text-xl font-extrabold uppercase align-middle ">
                                        <span className="flex items-center gap-3">
                                            <span className="flex items-center">
                                                <FaPlay className="me-2" size={16} />

                                                <span>{data.heading}</span>
                                            </span>
                                            <span className="text-white">{data.board}</span>
                                            <span className="text-whitse">{data.certification}</span>
                                        </span>
                                        <span className="text-white font-bold text-xl uppercase my-0.5">{data.year}</span>
                                    </h4>
                                </div>
                            ))
                        }
                    </div>
                } */}
                {
                    resumedata.map((data, i) => {
                        return (
                            <div key={i} className="py-3">
                                <h1 className="text-4xl font-bold my-1">{data.title} </h1>
                                {
                                    data.data.map((data, i) => (
                                        <div key={i} className="pt-1 rounded-md p-3 my-2 bg-[#25252549]">
                                            {/* {
                                                data.link &&
                                                <div className="w-3/3">
                                                    <Project_Card information={data} />
                                                </div>
                                            } */}
                                            <h4 className="ps-3 py-1 text-highlight flex items-center text-xl font-extrabold uppercase my-0.5">
                                                <FaPlay className="me-2" size={16} />
                                                {data.link ?
                                                    <a href={data.link} target="_blank" rel="noopener noreferrer">
                                                        {data.heading}
                                                    </a> : data.heading
                                                }
                                            </h4>
                                            {
                                                data.tags &&
                                                <div className="ps-4 ms-2 gap-1.5 flex flex-wrap">
                                                    {data.tags.map((tag, i) => (
                                                        <h6 key={i} className="bg-tag text-black text-center rounded-sm font-bold p-2">{tag}</h6>
                                                    ))}
                                                </div>
                                            }
                                            {
                                                data.description &&
                                                <div className="ps-4 ms-2 py-2">
                                                    {data.description.map((description, i) => (
                                                        <li key={i} className="mb-1 text-base font-medium">{description}</li>
                                                    ))}
                                                </div>
                                            }
                                            {
                                                data.technologies &&
                                                <div className="px-4 mx-2 py-2 flex flex-wrap gap-1.5">
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
