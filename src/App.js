import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/Navigation'
import Content from './components/Content'
import Game from './components/Game'
import {removeSpaces} from './paths'
import { games } from './data.json'

const A = styled.a`
  color: #07d;
  text-decoration: none;
`;

const Layout = styled.div`
  display: flex;
  flex: 0;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Footer = styled.div`
  padding-right: 15px;
`;

const NavContent = styled.div`;
  flex: 1;
`;

const MainContent = styled.div`
  flex 3;
`;

const CompanyLayout = () => (
  <Layout>
    <NavContent>
      <Navigation />
    </NavContent>
    <MainContent>
      <Content />
      <Footer>
        <A href="http://dopresskit.com">presskit()</A> by Rami Ismail (<A href="https://vlambeer.com">Vlambeer</A>) - also thanks to <A href="https://www.vlambeer.com/press/sheet.php?p=credits">these fine folks</A>. The <A href="https://github.com/distributedlife/dopresskit">react version</A> by Ryan Boucher <A href="https://seabrook-studios.com">(Seabrook Studios)</A>
      </Footer>
    </MainContent>
  </Layout>
)

const GameLayout = (props) => {
  const {name} = props.match.params;
  const game = games.find((game) => removeSpaces(game.name) === name);

  return (
    <Layout>
      <NavContent>
        <Navigation game={game} />
      </NavContent>
      <MainContent>
        <Game game={game} />
        <Footer>
          <A href="http://dopresskit.com">presskit()</A> by Rami Ismail (<A href="https://vlambeer.com">Vlambeer</A>) - also thanks to <A href="https://www.vlambeer.com/press/sheet.php?p=credits">these fine folks</A>. The <A href="https://github.com/distributedlife/dopresskit">SPA version</A> by Ryan Boucher <A href="https://seabrook-studios.com">(Seabrook Studios)</A>
        </Footer>
      </MainContent>
    </Layout>
  );
};
const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={CompanyLayout} />
      <Route path="/:name" component={GameLayout} />
    </div>
  </Router>
)

export default App;
