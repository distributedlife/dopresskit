import React from 'react';
import { Section, SectionHeader } from './Common'

const Description= ({id, data}) => (
  <Section>
    <SectionHeader id={id}>Description</SectionHeader>
    {data.description}
  </Section>
);

export default Description;
