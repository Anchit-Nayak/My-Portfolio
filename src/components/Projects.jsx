import React from 'react'
import styled from 'styled-components';
import {FaGithub} from 'react-icons/fa';


const Cards = styled.div`
  margin-top: 100px; 
  height: 10vh;
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 80px;
  allign-items: center;
  @media only screen and (max-width: 768px) {
    margin-top: 50px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    height: 150vh;
    width: 90%;
    
  }
`;
const Content = styled.div`
  padding: 1.5rem;
  transform: translateY(28%);
  transition: transform 500ms ease;
  &:hover{
    background: linear-gradient(hsl(0 0% 0% / 0), hsl(0 0% 0% / 1));
    transform: translateY(0);
    color: white;
  }
`;
const TextContainer = styled.div`

`;

const Card = styled.div`
border: solid 2px black;
border-radius: 10px;
height: 37vh;
width: 25vw;
overflow: hidden;
color: black;
background-image: url(../../public/img/portfolio.png);
background-size: cover;
transition: transform 500ms ease;
@media only screen and (max-width: 768px) {
  height: 42vh;
  width: 85vw;
  display: flex;
  flex-direction: column;
}
&:hover{
  transform: scale(1.05);
    box-shadow: 10px 10px 53px 0px rgba(0,0,0,0.49);
}
`;

const Card1 = styled.div`
border: solid 2px black;
border-radius: 10px;
height: 37vh;
width: 25vw;
overflow: hidden;
color: black;
background-image: url(../../public/img/project1.jpg);
background-size: cover;
transition: transform 500ms ease;
@media only screen and (max-width: 768px) {
  height: 42vh;
  width: 85vw;
  display: flex;
  flex-direction: column;
}
&:hover{
  transform: scale(1.05);
    box-shadow: 10px 10px 53px 0px rgba(0,0,0,0.49);
}
`;
const Space = styled.div`
   padding-bottom: 5px;
   text-decoration: none;
   gap: 5px;
`;

const Text = styled.h1`
   font-size: 25px;
   color: inherit;
   font-weight:900 ;
   margin-top: 12rem;
`;
const Para = styled.p`
   color: white;
`;

export const Projects = () => {
  
  return (
    <Cards>
      <Card1>
              <Content>
                <TextContainer>
                <Text>
                Automated Deployments
                 </Text>
                </TextContainer>
              <Space>
              <Para>
              Implemented a CI/CD pipeline with <strong>Jenkins</strong>, deploying a simple <strong>Node.js</strong> to-do app on <strong>AWS EC2 </strong>instances using <strong>Docker</strong> containers.
              </Para>
              </Space>
              <Space >
              <FaGithub size={30}/>
              </Space>
              </Content>
            </Card1> 
        
          
            <Card >
              <Content>
                <TextContainer>
                <Text>
                Portfolio Website
                 </Text>
                </TextContainer>
              <Space>
              <Para>
              Built and Deployed my portfolio website using <strong>ReactJS</strong> with <strong>Styled Components</strong> and 3JS on <strong>AWS S3</strong> using <strong>GitHub Actions</strong>. (later hosted on github) 
              </Para>
              </Space>
              <Space  as="a" href="https://github.com/Anchit-Nayak/My-Portfolio">
              <FaGithub size={30} color="white"/>
              </Space>
              </Content>
              
            </Card>
            <Card>
            <Content>
                <TextContainer>
                <Text>
                Automated Deployments
                 </Text>
                </TextContainer>
              <Space>
              <Para>
              Implemented a CI/CD pipeline with <strong>Jenkins</strong>, deploying a simple <strong>Node.js</strong> to-do app on <strong>AWS EC2 </strong>instances using <strong>Docker</strong> containers.
              </Para>
              </Space>
              <Space >
              <FaGithub size={30}/>
              </Space>
              </Content>

            </Card>

          
        
    </Cards>
  )
}