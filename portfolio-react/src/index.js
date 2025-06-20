import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app/App';
import './index.css';
// import Hyperspeed from './effects/Hyperspeed';
import SplashCursor from './effects/SplashCursor';
import Particles from './effects/Particles';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <div className='relative overflow-hidden z-[-1]'>
            <SplashCursor />
        </div>
        {/* Uncomment the Hyperspeed effect below if you want to use it */}
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
            {/* <Hyperspeed
                effectOptions={{
                    onSpeedUp: () => { },
                    onSlowDown: () => { },
                    distortion: 'turbulentDistortion',
                    length: 400,
                    roadWidth: 10,
                    islandWidth: 2,
                    lanesPerRoad: 4,
                    fov: 90,
                    fovSpeedUp: 150,
                    speedUp: 2,
                    carLightsFade: 0.4,
                    totalSideLightSticks: 20,
                    lightPairsPerRoadWay: 40,
                    shoulderLinesWidthPercentage: 0.05,
                    brokenLinesWidthPercentage: 0.1,
                    brokenLinesLengthPercentage: 0.5,
                    lightStickWidth: [0.12, 0.5],
                    lightStickHeight: [1.3, 1.7],
                    movingAwaySpeed: [60, 80],
                    movingCloserSpeed: [-120, -160],
                    carLightsLength: [400 * 0.03, 400 * 0.2],
                    carLightsRadius: [0.05, 0.14],
                    carWidthPercentage: [0.3, 0.5],
                    carShiftX: [-0.8, 0.8],
                    carFloorSeparation: [0, 5],
                    colors: {
                        roadColor: 0x080808,
                        islandColor: 0x0a0a0a,
                        background: 0x000000,
                        shoulderLines: 0xFFFFFF,
                        brokenLines: 0xFFFFFF,
                        leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                        rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                        sticks: 0x03B3C3,
                    }
                }}
            /> */}
        </div>
        <App />
    </>
);
