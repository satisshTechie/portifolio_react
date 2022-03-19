import React from "react";
import styled from "styled-components";
import CTA from "./CTA";
import Mine from "../Assets/my_img.png";
import HeaderSocial from "./headerSocial";

const Header = () => {
  return (
    <Wrapper>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Satish Pilla</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div>
          <img className="mine" src={Mine} alt="My_image" />
        </div>
        <Scroll href="#contact" className="scroll_down">
          Scroll Down
        </Scroll>
      </div>
    </Wrapper>
  );
};

export default Header;
const Wrapper = styled.div`
  height: 100vh;
  padding-top: 7rem;
  overflow: hidden;

  .header_container {
    text-align: center;
    height: 100%;
    position: relative;
  }

  .mine {
    background: (var(--primary-primary), transparent);
    width: 26rem;
    height: 40rem;
    position: absolute;
    left: calc(50% - 11rem);
    margin-top: 4rem;
    border-radius: 12rem 12rem 0 0;
    overflow: hidden;
    padding: 0rem 1.5rem 1.5rem 1.5rem;
  }

  /* Media Queries for large sized devices*/
  @media (max-width: 1024px) {
    height: 68vh;
  }
  /* Media Queries for Small sized devices*/
  @media (max-width: 600px) {
  }
`;

const Scroll = styled.a`
  position: absolute;
  right: -2.3rem;
  bottom: 5rem;
  transform: rotate(90deg);
  font-weight: 300;
  font-size: 0.9rem;
  /* Media Queries for Small sized devices*/
  @media (max-width: 600px) {
    display: none;
  }
`;
