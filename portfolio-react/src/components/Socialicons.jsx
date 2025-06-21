import React from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { socialprofils } from "../content_option";
import styled from 'styled-components';

export const Socialicons = (params) => {
  return (
    <StyledWrapper>
      <div className="stick_follow_icon">
        <ul>
          {socialprofils.twitter && (
            <li>
              <a href={socialprofils.twitter} target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
            </li>
          )}
          {socialprofils.github && (
            <li>
              <a href={socialprofils.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </li>
          )}
          {socialprofils.linkedin && (
            <li>
              <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </li>
          )}
          {socialprofils.youtube && (
            <li>
              <a href={socialprofils.youtube} target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </li>
          )}
          {socialprofils.instagram && (
            <li>
              <a href={socialprofils.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </li>
          )}
        </ul>
        <p>Follow Me</p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
.stick_follow_icon {
    top: 50%;
    left: 30px;
    width: 20px;
    height: 200px;
    position: fixed;
    margin-top: -100px;
}

.stick_follow_icon ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.stick_follow_icon svg {
    width: 1.3em;
    height: 1.3em;
    fill: var(--text-color);
}

.stick_follow_icon p {
    top: 70px;
    left: -24px;
    width: 68px;
    height: 20px;
    color: var(--text-color);
    font-size: 12px;
    font-weight: 600;
    line-height: 1.2;
    white-space: nowrap;
    position: relative;
    transform: rotate(-90deg);
}

.stick_follow_icon ul li {
    display: block;
    font-size: 12px;
    text-align: center;
    margin-bottom: 10px;
    transition: all .3s;
}

.stick_follow_icon p:after {
    top: 9px;
    right: -48px;
    width: 40px;
    height: 1px;
    content: "";
    display: block;
    position: absolute;
    background-color: var(--text-color);
}

@media only screen and (max-width: 1400px) {
    .stick_follow_icon {
        width: unset;
        height: unset;
        position: static;
        margin-top: unset;
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        padding: 40px 0;
        align-items: center;
    }

    .stick_follow_icon p {
        top: unset;
        left: unset;
        width: unset;
        height: unset;
        white-space: nowrap;
        position: relative;
        transform: unset;
        font-size: 17px;
        margin-right: 65px;
    }

    .stick_follow_icon ul {
        margin-top: auto;
        margin-bottom: auto;
        display: flex;
    }

    .stick_follow_icon ul li {
        margin-top: auto;
        margin-bottom: auto;
        margin-right: 10px;
    }
}
`;
