import React from 'react';
import styled from 'styled-components';
import {TeamAndRepeatingCollaborators} from './Team'
import {Divider} from './Common';
import Contact from './Contact';
import AdditionalLinks from './AdditionalLinks';
import SelectedArticles from './SelectedArticles';
import AwardsAndRecognition from './AwardsAndRecognition';
import LogosAndIcons from './LogosAndIcons';
import Images from './Images';
import Videos from './Videos';
import Description from './Description';
import History from './History';
import Projects from './Projects';
import {CompanyFacts} from './Facts';
import { company, games } from '../data.json'

export const removeSpaces = (name) => name.replace(' ', '_')

const Layout = styled.div`
  margin: 0;
  flex-direction: column;
  flex: 1;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Header = styled.img`
  margin-bottom: 20px;
  width: 100%;
  box-sizing: border-box;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
`;

const Factsheet = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Overview = styled.div`
  flex: 1;
`;

const Detail = styled.div`
  flex: 2;
`;

const Content = () => (
  <Layout>
    <Header src={`./assets/${company.header}`} />
    <Factsheet>
      <Overview>
        <CompanyFacts id="factsheet" company={company} games={games} />
      </Overview>
      <Detail>
        <Description id="description" data={company} />
        <History id="history" data={company} />
        <Projects id="projects" games={games} />
      </Detail>
    </Factsheet>
    <Divider />
    <Videos id="trailers" data={company} />
    <Images id="images" data={company} />
    <LogosAndIcons id="logos" data={company} />
    <AwardsAndRecognition id="awards" data={company} />
    <SelectedArticles id="quotes" data={company} />
    <AdditionalLinks id="links" data={company} />
    <Footer>
      <TeamAndRepeatingCollaborators id="credits" company={company} />
      <Contact id="contact" company={company} />
    </Footer>
    <Divider />
  </Layout>
)

export default Content;
