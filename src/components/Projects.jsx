import React from 'react'
import styled from 'styled-components';
import me from '../../public/img/me.png'

const Cards = styled.div`
  margin-top: 100px; 
  height: 70vh;
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 80px;
  allign-items: center;
`;

const Card = styled.div`
border: solid 2px black;
border-radius: 10px;
height: 450px;
width: 400px;
display:flex;
flex-direction: row;
justify-content: center;
allign-items: center;
color: black;
&:hover{
    box-shadow: 10px 10px 53px 0px rgba(0,0,0,0.49);
}
`;
const Icon = styled.div`
display:flex;
margin-right: 7px;
flex-direction: column;
`;

const Text = styled.h3`
   color: black;
   display:flex;
   margin-left: 7px;
flex-direction: column;
justify-content: center;
allign-items: center;
`;

export const Projects = () => {
  var list = [
    { 'no': '1','image': {me}, 'title': "Hello" , 'desc' : "My name is Anchit"},
    { 'no': '2','image': {me}, 'title': "Hello" , 'desc' : "My name is Anchit"},
    { 'no': '3','image': {me}, 'title': "Hello" , 'desc' : "My name is Anchit"},
    
  ]
  return (
    <Cards>
        {
          list.map((card, i) =>(
            <Card key={i}>
              <Icon>
                <image src={card.image}></image>
              </Icon>
              <Text>{card.title}</Text>
            </Card>
          ))
        }
    </Cards>
  )
}