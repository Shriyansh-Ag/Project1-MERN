import React from 'react'
import {Button, Container, Heading, Input, Link, VStack} from '@chakra-ui/react'
import GoogleButton from 'react-google-button'


const Login = () => {
  return (
    <Container maxWidth={'container.xl'} h={'100vh'} p={'16'}>

        <form>
            <VStack alignItems={'stretch'} 
            spacing={'8'} 
            w={['full','96']} 
            margin={'auto'} 
            my={'16'}>
                <Heading fontFamily={'sans-serif'}>
                    Hey you 👋
                </Heading>
                <Input height={'16'} placeholder='Email address or phone number' type='Email' focusBorderColor='green.500' required></Input>
                <Input height={'16'} placeholder='Password' type='Password' focusBorderColor='green.500'></Input>
                <Button variant={'link'} alignSelf={'flex-end'}>
                <Link>Forgotten Password ?</Link>
                </Button>
                <Button type='submit'>
                    Log In  
                </Button>
                
                <GoogleButton type='dark'/>


            </VStack>
        </form>

    </Container>


  )
}

export default Login