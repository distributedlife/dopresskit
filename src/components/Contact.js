import React from 'react';
import styled from 'styled-components';
import { Section, SectionHeader, SubHeading, Link } from './Common';

const ContactLayout = styled.div`
  padding-bottom: 25px;
`;
const ContactMethodName = SubHeading;
const ContactLink = Link;

const ContactMethod = ({name, link, email}) => (
  <ContactLayout>
    <ContactMethodName>{name}</ContactMethodName>
    {email && <ContactLink href={`mailto:${email}`}>{email}</ContactLink>}
    {link && <ContactLink href={link}>{link}</ContactLink>}
  </ContactLayout>
)

const Contact = ({id, company}) => (
  <Section>
    <SectionHeader id={id}>Contact</SectionHeader>
    {
      company.contacts.map((contact) => (
        <ContactMethod
          key={contact.channel}
          name={contact.channel}
          email={contact.email}
          link={contact.website}
        />
      ))
    }
  </Section>
)

export default Contact;
