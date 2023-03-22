import React from 'react'
import {SiKubernetes, SiDocker, SiJenkins, SiTerraform, SiMicrosoftazure, SiAnsible, SiAmazonaws, SiReact, SiPrometheus
,SiGrafana, SiFlutter, SiApachemaven, SiLinux, SiTailwindcss, SiGnubash, SiFirebase, SiHelm} from "react-icons/si";
import {FaNode} from "react-icons/fa";
import styled from 'styled-components';

const Container= styled.div`
  margin-left: 100px;
`;

const Cards = styled.div`
  margin-top: 100px; 
  height: 70vh;
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
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
            'topic': "Azure"
        },
        {'no': '6',
            'icon': <SiAnsible size={40}/>,
            'topic': "Ansible"
        },
        {'no': '7',
            'icon': <SiAmazonaws size={40}/>,
            'topic': "AWS"
        },
        {'no': '8',
            'icon': <SiPrometheus size={40}/>,
            'topic': "Prometheus"
        },
        {'no': '9',
            'icon': <SiGrafana size={40}/>,
            'topic': "Grafana"
        },
        {'no': '10',
            'icon': <SiReact size={40}/>,
            'topic': "React"
        },
        {'no': '11',
            'icon': <SiFlutter size={40}/>,
            'topic': "Flutter"
        },
        {'no': '12',
            'icon': <SiApachemaven size={40}/>,
            'topic': "Maven"
        },
        {'no': '13',
            'icon': <SiLinux size={40}/>,
            'topic': "Linux"
        },
        {'no': '14',
            'icon': <SiFirebase size={40}/>,
            'topic': "Firebase"
        },
        {'no': '15',
            'icon': <SiGnubash size={40}/>,
            'topic': "Bash"
        },
        {'no': '16',
            'icon': <SiHelm size={40}/>,
            'topic': "Helm"
        },
        {'no': '17',
            'icon': <SiTailwindcss size={40}/>,
            'topic': "Tailwind"
        },
        {'no': '18',
            'icon': <FaNode size={40}/>,
            'topic': "NodeJS"
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
