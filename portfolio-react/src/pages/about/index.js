import React from "react";
import "./style.css";
import CountUp from 'react-countup';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
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
                <Row className="my-3 pt-md-3">
                    <Col lg="12">
                        <h1 className="display-4 mb-4">About me</h1>
                        <hr className="my-4 ml-0 text-left" />
                    </Col>
                </Row>
                <Row className="mb-5 bg-grey py-2" >
                    <img src={images.my_photo} className="col-xl-4 col-lg-7 py-2" style={{ objectFit: "contain" }} alt="Me"/>
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
                <div class="mb-5 justify-content-between align-items-center text-center px-2 row">
                    {dataabout3.map((data, i) => {
                        return (
                            <div className="col-lg-4 col-md-4 col-sm-4 trans-box-count row p-4 bg-grey" key={i}>
                                <div className="col-lg-4 p-3 align-items-center">
                                    <img src={data.logo_link} className="mx-auto aspect-square" alt="logo" width={70} />
                                </div>
                                <div className="col-lg-8 text-center text-align-center my-auto">
                                    <CountUp end={data.data} className="text-3xl block font-bold" />
                                    <a className="text" href={data.link} target="_blank" rel="noopener noreferrer"><b>{data.title}</b></a>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Row className="mb-5 bg-grey text-center align-items-center row px-2 py-3">
                    {/* <h3 className="color_sec py-2">Coding Skills &amp; Interests</h3> */}
                    {
                        Interests.map((data, i) => {
                            return (
                                <div key={i} className="col-lg-1 col-md-2 col-sm-3 col-2 col-4 p-2 my-auto">
                                    <img src={data} height="80" alt="Logo"/>
                                </div>
                            );
                        })
                    }
                </Row>
            </Container>
        </HelmetProvider>
    );
};
