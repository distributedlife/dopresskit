import React from 'react';
import styled from 'styled-components';
import {Section, SectionHeader, Link} from './Common';
import {TextColour} from './colours';
import {gameNameToPath} from '../paths'

const FactLayout = styled.p`
  margin-top: 15px;
  margin: 0 0 15px 0;
  color: ${TextColour};
`;

const Fact = ({name, children}) => (
  <FactLayout>
    <strong>{name}:</strong>
    <br />
    {children}
  </FactLayout>
)

const Social = ({socialLinks}) => (
  <Fact name="Social">
    {
      socialLinks.map((social) => (
        <span key={social.link}>
          <Link href={social.link}>{social.name}</Link>
          <br/>
        </span>
      ))
    }
  </Fact>
)

const Release = ({name}) => (
  <span>
    <Link href={gameNameToPath(name)}>{name}</Link>
    <br />
  </span>
)

const AddressLine = ({children}) => (<span>{children}<br/></span>);

export const CompanyFacts = ({id, company, games}) => (
  <Section>
    <SectionHeader id={id}>Factsheet</SectionHeader>
    <Fact name="Developer">
      <Link href="/press">{company.name}</Link>
      <br />
      {company.basedIn}
    </Fact>
    <Fact name="Founding date">{company.founded}</Fact>
    <Fact name="Website">
      <Link href="{company.website}">{company.website}</Link>
    </Fact>
    <Fact name="Press / Business contact">
      <Link href={`mailto:{company.pressContact}`}>{company.pressContact}</Link>
    </Fact>
    {
      company.social && <Social socialLinks={company.social} />
    }
    <Fact name="Releases">
      {
        games.map((game) => (<Release key={game.name} name={game.name} />))
      }
    </Fact>
    {
      company.address && (
        <Fact name="Address">
          {company.address.map((line) => (<AddressLine key={line}>{line}</AddressLine>))}
        </Fact>
      )
    }
    {
      company.phone && <Fact name="Phone">{company.phone}</Fact>
    }
  </Section>
);

export const GameFacts = ({id, company, game}) => (
  <Section>
    <SectionHeader id={id}>Factsheet</SectionHeader>
    <Fact name="Developer">
      <Link href="/press">{company.name}</Link>
      <br />
      {company.basedIn}
    </Fact>
    {
      game.releaseDate && <Fact name="Release date">{game.releaseDate}</Fact>
    }
    {
      game.platforms && <Fact name="Platforms">
        <Link href="{game.platforms.link}">{game.platforms.text}</Link>
      </Fact>
    }
    {
      game.website && <Fact name="Website">
        <Link href="{game.website}">{game.website}</Link>
      </Fact>
    }
    <Fact name="Regular Price">{game.price}</Fact>
    {
      game.social && <Social socialLinks={game.social} />
    }
  </Section>
);
