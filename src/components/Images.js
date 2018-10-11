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
import {hasImages} from '../models';

const NoImagesText = ({name}) => (
  <Text>There are currently no images available for {name}. Check back later for more or <Link href="#contact">contact us</Link> for specific requests!</Text>
)

const ImageSection = ({id, data}) => (
  <Section>
    <SectionHeader id={id}>Images</SectionHeader>
    {
      hasImages(data.images) ?
      (
        <div>
          <Images>
            {
              data.images.map((image) => (
                <ImageFrame>
                  <Image src={`./assets/${image}`} />
                </ImageFrame>
              ))
            }
          </Images>
        </div>
      )
      : <NoImagesText name={data.name} />
    }
    <Divider />
  </Section>
)

export default ImageSection;
