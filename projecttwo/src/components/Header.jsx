import React from 'react'
import { Drawer , DrawerBody , DrawerHeader , DrawerOverlay , DrawerContent , DrawerCloseButton , Button, useDisclosure, VStack, HStack} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import {BiMenuAltLeft} from "react-icons/bi"


const Header = () => {
const {isOpen , onClose , onOpen} =  useDisclosure();

  return (

    <>
  <Button pos={"fixed"} 
    top={"4"} 
    zIndex={'overlay'}
    left={"4"}  
    colorScheme='purple'
    padding={"0"} 
    width={"10"} h={"10"} 
    borderRadius={"2xl"}
    onClick={onOpen}
    >
    <BiMenuAltLeft size={"20"} />
  </Button>

  <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
    
    <DrawerOverlay/>
    <DrawerContent>
        <DrawerCloseButton/>
        <DrawerHeader>Pornhub</DrawerHeader>
        <DrawerBody>
            <VStack alignItems={'flex-start'}>
                
                <Button  onClick = {onClose} variant = {'ghost'} colorScheme={'purple'}>
                    <Link to={'/'}>Home</Link>
                </Button>

                <Button onClick = {onClose} variant = {'ghost'} colorScheme={'purple'}>
                    <Link to={'/videos'}>Videos</Link>
                </Button>

                <Button onClick = {onClose} variant = {'ghost'} colorScheme={'purple'}>
                    <Link to={'/videos?category=free'}>Free Videos</Link>
                </Button>

                <Button onClick = {onClose} variant = {'ghost'} colorScheme={'purple'}>
                    <Link to={'/Upload'}>Upload Videos</Link>
                </Button>
              
            </VStack>

            <HStack pos={'absolute'} 
            bottom={'10'}
            justifyContent={'space-evenly'}>
            
            <Button onClick = {onClose} colorScheme={'purple'}>
                    <Link to={'/login'}>Log In</Link>
                </Button>


                <Button onClick = {onClose} colorScheme={'purple'}>
                    <Link to={'/Signup'}>Sign Up</Link>
                </Button>

            </HStack>
        </DrawerBody>
    </DrawerContent>
  </Drawer>
  </>
  





  )
  
}

export default Header
