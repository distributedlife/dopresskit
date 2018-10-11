import React from 'react';
import styled from 'styled-components';
import { Section, SectionHeader, Divider } from './Common';
import {hasArticles} from '../models';
import { TextColour, LinkColour} from './colours';

const Articles = styled.ul`
  list-style-type: square;
`;

const Layout = styled.li``;
const Description = styled.span`
  color: ${TextColour};
`;
const Author = styled.span`
  font-style: italic;
  color: ${TextColour};
`;
const Website = styled.a`
  font-style: italic;
  color: ${LinkColour};
  text-decoration: none;
`;

const Article = ({description, author, website, link}) => (
  <Layout>
    <Description>"{description}"</Description><br/>- <Author>{author}</Author>, <Website href={link}>{website}</Website>
  </Layout>
)

const SelectedArticles = ({id, data}) => !hasArticles(data) ? null : (
  <Section>
    <SectionHeader id={id}>Selected Articles</SectionHeader>
    {
      data.quotes.map((raticle) => (
        <Articles>
          <Article
            description={raticle.description}
            author={raticle.author}
            website={raticle.website}
            link={raticle.link}
          />
        </Articles>
      ))
    }
    <Divider />
  </Section>
);

export default SelectedArticles;
