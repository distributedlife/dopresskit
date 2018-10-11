import React from 'react';
import styled from 'styled-components';
import { Section, SectionHeader, Text } from './Common'

const ListOfFeatures = styled.ul`
  list-style-type: square;
`;

const Feature = ({children}) => (
  <li><Text>{children}</Text></li>
)

const Features = ({id, features = []}) => (
  <Section>
    <SectionHeader id={id}>Features</SectionHeader>
    <ListOfFeatures>
      {
        features.map((feature) => (<Feature key={feature}>{feature}</Feature>))
      }
    </ListOfFeatures>
  </Section>
)

export default Features;
