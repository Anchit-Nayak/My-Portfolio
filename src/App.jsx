import styled from "styled-components";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Skills } from "./components/Skills";
import Who from "./components/Who";


import Works from "./components/Works";


const Container = styled.div`
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  height: 100vh;
  width: 100vw;
  scroll-behavior: smooth;
  user-select: none;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;
  color: black;
  background: #ffffff;
  text-rendering: optimizelegibility;
  &::-webkit-scrollbar{
    display: none;
  }
  

`;

function App() {
  return (
    <Container>
      
      <Hero />
      <Who />
      <Skills/>
      <Works />
      <Contact />
      <Footer/>
    </Container>
  );
}

export default App;
