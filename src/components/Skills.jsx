import React from "react";
import styled from "styled-components";
import { SkillCard } from "./SkillCard";



const Section = styled.div`
  margin-top: 100px;
  height: 60vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  @media only screen and (max-width: 768px) {
    height: 220vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center; 
  width: 80vw;

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  color: #161616;

  @media only screen and (max-width: 900px) {
    margin-top: 20px; 
    font-size: 40px;
  }
`;

export const Skills = () => {
  return (
    <Section id="Skills">
        <Container>
          
            <Title>Skills & Interests</Title>
          
            <SkillCard/>
          
        </Container>
    </Section>
  )
}
