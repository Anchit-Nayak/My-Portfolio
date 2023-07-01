import React, { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { TypeWriter } from "./Typewriter";
import {FaGithub} from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import {motion } from "framer-motion";
import {RxTwitterLogo} from "react-icons/rx";

const A = styled.a`
size: 30px;
margin-right: 10px;

`;
const Logo = styled.div`
  margin-right: 10px;
  transition: transform 500ms ease;
  text-decoration: none;
  &:hover{
    transform: scale(1.25);
  }
`;
const Div = styled.div`
transition: transform 500ms ease;
width: 40px;
  content-decoration: none;
  margin-right: 30px;
  &:hover{
    transform: scale(1.25);
  }
`;

const Section = styled.div`
  margin-bottom: 100px;
  height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 900px) {
    height: 110vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 80vw;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 900px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100vw;
  @media only screen and (max-width: 900px) {
    flex: 1;
    height: 50vh;
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  color: black;

  @media only screen and (max-width: 900px) {
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

const Right = styled.div`
  flex: 1;
  position: relative;
  width: 100vw;
  @media only screen and (max-width: 900px) {
    height: 1vh;
  }
`;

const Contain = styled.div`
  object-fit: contain;
  position: absolute;
  height: 70px;
  width: 200px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: 40vh;
  margin-left: 12vw;
  @media only screen and (max-width: 900px) {
    margin-top: 25vh;
    font-size: 10px;
    margin-left: 40vw;

  }
  
`;
const Cont = styled.div`
 display: flex;
 margin-left: 8px;

 @media only screen and (max-width: 900px) {
  allign-items: center;
}
`;

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <Section id="Hero">
      <Navbar />
      <Container>
        <Left>
          <motion.div
          initial={{opacity:0, y:24}} animate={animate ? { opacity: 1, y: 0 } : {}} transition={{delay:2.5}}
          >
          <Title>Hi There,</Title>
          <Title>I am <motion.span>Anchit Nayak</motion.span></Title>
          </motion.div>
          <WhatWeDo>
            <Subtitle><motion.span  initial={{opacity:0, y:24}} animate={animate ? { opacity: 1, y: 0 } : {}} transition={{delay:2.9}}>DevOps & Cloud Native Enthusiast</motion.span></Subtitle>
          </WhatWeDo>
          <motion.span  initial={{opacity:0, y:24}} animate={animate ? { opacity: 1, y: 0 } : {}} transition={{delay:3.4}}>
          <Cont>
          
            <Div>
            <A href="https://github.com/Anchit-Nayak">
          <FaGithub color="black" size={40}/>
          </A >
          </Div>
          <Div>
          <Logo as="a" href="https://twitter.com/AnchitNayak">
          <RxTwitterLogo color="black" size={45}/>
          </Logo>
          </Div>
            <Div>
            <A href="https://www.linkedin.com/in/anchit-nayak/">
            <FaLinkedin color="black" size={40}/>
        
             </A>
            </Div>   
            
          </Cont> 
          </motion.span>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.0}>
                <MeshDistortMaterial
                  color="#161616"
                  attach="material"
                  distort={0.5}
                  speed={5}
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
