import { Box, Button, Heading, Stack, VStack ,HStack, Input, Text } from '@chakra-ui/react';
import React from 'react'
import {AiOutlineSend} from "react-icons/ai"
import { AiFillYoutube } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";


const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'4'} color={'white'}>
        <Stack direction={['columns', 'row']}>
            <VStack alignItems={'stretch'} width={'full'} px={'4'}>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={['center' ,'left']}>
                    Subscribe to get the premium porn first
                </Heading>
                <HStack
                borderBottom={'2px solid white'}
                py={'2'}
                >
                <Input placeholder='Enter email here...'  border={'none'} borderRadius={'none'} focusBorderColor='none'/>
                <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend  size={"20"}/>
                    </Button>
                </HStack>
            </VStack>
            
            <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}>
            <Heading size = {'md'}textTransform={"uppercase"} textAlign={['center','left']}>
                Video Hub
            </Heading>
            <Text py={'8'}>All rights reserved </Text>

            </VStack>
            <VStack width={"full"}>
                <Heading size={'md'} textTransform={"uppercase"}>
                Social Media
                </Heading>
                <Button variant={'link'} colorScheme='whiteAlpha'>
                    
                    <a target='blank' href='https://www.youtube.com/'>
                    <AiFillYoutube size={'30'}/>
                    </a>
                </Button>
                <Button variant={'link'} colorScheme='whiteAlpha'>
                    <a target='blank' href='https://www.instagram.com'>
                    <AiOutlineInstagram size={'30'}/>
                    </a>
                </Button>
                <Button variant={'link'} colorScheme='whiteAlpha'>
                    
                    <a target='blank' href='https://www.x.com/'>  
                    <AiFillTwitterCircle size={'30'}/>
                    </a>
                </Button>
                <Button variant={'link'} colorScheme='whiteAlpha'>
                    
                    <a target='blank' href='https://www.github.com/'>  
                    <AiFillGithub  size={'30'}/>
                    </a>
                </Button>

            </VStack>
        </Stack>
    </Box>
  )
};

export default Footer