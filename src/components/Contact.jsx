import React from "react";
import styled from "styled-components";
import ContactScreen from "./ContactScreen";

const Center = styled.div`
  display: flex;
  justify-content: center;
  allign-items: center;
  
`;

const Cont = styled.div`
  display: flex;
  justify-content:center;
  margin-top: 50px;
`;

const Section = styled.div`
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

const Container = styled.div`
  height: 100%;
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

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;


const Contact = () => {
  return (
    <Section id="Contact">
      <Container>
          <Cont>
          <Title>Get In Touch</Title>
          </Cont>
          <Cont>
          <ContactScreen/>
          </Cont>
      </Container>
    </Section>
  );
};

export default Contact;
