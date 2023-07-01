import React from 'react'
import styled from 'styled-components';
import me from "../../public/img/me.png"
import {RxTwitterLogo} from "react-icons/rx";
import {FaLinkedin} from "react-icons/fa"
import {VscGithub} from "react-icons/vsc";
import {FiMail} from "react-icons/fi"
import Pdf from "../img/Anchit_Resume.pdf";
import { motion } from 'framer-motion';
const Container = styled.div`
  width: 75vw;
  height: 50vh;
  border: 2px solid black;
  max-width: 1020px;
  background-color: #161616;
  overflow:hidden;
  border-radius: 10px;
  box-shadow: 0 0 20px 1px rgba(0,0,0,0.1);
  z-index: 1000;
  @media only screen and (max-width: 700px) {
    margin-bottom: 100px;
    width: 95vw;
    height: 75vh;   
  }
  
`;
const Text = styled.h2`
  color: black;
  font-size: 40px;
  margin-bottom: 20px;
`;

const Img = styled.img`
border-radius: 50%;
border: 1px solid black;
background-color: lightgray;
  width: 200px;
  height: 200px;
  object-fit: contain;
  // box-shadow: 5px 5px 5px 5px rgba(243, 241, 239);, 1;
  margin-bottom: 15px;
  z-index: 1000;

`;

const Title = styled.h2`
  color: white;
`;

const Form = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2 , 1fr);
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 430px;
  }
`;

const ContactForm = styled.div`
background-color: white;
   
   position: relative;
   display: flex;
   flex-direction: column;
   place-items: center;
   justify-content: center;
   @media only screen and (max-width: 768px) {
    height: 100%;
    padding-top: 50px;
    padding-bottom: 90px;
    overflow: hidden;
    padding-right: 25px;
  }
`;
const Desc = styled.p`
place-items: center;
padding-top: 5px;
display: flex;
justify-content: center;
width: 300px;
   color: white;
   display: flex;
   allign-items: center;
`;

const ContactInfo = styled.div`
   place-items: center;
   background-color: black;
   display: flex;
   flex-direction: column;
   justify-content: center;
   allign-items: center;
   @media only screen and (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 30px;
    padding-right: 30px;
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  allign-content: center;
`;

const Logo = styled.div`
  margin: 5px;
  margin-right: 10px;
  transition: transform 500ms ease;
  text-decoration: none;
  &:hover{
    transform: scale(1.25);
  }
`;



const Button = styled.button`
display: flex;
allign-items: center;
justify-content: center;
  font-size: 14px;
  width: 100px;
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform .2s;
  text-decoration: none;
  &:hover {
    background-color: grey;
    color:white;
    transform: scale(1.1);
`;


const ContactScreen = () => {

  return <Container>
    <Form>
      <ContactInfo>
         <Img src={me}></Img>
         <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.2}}>
        <Title>Anchit Nayak</Title>
        </motion.div>

        <motion.div initial={{opacity:0, y: 100}} whileInView={{opacity:1, y:0}} transition={{delay:0.2}}>
        <Desc>Feel free to reach out to me at any time,</Desc> <Desc>I am always interested in new stuff!</Desc>
        </motion.div>
        

      </ContactInfo>
      <ContactForm>

          <Text>Contact Me</Text>
          <InputContainer>
          <Logo as="a" href="https://github.com/Anchit-Nayak">
            <VscGithub color="black"  size={50}/>
          </Logo>

          <Logo as="a" href="https://twitter.com/AnchitNayak">
          <RxTwitterLogo color="black" size={50}/>
          </Logo>
          <Logo as="a" href="https://www.linkedin.com/in/anchit-nayak/">
          <FaLinkedin  color="black" size={50}/>
          </Logo>
          <Logo as='a' href="mailto: anchitnayak00@gmail.com">
            <FiMail color="black"  size={50}/>
          </Logo>
          
          </InputContainer>
          <Button as="a" href = {Pdf} target = "_blank">Resume</Button> 
          

      </ContactForm>
    </Form>
     
  </Container>
}

export default ContactScreen;