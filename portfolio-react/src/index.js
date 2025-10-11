import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app/App';
import './index.css';
import SplashCursor from './effects/SplashCursor';
import Particles from './effects/Particles';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <div className='relative overflow-hidden z-[-1]'>
            <SplashCursor />
        </div>
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
        <div className='h-screen w-screen absolute top-0 left-0 z-[-2] bg-black'
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                objectFit: "cover",
            }}
        >
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={400}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={false}
                alphaParticles={false}
                disableRotation={false}
            />
        </div>
        <App />
    </>
);
