import React from "react";
import "./style.css";
import CountUp from 'react-countup';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import LogoLoop from "../../components/LogoLoop";
import {
    dataabout,
    dataabout2,
    dataabout3,
    meta,
    Interests,
    images
} from "../../content_option";

export const About = () => {
    return (
        <HelmetProvider>
            <Container className="About-header pb-3">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> About | {meta.title}</title>
                    <meta name="description" content={meta.description} />
                </Helmet>
                <Row className="mt-3 pt-md-3">
                    <Col lg="12">
                        <h1 className="display-4 mb-4">About me</h1>
                        <hr className="my-4 ml-0 text-left" />
                    </Col>
                </Row>
                <Row className="mb-5 bg-[#25252549] py-2" >
                    <img src={images.my_photo2} className="col-xl-4 col-lg-7 py-2" style={{ objectFit: "contain" }} alt="Me" />
                    <div className="col-xl-8 col-lg-5 row py-3">
                        <h3 className="text-highlight hover:text-highlight-hover mb-2 text-3xl font-bold">{dataabout.title}</h3>
                        <span className="fw-semibold my-2">
                            {dataabout.aboutme}
                        </span>
                        {dataabout2.map((data, i) => {
                            return (
                                <div key={i} className="col-lg-12 col-sm-6 col-xl-6 col-sm-12 my-1">
                                    <h5 className="font-extrabold text-xl text-highlight hover:text-highlight-hover pb-1">{data.title}</h5>
                                    <h5 className="font-medium">{data.data}</h5>
                                </div>
                            );
                        })}
                    </div>
                </Row>
                <div className="mb-5 justify-content-between align-items-center text-center row gap-3 py-3 grid grid-cols-3">
                    {dataabout3.map((data, i) => {
                        return (
                            <div className="col-span-3 sm:col-span-1 trans-box-count h-full lg:flex p-4 bg-[#25252549] grid-cols-3 gap-2 justify-center items-center shadow-2xl"
                                key={i}>
                                <div className="col-span-1 p-2 align-items-center">
                                    <img src={data.logo_link} className="mx-auto aspect-square" alt="logo" width={70} />
                                </div>
                                <div className="col-span-2 text-center text-align-center my-auto">
                                    <a className="text" href={data.link} target="_blank" rel="noopener noreferrer">
                                        <CountUp end={data.data} className="text-3xl block font-bold" />
                                        <b>{data.title}</b>
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* <Row className="mb-5 bg-[#25252549] text-center align-items-center row px-2 py-3 gap-2">
                    <h3 className="color_sec py-2 font-bold text-xl">Github Contibution Graph</h3>
                    <img src="http://ghchart.rshah.org/ayush-saklani" />
                </Row> */}
                <Row className="mb-5 bg-[#25252549] text-center align-items-center row">
                    {/* <h3 className=" bg-[#25252549]  color_sec py-2 font-bold text-xl">Technologies I Use</h3> */}
                    {/* <div className="text-center justify-evenly px-2 py-3 grid grid-cols-12 gap-2">
                        {
                            Interests.map((data, i) => {
                                return (
                                    <div key={i} className="lg:col-span-1 md:col-span-2 col-span-3 p-2 m-1 text-center rounded-2xl shadow-2xl">
                                        <img src={data} height="80" alt="Logo" />
                                    </div>
                                );
                            })
                        }
                    </div> */}
                    <div className="px-2 py-3" style={{ height: '', position: 'relative', overflow: 'hidden' }}>
                        <LogoLoop
                            logos={Interests.map((src, i) => ({
                                src,
                                alt: `Interest ${i + 1}`
                            }))}
                            speed={50}
                            direction="left"
                            logoHeight={70}
                            gap={25}
                            pauseOnHover={false}
                            scaleOnHover={true}
                            fadeOut={true}
                            fadeOutColor="transparent"
                        />
                    </div>
                </Row>
            </Container>
        </HelmetProvider>
    );
};
