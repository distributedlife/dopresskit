import React from 'react';
import styled from 'styled-components';
import {
  Section,
  SectionHeader,
  Link,
} from './Common'
import {gameNameToPath} from '../paths'

const ListOfProjects = styled.ul`
  list-style-type: square;
`;

const Project = ({name}) => (
  <li><Link href={gameNameToPath(name)}>{name}</Link></li>
)

const Projects = ({id, games}) => (
  <Section>
    <SectionHeader id={id}>Projects</SectionHeader>
    <ListOfProjects>
      {
        games.map((game) => (<Project key={game.name} name={game.name} />))
      }
    </ListOfProjects>
  </Section>
)

export default Projects;
