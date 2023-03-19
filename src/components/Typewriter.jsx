import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';

export const TypeWriter = () => {
  return (
     <TypeWriterEffect
        textStyle={{
          fontFamily: 'Roboto',
          color: 'white',
          fontWeight: 650,
          fontSize: '2.8em',
        }}
        startDelay={1500}
        cursorColor="white"
        multiText={[
          "Docker",
          "Jenkins",
          "Terraform",
          "Ansible",
          "Azure",
          "Maven",
          "Kubernetes",

        ]}
        multiTextDelay={2500}
        typeSpeed={70}
      />
  )
}

