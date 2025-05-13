import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, useLocation, } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../components/header";
import AnimatedCursor from "../hooks/AnimatedCursor";
import "./App.css";
import video from "../assets/images/stars-motion-loop-background.mp4";
import AnimatedNameLoader from "../components/AnimatedNameLoader";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // set speed to 0.5x
    }
  }, []);

  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      {/* black layer and star video below */}
      <video ref={videoRef} src={video} autoPlay muted loop id="bg-video" className="bg-video" preload="auto"
        onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          minWidth: "100%",
          minHeight: "100vh",
          objectFit: "cover",
          zIndex: -2,
        }}
      />
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "#0000009a", // adjust 0.4 for opacity
          zIndex: -1,
        }}
      ></div>
      {
        loading &&
        <div className="fixed inset-0 w-full h-screen bg-[#000000b6] backdrop-blur-xl flex items-center justify-center z-[9999]">
          <div className="text-center text-5xl md:text-8xl font-extrabold text-highlight">
            <AnimatedNameLoader />
          </div>
        </div>
      }
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
