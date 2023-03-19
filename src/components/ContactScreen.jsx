import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  height: 700px;
  widht: 1400px;
  background-color: black;
`;
const Text = styled.h2`
  color: white;
`;

const ContactScreen = () => {

  return <Container>
     <Text>
        Contact Me
     </Text>
  </Container>
}

export default ContactScreen;