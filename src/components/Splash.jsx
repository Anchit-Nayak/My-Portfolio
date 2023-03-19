import React from 'react'
import styled from 'styled-components'


const Render = styled.div`
   position: fixed;
   z-index: 1;
   left: 0;
   top: 0;
   width: 100%;
   height: 100vh;
   background-color: black;
   transition: 1s;
`;

const Text = styled.h1`
   position: absolute;
   top: 40%;
   left: 50%;
   transform: translate(-50%, -50%);
   color: #ffffff;
   bottom: -20px;
   opacity: 0;
   &:active{
    bottom: 0px;
    opacity: 1;
    transition: ease-in-out 0.5s;
   }
   &:fade{
    bottom: 150px;
    opacity: 0;
    transition: ease-in-out 0.5s;
   }
`;

export const Splash = () => {
  return (

    <Render>
      <Text>
        AN.
      </Text>     
    </Render>
    
    
    
  )
}
