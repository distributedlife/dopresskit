import React from 'react';
import styled from 'styled-components';
import {hasHistory, hasAwards, hasArticles} from '../models.js'
import { company } from '../data.json'

const Layout = styled.nav`
  margin: 0;
`;
const Entries = styled.ul`
  list-style: none;
  padding: 15px 0;
  margin: 0;
`;
const CompanyName = styled.h1`
  padding: 0 15px;
  margin: 0 0 15px 0;
  margin-bottom: 0;
  font-size: 36px;
  line-height: 42px;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-weight: normal;
  color: #444;
  text-transform: none;
`;
const Website = styled.a`
  padding: 5px 15px;
	font-weight: bold;
  color: #07d;
  text-decoration: none;
}`;
const Entry = styled.li`

`;
const NavLink = styled.a`
  color: #444;
  padding: 5px 15px;
  display: block;
  text-decoration: none;

  :hover {
    background: rgba(0,0,0,0.03);
    color: #444;
    outline: 0;
    box-shadow: inset 0 0 1px rgba(0,0,0,0.1);
    text-shadow: 0 -1px 0 #fff;
  }
`;

const Navigation = ({game = false}) => (
  <Layout>
    <CompanyName>{company.name}</CompanyName>
    <Website href={company.website}>{company.website}</Website>
    <Entries>
      <Entry><NavLink href="#factsheet">Factsheet</NavLink></Entry>
      <Entry><NavLink href="#description">Description</NavLink></Entry>
      {
        hasHistory(game || company) && <Entry><NavLink href="#history">History</NavLink></Entry>
      }
      {
        game && <Entry><NavLink href="#features">Features</NavLink></Entry>
      }
      <Entry><NavLink href="#projects">Projects</NavLink></Entry>
      <Entry><NavLink href="#trailers">Videos</NavLink></Entry>
      <Entry><NavLink href="#images">Images</NavLink></Entry>
      <Entry><NavLink href="#logo">Logo & Icon</NavLink></Entry>
      {
        hasAwards(company) && <Entry><NavLink href="#awards">Awards & Recognition</NavLink></Entry>
      }
      {
        hasArticles(company) && <Entry><NavLink href="#quotes">Selected Articles</NavLink></Entry>
      }
      <Entry><NavLink href="#links">Additional Links</NavLink></Entry>
      {
        game && <Entry><NavLink href="#about">About {company.name}</NavLink></Entry>
      }
      <Entry><NavLink href="#credits">Team</NavLink></Entry>
      <Entry><NavLink href="#contact">Contact</NavLink></Entry>
    </Entries>
  </Layout>
)

export default Navigation;
