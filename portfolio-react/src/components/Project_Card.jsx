import React from 'react';
import styled from 'styled-components';
import { MdOutlineSwipeRight, MdOutlineSwipeVertical, MdSwipeRight, MdSwipeUp } from "react-icons/md";
import { FaExternalLinkAlt } from 'react-icons/fa';
import { TbHandClick } from "react-icons/tb";
import { GiClick } from "react-icons/gi";
import { FaGithub } from 'react-icons/fa6';

const Project_Card = ({ information }) => {
  return (
    <StyledWrapper>
      <div className="flip-card w-full flex items-center justify-center lg:h-[40vh] h-[50vh]">
        <div className="flip-card-inner bg-gradient-to-tr from-[#17171791] to-[#25252593] rounded-lg shadow-lg flex flex-col justify-center items-center gap-2">
          <div className="flip-card-front px-3 align-middle flex flex-col justify-center items-center gap-2"
            style={{
              backgroundImage: `url(${information.image[0]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute inset-0 bg-[#000000d7]"></div>
            <div className="absolute top-2 right-2 text-white text-xl">
              <GiClick size={22} />
            </div>
            <div className="relative z-10 flex flex-col justify-center items-center gap-2">
              <h4 className="py-1 text-highlight flex text-xl md:text-2xl font-extrabold uppercase">
                {information.heading}
              </h4>
              <div className="gap-1.5 flex flex-wrap">
                {information.tags.map((tag, i) => (
                  <h6 key={i} className="bg-tag text-black text-center rounded-sm font-bold p-2">{tag}</h6>
                ))}
              </div>
              <div className="px-4 mx-2 py-2 flex flex-wrap gap-1.5 items-center justify-center">
                {information.technologies.map((technology, i) => (
                  <img key={i} className="h-[50px]" src={technology} alt={technology} height={65} />
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${information.image[1]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            className="flip-card-back px-3 align-middle flex flex-col justify-center items-center gap-2">
            <div className="absolute inset-0 bg-[#000000e2]"></div>
            <div className='absolute top-3 right-3 text-white text-xl flex gap-2 items-center'>
              {
                information.link &&
                <a href={information.link} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={22} />
                </a>
              }
              {
                information.hosted_link &&
                <a href={information.hosted_link} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt size={20} />
                </a>
              }
            </div>

            <div className="relative z-10 flex flex-col justify-center items-center gap-2">
              {
                information.description &&
                <div className="px-2 text-left py-2 flex flex-col gap-1">
                  {information.description.map((description, i) => (
                    <li key={i} className="mb-1 text-base font-medium">{description}</li>
                  ))}
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .flip-card {
    background-color: transparent;
    perspective: 1000px;
    color: white;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  .flip-card:hover .flip-card-front {
    pointer-events: none; // Prevent hover on front side
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 2px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset;
  }

  .flip-card-back {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 2px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset;
    background-color: #171717;
    transform: rotateY(180deg);
  }`;

export default Project_Card;
