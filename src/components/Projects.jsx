import React from 'react'
import styled from 'styled-components';
import {FaGithub} from 'react-icons/fa';


const Cards = styled.div`
  margin-top: 100px; 
  height: 10vh;
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 80px;
  allign-items: center;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Content = styled.div`
  padding: 1.5rem;
  transform: translateY(23%);
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
height: 360px;
width: 420px;
overflow: hidden;
color: black;
background-image: url(../../public/img/portfolio.png);
background-size: cover;
transition: transform 500ms ease;
@media only screen and (max-width: 768px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
&:hover{
  transform: scale(1.05);
    box-shadow: 10px 10px 53px 0px rgba(0,0,0,0.49);
}
`;

const Card1 = styled.div`
border: solid 2px black;
border-radius: 10px;
height: 360px;
width: 420px;
overflow: hidden;
color: black;
background-image: url(../../public/img/Scribbble.png);
background-size: cover;
transition: transform 500ms ease;
&:hover{
  transform: scale(1.05);
    box-shadow: 10px 10px 53px 0px rgba(0,0,0,0.49);
    color:white;
}
`;
const Space = styled.div`
   padding-bottom: 5px;
   text-decoration: none;
   gap: 5px;
`;

const Text = styled.h1`
   color: inherit;
   margin-top: 12rem;
`;
const Para = styled.p`
   color: white;
`;

export const Projects = () => {
  var list = [
    { 'no': '1','image': '../../public/img/img.jpg', 'title': "Hello" , 'desc' : "My name is Anchit"},
    
  ]
  return (
    <Cards>
        {
          list.map((card, i) =>(
            <Card key={i}>
              <Content>
                <TextContainer>
                <Text>
                Portfolio Website
                 </Text>
                </TextContainer>
              <Space>
              <Para>
                Built using <strong>React</strong>, <strong>Styled Components</strong> and 3JS.
                The CI/CD Pipeline for it using <strong>Jenkins</strong>, <strong>AWS EC2</strong> and <strong>Docker</strong> on 
                <strong> AWS</strong> will be available soon. 
              </Para>
              </Space>
              <Space  as="a" href="https://github.com/Anchit-Nayak/My-Portfolio">
              <FaGithub size={30} color="white"/>
              </Space>
              </Content>
              
            </Card>

 
          ))}
          <Card1>
              <Content>
                <TextContainer>
                <Text>
                Scribbble- Blog Website
                 </Text>
                </TextContainer>
              <Space>
              <Para>
                Created using <strong>ReactJS</strong>, <strong>NodeJS</strong>, <strong>MySQL</strong>.
                Underprogress.
              </Para>
              </Space>
              <Space >
              <FaGithub size={30}/>
              </Space>
              </Content>
            </Card1> 
        
    </Cards>
  )
}