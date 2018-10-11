import React from 'react';
import { Section, SectionHeader, SubHeading, Divider, Link, Text } from './Common'


const About = ({id, company}) => (
  <Section>
    <SectionHeader id={id}>About {company.name}</SectionHeader>
    <SubHeading>Boilerplate</SubHeading>
    {company.description}
    <br />
    <br />
    <SubHeading>More information</SubHeading>
    More information on {company.name}, our logo & relevant media are available <Link href="/press" >here</Link>
    <Divider />
  </Section>
)

export default About;
