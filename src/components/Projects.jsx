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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Content = styled.div`
  padding: 1.5rem;
  transform: translateY(24%);
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
height: 350px;
width: 420px;
overflow: hidden;
color: black;
background-image: url(../../public/img/img.jpg);
background-size: cover;
transition: transform 500ms ease;
&:hover{
  transform: scale(1.05);
    box-shadow: 10px 10px 53px 0px rgba(0,0,0,0.49);
}
`;

const Card1 = styled.div`
border: solid 2px black;
border-radius: 10px;
height: 350px;
width: 420px;
overflow: hidden;
color: black;
background-image: url(https://miro.medium.com/v2/resize:fit:640/format:webp/1*HPkct3B9kU5RtscdT9I50w.png);
background-size: cover;
transition: transform 500ms ease;
&:hover{
  transform: scale(1.05);
    box-shadow: 10px 10px 53px 0px rgba(0,0,0,0.49);
    color:white;
}
`;
const Space = styled.div`
   padding-top: 2px;
   padding-bottom: 2px;
`;

const Text = styled.h1`
   color: inherit;
   margin-top: 12rem;

   
`;
const Para = styled.p`
   color: white;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: black;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: grey;
    color:white;
}
`;

export const Projects = () => {
  var list = [
    { 'no': '1','image': '../../public/img/img.jpg', 'title': "Hello" , 'desc' : "My name is Anchit"},
    { 'no': '2','image': '../../public/img/img.png', 'title': "Hello" , 'desc' : "My name is Anchit"},
    
  ]
  return (
    <Cards>
        {
          list.map((card, i) =>(
            <Card key={i}>
              <Content>
                <TextContainer>
                <Text>
                Pipeline using Jenkins
                 </Text>
                </TextContainer>
              <Space>
              <Para>
                amfanfanfnafn afimanfana  annai afnab ubagwm wnwngbw gwjnwb w ubwubw ngwhg w fwnuw gwngwg wnwuw 
              </Para>
              </Space>
              <Space>
              <FaGithub size={30}/>
              </Space>
              </Content>
              
            </Card>

 
          ))}
          <Card1>
              <Content>
                <TextContainer>
                <Text>
                Pipeline using Jenkins
                 </Text>
                </TextContainer>
              <Space>
              <Para>
                amfanfanfnafn afimanfana  annai afnab ubagwm wnwngbw gwjnwb w ubwubw ngwhg w fwnuw gwngwg wnwuw 
              </Para>
              </Space>
              <Space>
              <FaGithub size={30}/>
              </Space>
              </Content>
            </Card1> 
        
    </Cards>
  )
}