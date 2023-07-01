import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Projects } from "./Projects";

const Cont = styled.div`
  display: flex;
  justify-content:center;
  @media only screen and (max-width: 900px) {
    align-items: center;
  }
`;

const Section = styled.div`
  height: 70vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 900px) {
    height: 120vh;
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

  @media only screen and (max-width: 900px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Dis = styled.div`
   display: none;
   @media only screen and (max-width: 900px) {
    padding-top: 3px;
    display: block;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  color: #161616;
  text-allign: center;

  @media only screen and (max-width: 900px) {
    font-size: 40px;
  }
`;


const Works = () => {
  return (
    <Section id="Works">
      <Container>
          <Cont>
          <Title>My Projects</Title>
          </Cont>
          <Dis><h3>(Tap on the project to know more)</h3></Dis>
          <Cont>
            <motion.div initial={{opacity:0, x:300}} whileInView={{opacity:1, x:0}} transition={{delay:0.25, bounce:0.3, type: 'spring'}} >
            <Projects/>
            </motion.div>
          
          </Cont>
          
          
      </Container>
    </Section>
  );
};

export default Works;