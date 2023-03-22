import React from "react";
import styled from "styled-components";
import Pdf from "../img/Anchit_Resume.pdf";

const Title = styled.h1`
  font-size: 30px;
  color: black;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: center;

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

const List = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;

  }
`;

const ListItem = styled.li`
  cursor: pointer;
  color: black;
  text-decoration: none;
  transition: transform 100ms ease;
  &:hover {
   color: grey;
  transform: scale(1.2);
  
}
`;

const Icons = styled.div`
  width: 100px;
  border-radius: 10px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 20px;
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
}
`;
const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Title>
            AN.
          </Title>
          
          <List>          
             <ListItem as="a" href="#Who">About</ListItem>
             <ListItem as="a" href="#Skills">Skills</ListItem>
             <ListItem as="a" href="#Works">Projects</ListItem>
             <ListItem as="a" href="#Contact">Contact</ListItem>
          </List>
        </Links>
        <Icons>
        <Button as="a" href = {Pdf} target = "_blank">Resume</Button>  
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
