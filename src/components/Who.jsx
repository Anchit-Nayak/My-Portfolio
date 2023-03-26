import React from "react";
import styled from "styled-components";
import me from "../../public/img/me.png"
import { delay, motion } from "framer-motion";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    height:80vh;
  }
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 1;
  
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
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
    margin-top: 50px;
    flex: 1;
    width: 100%;
  }
`;

const Desc = styled.p`
  font-size: 24px;
  color: #161616;
`;
const Img = styled.img`
  width: 500px;
  height: 600px;
  object-fit: contain;
  margin-top: 100px;
  margin-left: 50px;

`;

const Who = () => {
  return (
    <Section id="Who">
      <Container>
        <Left>
          <motion.div
          initial={{opacity:0, y:100}} whileInView={{opacity:1,y:0}} transition={{delay:0.25, duration: 1,bounce:0.3, type: 'spring'}}
          >
          <Img src={me}></Img>
          </motion.div>
        </Left>

        <Right>
          <Title>About Me</Title>
          <Desc>
            Second year IT engineering undergrad at University Of Mumbai. 
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
