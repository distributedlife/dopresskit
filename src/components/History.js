import React from 'react';
import styled from 'styled-components';
import {
  Section,
  SectionHeader,
} from './Common'
import {hasHistory} from '../models';
import {  TextColour} from './colours';


const HistorySectionLayout = styled.p``;
const HistorySectionTitle = styled.strong`
  padding-bottom: 15px;
  color: ${TextColour};
  display: block;
`;

const HistorySection = ({title, children}) => (
  <HistorySectionLayout>
    {title && <HistorySectionTitle>{title}</HistorySectionTitle>}
    {children}
  </HistorySectionLayout>
)


const History = ({id, data}) => !hasHistory(data) ? null : (
    <Section>
      <SectionHeader id={id}>History</SectionHeader>
      {
        data.history.map(({header, text}) => (
          <HistorySection title={header}>{text}</HistorySection>
        ))
      }
  </Section>
);

export default History;
