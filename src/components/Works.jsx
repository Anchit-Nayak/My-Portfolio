import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Projects } from "./Projects";

const Cont = styled.div`
  display: flex;
  justify-content:center;
  @media only screen and (max-width: 768px) {
    align-items: center;
  }
`;

const Section = styled.div`
  margin-top: 60px; 
  height: 70vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 100vh;
  }
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

const Title = styled.h1`
  font-size: 74px;
  color: #161616;
  text-allign: center;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
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
            <motion.div initial={{opacity:0, x:200}} whileInView={{opacity:1, x:0}} transition={{delay:0.25, bounce:0.3, type: 'spring'}} >
            <Projects/>
            </motion.div>
          
          </Cont>
          
          
      </Container>
    </Section>
  );
};

export default Works;