import React from "react";
import styled from "styled-components";
import { Projects } from "./Projects";

const Cont = styled.div`
  display: flex;
  justify-content:center;
`;

const Section = styled.div`
  margin-top: 200px; 
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Center = styled.div`
  display: flex;
  allign-items: center;
  flex-direction: column; 
`;


const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: center;
  allign-items: center;
  flex-direction: column; 

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  color: #161616;
  text-allign: center;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;
const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;


const Works = () => {
  return (
    <Section id="Works">
      <Container>
          <Cont>
          <Title>My Projects</Title>
          </Cont>
          <Cont>
          <Projects/>
          </Cont>
          
          
      </Container>
    </Section>
  );
};

export default Works;