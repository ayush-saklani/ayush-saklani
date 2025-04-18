import React from 'react';
import styled from 'styled-components';

const Project_Card = ({ information }) => {
  return (
    <StyledWrapper>
      <div className="flip-card w-full flex items-center justify-center lg:h-[40vh] h-[60vh]">
        <div className="flip-card-inner bg-[#171717]">
          <div className="flip-card-front px-3 align-middle flex flex-col justify-center items-center gap-2">
            <h4 className="py-1 text-highlight flex text-2xl font-extrabold uppercase">
              {information.link ?
                <a href={information.link} target="_blank" rel="noopener noreferrer">
                  {information.heading}
                </a> : information.heading
              }
            </h4>
            <div className="gap-1.5 flex flex-wrap">
              {information.tags.map((tag, i) => (
                <h6 key={i} className="bg-tag text-black text-center rounded-sm font-bold p-2">{tag}</h6>
              ))}
            </div>
            <div className="px-4 mx-2 py-2 flex flex-wrap gap-1.5 items-center justify-center">
              {information.technologies.map((technology, i) => (
                <img key={i} className="h-[65px] w-[65px]" src={technology} alt={technology} height={65} />
              ))}
            </div>
          </div>
          <div className="flip-card-back px-3 align-middle flex flex-col justify-center items-center gap-2">
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
