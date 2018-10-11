import React from 'react';
import styled from 'styled-components';
import {GameCredits} from './Team'
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
import About from './About';
import Features from './Features';
import {GameFacts} from './Facts';
import { company } from '../data.json'

const Layout = styled.div`
  margin: 0;
  flex-direction: column;
  flex: 1;
  padding-right: 15px;
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

const Game = ({game}) => {
  return (
    <Layout>
      <Header src={`./assets/${game.header}`} />
      <Factsheet>
        <Overview>
          <GameFacts id="factsheet" company={company} game={game} />
        </Overview>
        <Detail>
          <Description id="description" data={game} />
          <History id="history" data={game} />
          <Features id="features" features={game.features} />
        </Detail>
      </Factsheet>
      <Divider />
      <Videos id="trailers" data={game} />
      <Images id="images" data={game} />
      <LogosAndIcons id="logos" data={game} />
      <AwardsAndRecognition id="awards" data={game} />
      <SelectedArticles id="quotes" data={game} />
      <AdditionalLinks id="links" data={game} />
      <About id="about" company={company} />
      <Footer>
        <GameCredits id="credits" game={game} />
        <Contact id="contact" company={company} />
      </Footer>
      <Divider />
    </Layout>
  );
}

export default Game;
