import React from 'react'
import styled from 'styled-components';
import me from "../../public/img/me.png"
import {RxTwitterLogo} from "react-icons/rx";
import {FaLinkedin} from "react-icons/fa"
import {VscGithub} from "react-icons/vsc";
import {FiMail} from "react-icons/fi"

const Container = styled.div`
  border: 2px solid black;
  width: 100%;
  max-width: 1020px;
  height: 550px;
  background-color: #161616;
  overflow:hidden;
  border-radius: 10px;
  box-shadow: 0 0 20px 1px rgba(0,0,0,0.1);
  z-index: 1000;
  
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
  box-shadow: 10px 10px 20px 0px rgba(0,0,0,0.49);
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
  

`;

const ContactForm = styled.div`
background-color: white;
   
   position: relative;
   display: flex;
   flex-direction: column;
   place-items: center;
   justify-content: center;

  }
`;
const Desc = styled.p`
place-items: center;
padding-top: 5px;
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

const ContactScreen = () => {

  return <Container>
    <Form>
      <ContactInfo>
         <Img src={me}></Img>
        <Title>Anchit Nayak</Title>
        <Desc>Feel free to reach out to me at any time,</Desc> <Desc>I am always interested in new stuff!</Desc>

      </ContactInfo>
      <ContactForm>

          <Text>Contact Me</Text>
          <InputContainer>
          <Logo as="a" href="https://github.com/Anchit-Nayak">
            <VscGithub size={50}/>
          </Logo>

          <Logo>
          <RxTwitterLogo size={50}/>
          </Logo>
          <Logo as="a" href="https://www.linkedin.com/in/anchit-nayak/">
          <FaLinkedin size={50}/>
          </Logo>
          <Logo as='a' href="mailto: anchitnayak00@gmail.com">
            <FiMail size={50}/>
          </Logo>
          
          
          
          </InputContainer>

      </ContactForm>
    </Form>
     
  </Container>
}

export default ContactScreen;