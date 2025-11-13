import React, { useState } from "react";
import "./style.css";
import Modal from 'react-modal';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Education, Experience, meta, Projects, socialprofils } from "../../content_option";
import { FaGithub, FaLinkedin, FaPlay, FaXTwitter } from "react-icons/fa6";
import { FaExternalLinkAlt, FaFileDownload } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { BiLogoGmail } from "react-icons/bi";
import Project_Card from "../../components/Project_Card";
import ToggleSwitch from "../../components/ToggleSwitch";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        // right: 'auto',
        // bottom: 'auto',
        height: '100%',
        width: '70%',
        backgroundColor: 'transparent',
        // marginRight: '-50%',
        border: 'none',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderRadius: '10px',
        zIndex: '99999',
    },
};

export const Resume = () => {
    const [projectstyle, setProjectStyle] = useState(true);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
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
                                    <div className="w-3/3 col-span-1" key={i}>
                                        <Project_Card information={data} />
                                        <button className="text-lg font-bold text-highlight-dark hover:text-highlight-hover pt-2" onClick={() => { setSelectedProject(data); openModal(); }}>Demo</button>
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
                                    <button className="ml-auto ps-3 py-1 text-lg md:text-xl font-extrabold my-0.5" onClick={() => { setSelectedProject(data); openModal(); }}>Demo</button>
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
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                >
                    <div className="" style={{ position: 'relative' }}>
                        {/* Red cross close button on the top-right */}
                        <button
                            onClick={closeModal}
                            aria-label="Close"
                            style={{
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                height: 28,
                                width: 28,
                                color: 'white',
                                background: 'red',
                                border: 'none',
                                fontSize: 26,
                                borderRadius: '50%',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        > <ImCross size={15} className="p-0 m-0" />
                        </button>

                        {selectedProject ? (
                            selectedProject.link ? (
                                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 ">
                                    <h2 className="font-bold text-2xl my-1 uppercase p-2 text-highlight hover:text-highlight-hover">{selectedProject.heading} </h2>
                                    <FaExternalLinkAlt size={20} />
                                </a>
                            ) : (
                                <h2 className="font-bold text-2xl my-1 uppercase p-2 text-highlight">{selectedProject.heading}</h2>
                            )
                        ) : null}

                        {
                            selectedProject && (selectedProject.hosted_link ?
                                <div className="ratio ratio-16x9 rounded-md">
                                    <iframe src={selectedProject.hosted_link} title={selectedProject.heading} className="" allowFullScreen></iframe>
                                </div>
                                :
                                <div className="flex justify-center">
                                    <div className="w-full aspect-[16/9]">
                                        {selectedProject.image && selectedProject.image[0] && (
                                            <img src={selectedProject.image[0]} title={selectedProject.heading} className="w-full h-full object-scale-down rounded-md" alt={selectedProject.heading} />
                                        )}
                                    </div>
                                </div>
                            )
                        }
                        {
                            <div className="row project-super-container lg:hidden">
                                <h1 className="text-3xl font-bold my-2">
                                    <div className="sm:text-2xl text-xl font-bold my-2">Screen size too small.</div>
                                    <div className="sm:text-2xl text-xl font-bold my-2">Please use a larger screen.</div>
                                    <div className="sm:text-2xl text-xl font-bold my-2">OR</div>
                                    <div className="sm:text-2xl text-xl font-bold my-2">Use the <span className="text-highlight">{"Demo"}</span> link in the resume section.</div>
                                </h1>
                            </div>
                        }
                    </div>
                </Modal>
            </Container>
        </HelmetProvider >
    );
};
