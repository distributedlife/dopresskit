import React from 'react';
import styled from 'styled-components';
import {
  Section,
  SectionHeader,
  Divider,
  SubHeading,
  Link,
  Text,
} from './Common'
import {hasVideos} from '../models';

const VideoTitle = SubHeading;

const VideoLayout = styled.div`
  position: relative;
  padding-bottom: 56.5%;
  max-width: 100%;
  height: auto;
`;

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const NoVideoText = ({name}) => (
  <Text>There are currently no trailers available for {name}. Check back later for more or <Link href="#contact">contact us</Link> for specific requests!</Text>
)

const Videos = ({id, data}) => (
  <Section>
    <SectionHeader id={id}>Videos</SectionHeader>
      {
        hasVideos(data.videos) ?
          (
            data.videos.map((video) => (
              <div>
                <VideoTitle>{video.name}</VideoTitle>
                <Link href={video.link}>{video.source}</Link>
                <VideoLayout>
                  <Video src={video.link} frameborder="0" allowfullscreen />
                </VideoLayout>
              </div>
            ))
          )
          : <NoVideoText name={data.name} />
      }
      <Divider />
  </Section>
);

export default Videos;
