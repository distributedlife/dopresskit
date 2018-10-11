import React from 'react';
import styled from 'styled-components';
import {Section, SectionHeader, Link, SubHeading} from './Common';

const Team = styled.div`
`;

const MemberLayout = styled.p``;

const MemberTitle = SubHeading;
const MemberDescription = Link;

const Member = ({name, role, link}) => (
  <MemberLayout>
    <MemberTitle>{name}</MemberTitle>
    <MemberDescription href={link}>{role}</MemberDescription>
  </MemberLayout>
)

export const TeamAndRepeatingCollaborators = ({id, company}) => (
  <Section>
    <SectionHeader id={id}>Team & Repeating Collaborators</SectionHeader>
    <Team>
    {
      company.credits.map((credit) => (
        <Member key={credit.name} name={credit.name} role={credit.role} link={credit.website} />
      ))
    }
    </Team>
  </Section>
)

export const GameCredits = ({id, game}) => (
  <Section>
    <SectionHeader id={id}>{game.name} Credits</SectionHeader>
    <Team>
    {
      game.credits.map((credit) => (
        <Member key={credit.name} name={credit.name} role={credit.role} link={credit.website} />
      ))
    }
    </Team>
  </Section>
)
