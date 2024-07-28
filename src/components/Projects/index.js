import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web applications to Data Analysis. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Web' ?
            <ToggleButton active value="Web" onClick={() => setToggle('Web')}>WEB</ToggleButton>
            :
            <ToggleButton value="Web" onClick={() => setToggle('Web')}>WEB</ToggleButton>
          }
          <Divider />
          {toggle === 'Data Analysis' ?
            <ToggleButton active value="Data Analysis" onClick={() => setToggle('Data Analysis')}>Data Analysis</ToggleButton>
            :
            <ToggleButton value="Data Analysis" onClick={() => setToggle('Data Analysis')}>Data Analysis</ToggleButton>
          }
          <Divider />
          {toggle === 'ML/DL/OpenCV' ?
            <ToggleButton active value="ML/DL/OpenCV" onClick={() => setToggle('ML/DL/OpenCV')}>ML/DL/OpenCV</ToggleButton>
            :
            <ToggleButton value="ML/DL/OpenCV" onClick={() => setToggle('ML/DL/OpenCV')}>ML/DL/OpenCV</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects