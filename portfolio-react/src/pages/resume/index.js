import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Education, Experience, meta, Projects, socialprofils } from "../../content_option";
import { FaGithub, FaLinkedin, FaPlay, FaXTwitter } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Project_Card from "../../components/Project_Card";
import ToggleSwitch from "../../components/ToggleSwitch";

export const Resume = () => {
    const [projectstyle, setProjectStyle] = useState(true);
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
                {
                    <div className="py-3">
                        <h1 className="text-3xl md:text-4xl font-bold my-1">Education</h1>
                        {
                            Education.map((data, i) => (
                                <div key={i} className="rounded-m p-3 bg-[#25252549]">
                                    <h4 className="px-2 text-highlight flex text-lg md:text-xl font-extrabold uppercase align-middle flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                                        <span className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
                                            <span className="flex items-center text-highlight font-extrabold uppercase gap-2">
                                                <FaPlay className="me-2" size={16} />
                                                <span>{data.heading}</span>
                                            </span>
                                            <div className="flex flex-wrap items-center gap-2 px-[2rem] lg:px-0">
                                                <span className="text-white">{data.board}</span>
                                                <span className="text-[cyan]">{data.certification}</span>
                                            </div>
                                        </span>
                                        <span className="text-white font-bold uppercase px-[2rem] lg:px-0">{data.year}</span>
                                    </h4>
                                </div>
                            ))
                        }
                    </div>
                }
                {
                    <div className="py-3">
                        <h1 className="text-3xl md:text-4xl font-bold my-1">Experience</h1>
                        {
                            Experience.map((data, i) => (
                                <div key={i} className="rounded-m p-3 bg-[#25252549]">
                                    <div className="px-2 text-highlight flex text-lg md:text-xl font-extrabold align-middle flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                                        <span className="flex flex-col items-start lg:items-start gap-2">
                                            <span className="flex items-center text-highlight font-extrabold uppercase gap-2">
                                                <FaPlay className="me-2" size={16} />
                                                <span>{data.heading}</span>
                                            </span>
                                            <div className="flex items-center gap-2 mx-[2rem]">
                                                <span className="text-white">{data.role}</span>
                                            </div>
                                        </span>
                                        <span className="text-white font-bold px-[2rem] lg:px-0">{data.year}</span>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                }
                {
                    <div className="py-3">
                        <div className="flex items-center justify-between me-2">
                            <h1 className="text-3xl md:text-4xl font-bold my-1">Projects</h1>
                            <ToggleSwitch projectstyle={projectstyle} setProjectStyle={setProjectStyle} />
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-3">
                            {projectstyle &&
                                Projects.map((data, i) => (
                                    <div className="w-3/3 col-span-1">
                                        <Project_Card information={data} />
                                    </div>
                                ))}
                        </div>
                        {!projectstyle &&
                            Projects.map((data, i) => (
                                <div key={i} className="pt-1 p-3 my-2 bg-[#25252549]">
                                    <h4 className="ps-3 py-1 text-highlight flex items-center text-lg md:text-xl font-extrabold uppercase my-0.5">
                                        <FaPlay className="me-2" size={16} />
                                        {data.link ?
                                            <a href={data.link} target="_blank" rel="noopener noreferrer">
                                                {data.heading}
                                            </a> : data.heading
                                        }
                                    </h4>
                                    {
                                        data.tags &&
                                        <div className="mx-[2rem] gap-1.5 flex flex-wrap">
                                            {data.tags.map((tag, i) => (
                                                <h6 key={i} className="bg-tag text-black text-center rounded-sm font-bold p-2">{tag}</h6>
                                            ))}
                                        </div>
                                    }
                                    {
                                        data.description &&
                                        <div className="mx-[2rem] py-2">
                                            {data.description.map((description, i) => (
                                                <li key={i} className="mb-1 text-sm md:text-base font-medium">{description}</li>
                                            ))}
                                        </div>
                                    }
                                    {
                                        data.technologies &&
                                        <div className="mx-[2rem] py-2 flex flex-wrap gap-1.5">
                                            {data.technologies.map((technology, i) => (
                                                <img key={i} className="h-[50px] lg:h-[65px] lg:w-[65px]" src={technology} alt={technology} height={65} />
                                            ))}
                                        </div>
                                    }
                                </div>
                            ))
                        }
                    </div>
                }
            </Container>
        </HelmetProvider>
    );
};
