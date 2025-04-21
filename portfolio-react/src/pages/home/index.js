import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import AnimatedName from "../../components/AnimatedName";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec align-items-center block lg:flex">
          <div
            className="h-[40vh] md:h-[60vh] lg:h-full lg:w-1/2 bg-cover bg-center order-1 mb-5"
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text h-100 lg:flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                {/* <h2 className="flex w-full text-highlight"><AnimatedName /></h2> */}
                <h2 className="text-xl md:text-3xl font-bold my-2 text-highlight">{introdata.title}</h2>
                <h2 className="text-xl md:text-3xl font-bold my-2 text-highlight">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h2>
                <p className="my-3 font-bold">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/resume" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Resume
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/about">
                    <div id="button_h" className="ac_btn btn">
                      About Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
