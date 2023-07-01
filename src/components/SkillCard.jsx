import React from 'react'
import {SiKubernetes, SiDocker, SiJenkins, SiTerraform, SiMicrosoftazure, SiAnsible, SiAmazonaws, SiReact, SiPrometheus
,SiGrafana, SiApachemaven, SiLinux, SiGnubash, SiHelm, SiPython, SiFluentd} from "react-icons/si";
import {FaTools} from "react-icons/fa";
import styled from 'styled-components';

const Container= styled.div`
width: 80vw;
display: flex;
allign-items: center;
justify-content: center;
`;

const Cards = styled.div`
  margin-top: 100px; 
  height: 30vh;
  display: grid;
  grid-template-columns: repeat(3, 7fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  @media only screen and (max-width: 768px) {
    margin-top: 50px;
    display: grid;
  grid-template-columns: repeat(1, 1fr);
  }
`;

const Text = styled.h3`
   color: black;
   display:flex;
   margin-left: 7px;
flex-direction: column;
justify-content: center;
allign-items: center;
`;

const Card = styled.div`
border: solid 2px black;
border-radius: 10px;
height: 50px;
width: 300px;
display:flex;
flex-direction: row;
justify-content: center;
allign-items: center;
color: black;
@media only screen and (max-width: 900px) {
    margin-bottom: 10px;
  }
`;
const Icon = styled.div`
display:flex;
margin-right: 7px;
flex-direction: column;
justify-content: center;
allign-items: center;

`;

export const SkillCard = () => {

    const skill = [
        {   'no': '1',
            'icon': <SiKubernetes size={40}/>,
            'topic': "Kubernetes"
        },
        {   
            'no': '2',
            'icon': <SiDocker size={40}/>,
            'topic': "Docker"
        },
        {   
            'no': '3',
            'icon': <SiJenkins size={40}/>,
            'topic': "Jenkins"
        },
        {
            'no': '4',
            'icon': <SiTerraform size={40}/>,
            'topic': "Terraform"
        },
        {   'no': '5', 
            'icon': <SiMicrosoftazure size={40}/>,
            'topic': "Cloud Computing"
        },
        {'no': '6',
            'icon': <SiAnsible size={40}/>,
            'topic': "Ansible"
        },
        {'no': '7',
            'icon': <FaTools size={40}/>,
            'topic': "Automation"
        },
        {'no': '8',
            'icon': <SiReact size={40}/>,
            'topic': "Web Development"
        },
        {'no': '9',
            'icon': <SiLinux size={40}/>,
            'topic': "Linux"
        },
        

    ]
  return (
        <Container>
        <Cards>
        
            {
                skill.map((card,i) =>(
                    <Card key={i} >
                    <Icon>
                      {card.icon}
                    </Icon>
                    <Text>
                      {card.topic}
                    </Text>
                    </Card>
                ))
            }
           
        </Cards>
        </Container> 
  )
}
