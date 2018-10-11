import styled from 'styled-components';
import { TextColour, LinkColour } from './colours';

const HeaderFont = 'Georgia, "Times New Roman", Times, serif';

export const Section = styled.div`
  margin-top: 25px;
  flex: 1;
`;

export const SectionHeader = styled.h2`
  font-family: ${HeaderFont};
  font-size: 24px;
  line-height: 30px;
  margin: 0 0 15px 0;
  font-weight: normal;
  color: ${TextColour};
  text-transform: none;
`;

export const Link = styled.a`
  color: ${LinkColour};
  text-decoration: none;
`;

export const SubHeading = styled.strong`
  color: ${TextColour};
  display: block;
`;

export const Text = styled.span`
  color: ${TextColour};
`;

export const Divider = styled.hr`
  display: block;
  padding: 0;
  border: 0;
  border-top: 1px solid #ddd;
`;

export const DownloadLink = styled.a`
  margin-bottom: 15px;
  padding: 10px;
  background: #ebf7fd;
  color: #2d7091;
  border: 1px solid rgba(45,112,145,0.3);
  border-radius: 4px;
  text-shadow: 0 1px 0 #fff;
  display: block;
  color: ${LinkColour};
  text-decoration: none;
`;

export const Images = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 25px;
  grid-row-gap: 25px;
`;

export const ImageFrame = styled.div``;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;
