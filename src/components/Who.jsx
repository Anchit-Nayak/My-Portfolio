import React from "react";
import styled from "styled-components";
import me from "../../public/img/me.png"


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  color: black;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: #161616;
`;
const Img = styled.img`
  width: 500px;
  height: 600px;
  object-fit: contain;
  margin-top: 150px;
  margin-right: 30px;

`;

const Who = () => {
  return (
    <Section id="Who">
      <Container>
        <Left>
          <Img src={me}></Img>
        </Left>

        <Right>
          <Title>About Me</Title>
          <WhatWeDo>
            
            <Subtitle></Subtitle>
          </WhatWeDo>
          <Desc>
            Second year IT engineering undergrad student at University Of Mumbai. 
          Believing in the data-driven culture,an aspiring Cloud Architect and Developer skilled in Microsoft Azure with Exceptional knowledge of DevOps(different DevOps tools like Docker, Kubernetes, Jenkins, Terraform and Prometheus ). 
I believe in continuous learning & eager to experiment with new technologies.
Having an adaptive personality along with the motivation to excel in the field of DevOps and SRE.
          </Desc>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
