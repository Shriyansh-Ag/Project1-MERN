import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {
  const videosArr = [
    'https://www.youtube.com/watch?v=yCpaxdGw4nw&ab_channel=WebCoding',
    'https://www.pexels.com/video/drops-of-liquid-on-a-tray-to-be-use-as-samples-3195394/',
    'https://www.youtube.com/watch?v=yCpaxdGw4nw&ab_channel=WebCoding',
    'https://www.youtube.com/watch?v=yCpaxdGw4nw&ab_channel=WebCoding',
    'https://www.youtube.com/watch?v=yCpaxdGw4nw&ab_channel=WebCoding',
    'https://www.youtube.com/watch?v=yCpaxdGw4nw&ab_channel=WebCoding',
    'https://www.youtube.com/watch?v=yCpaxdGw4nw&ab_channel=WebCoding',
    'https://www.youtube.com/watch?v=yCpaxdGw4nw&ab_channel=WebCoding',

  ];
    

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{
            width: '100%',
          }}
        ></video>

        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Sample Video </Heading>
          <Text>
            This is a sample video for testing and demo. This is called
            description.
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p="8"
        spacing={'8'}
        overflowY={'auto'}
      >
        {videosArr.map((item, index) => (
          <Button
            variant={'ghost'}
            colorScheme={'purple'}
            onClick={() => setVideoSrc(item)}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;