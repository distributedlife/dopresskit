import React from 'react';
import styled from 'styled-components';
import { Section, SectionHeader, SubHeading, Link, Divider } from './Common';
import {hasAdditionalLinks} from '../models';
import {TextColour} from './colours';

const Links = styled.div`
`;

const LinkLayout = styled.p``;
const Description = styled.span`
  color: ${TextColour};
`;

const SocialLink = ({title, description, link}) => (
  <LinkLayout>
    <SubHeading>{title}</SubHeading>
    <Description>{description} </Description><Link href={link}>{link}.</Link>
  </LinkLayout>
)

const AdditionalLinks = ({id, data}) => !hasAdditionalLinks(data) ? null : (
    <Section>
      <SectionHeader id={id}>Additional Links</SectionHeader>
      <Links>
        {
          data.links.map((link) => (
            <SocialLink
              key={link.title}
              title={link.title}
              description={link.description}
              link={link.link}
            />
          ))
        }
      </Links>
      <Divider />
    </Section>
);

export default AdditionalLinks;
