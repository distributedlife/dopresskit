import React from 'react';
import styled from 'styled-components';
import {Section, SectionHeader, Divider} from './Common'
import {TextColour} from './colours';
import {hasAwards} from '../models';

const Awards = styled.ul`
  list-style-type: square;
`;

const AwardLayout = styled.li``;
const AwardDescription = styled.span`
  color: ${TextColour};
`;
const AwardInfo = styled.span`
  font-style: italic;
  color: ${TextColour};
`;

const Award = ({description, info}) => (
  <AwardLayout>
    <AwardDescription>"{description}"</AwardDescription> - <AwardInfo>{info}</AwardInfo>
  </AwardLayout>
)

const AwardsAndRecognition = ({id, data}) => !hasAwards(data) ? null : (
    <Section>
      <SectionHeader id={id}>Awards & Recognition</SectionHeader>
      <Awards>
        {
          data.awards.map((award) => (
            <Award description={award.description} info={award.info} />
          ))
        }
      </Awards>
      <Divider />
  </Section>
);

export default AwardsAndRecognition;
