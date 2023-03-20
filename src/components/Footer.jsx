import React from "react";
import styled from "styled-components";


const Title = styled.h1`
  font-size: 30px;
  color: white;
  font-weight: 900;
  text-decoration: none;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Bold= styled.b`
  text-decoration: none;
  color: white;
  font-weight: bold;
`;

const Section = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  padding:15px;
  background-color: #161616;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;


const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Para= styled.p`
  color: lightgray;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Title as="a" href="#Hero">
            AN.
          </Title>
        </Links>
        <Icons>
        <Para>Built and Deployed by <Bold as="a" href="href='https://github.com/Anchit-Nayak'">Anchit Nayak</Bold> .</Para>
        </Icons>
      </Container>
    </Section>
  );
};

export default Footer;