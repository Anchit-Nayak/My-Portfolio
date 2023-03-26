import React from "react";
import styled from "styled-components";
import ContactScreen from "./ContactScreen";

import { motion } from "framer-motion";


const Cont = styled.div`
  display: flex;
  justify-content:center;
  margin-top: 50px;
`;

const Section = styled.div`
  height: 110vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  margin-top: 120px;
  padding-top: 150px;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: center;

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

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Contact = () => {
  return (
    <Section id="Contact">
      <Container>
          <Cont>
          <Title>Let's Get In Touch</Title>
          </Cont>
          <motion.div initial={{opacity:0, y:100}} whileInView={{opacity:1,y:0}} transition={{delay:0.25, duration: 1}}>
          <Cont>
          <ContactScreen/>
          </Cont>
          </motion.div>
      </Container>
    </Section>
  );
};

export default Contact;