import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import styled from 'styled-components'


const Container = styled.div`
@media only screen and (max-width: 480px) {
  width: 100%;
}
`;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Container>
    
    <App />
    </Container>
    
  </React.StrictMode>,
)
