import React from 'react';
import {
  Section,
  SectionHeader,
  Divider,
  ImageFrame,
  Images,
  Image,
  Text,
  Link
} from './Common'
import {hasLogos} from '../models';

const NoLogosText = ({name}) => (
  <Text>There are currently no logos or icons available for {name}. Check back later for more or <Link href="#contact">contact us</Link> for specific requests!</Text>
)

const LogosAndIcons = ({id, data}) => (
  <Section>
    <SectionHeader id={id}>Logos & Icons</SectionHeader>
    {
      hasLogos(data.logos) ?
      (
        <div>
          <Images>
            {
              data.logos.map((logo) => (
                <ImageFrame key={logo}>
                  <Image src={`./assets/${logo}`} />
                </ImageFrame>
              ))
            }
          </Images>
        </div>
      )
      : <NoLogosText name={data.name} />
    }
    <Divider />
  </Section>
)

export default LogosAndIcons;
