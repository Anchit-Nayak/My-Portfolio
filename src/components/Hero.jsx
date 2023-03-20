import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { TypeWriter } from "./Typewriter";
import {FaGithub} from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";

const A = styled.a`
size: 30px;
margin-right: 30px;
text-decoration: none;

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
  justify-content: space-between;

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
  font-size: 60px;
  color: black;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Subtitle = styled.h2`
  color: 	#44475a;
`;

const Desc = styled.p`
  font-size: 24px;
  color: black;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
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

const Contain = styled.div`
object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: 400px;
  margin-left: 320px;
  
`;

const Hero = () => {
  return (
    <Section id="Hero">
      <Navbar />
      <Container>
        <Left>
          <Title>Hi There,</Title>
          <Title>I am Anchit</Title>
          <WhatWeDo>
            <Subtitle>DevOps Enthusiast</Subtitle>
          </WhatWeDo>
          <Desc>
I am a passionate and innovative DevOps Engineer and a Web Developer. I am always searching for the latest tools and methodologies. My mission is to make bad processes better through automation, testing, and education. 
          </Desc>
          <div>
            <A href="https://github.com/Anchit-Nayak">
          <FaGithub size={30}/>
          </A >
          <A href="https://www.linkedin.com/in/anchit-nayak-4944a522a/">
            
          <FaLinkedin size={30}/>
        
          </A>
          </div> 
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#161616"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
                
              </Sphere>
              
            </Suspense>
            
          </Canvas>
         <Contain>
          <TypeWriter/>
         </Contain>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
