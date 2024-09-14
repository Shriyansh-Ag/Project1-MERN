import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png' 

const HeadingOptions = {
    pos: 'absolute',
    top : "50%",
    left: "50%",
    transform: "translate( -50%, -50%)",
    textTransform: "uppercase",
    p : '4',
    size: '4xl'
}

const Home = () => {
  return (
    <Box>
    
        <MyCarousel />
        <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
            <Heading textAlign={'center'}py={'2'}>
                Pornstars
            </Heading>
            <Stack
            h={'full'}
            p={'4'}
            alignItems={'center'}
            direction={['column', 'row']}>
                <Image src={img5} h={['40', '400']} />

                <Text letterSpacing={'widest'} lineHeight={'190%'} textAlign={'center'} p ={['4','16']}>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae voluptates veritatis itaque repudiandae praesentium alias, iusto soluta, dignissimos atque pariatur quia dolorum facilis dicta quasi blanditiis! Fugiat cumque, dolor voluptatibus quia facilis deserunt ab impedit, libero totam officiis molestiae sint corrupti repellat? Ipsam corrupti consequatur fugit aspernatur nisi voluptatibus fugiat? ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, placeat cum reiciendis expedita velit voluptatibus numquam at. Dolorum pariatur, modi minima eveniet, nam debitis hic laborum aspernatur explicabo, sunt laboriosam?ipsum dolor, sit amet consectetur adipisicing elit. Quod ea amet doloribus dignissimos mollitia voluptas ad vero ex laudantium temporibus accusantium suscipit facere dolorum quia dicta, omnis illo fugit ullam dolor, saepe quos eligendi esse odio ipsam! Nostrum, minus error. ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ad quas, officia quod optio enim quaerat cumque quos, labore ut, eaque impedit eius ex! Reiciendis ex accusamus nostrum non officiis?Lorem ipsum dolor sit  consectetur adipisicing elit. Ea doloremque beatae repellendus alias voluptas libero dicta omnis similique debitis sed saepe, reiciendis deserunt tempora culpa.
                </Text>
            </Stack>
        </Container>
        
    </Box>
  )
}

const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop 
    interval={2000} 
    showStatus={false} 
    showThumbs= {false} 
    showArrows={false}>


        <Box w={'full'} height={'100vh'}>
            <Image src={img1} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...HeadingOptions}>
                Watch the most premium porn 
            </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
        <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.900'} color={'black'} {...HeadingOptions}>
            Future is Gaming
        </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
        <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...HeadingOptions}>
            Gaming on Console
        </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
        <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...HeadingOptions}>
            Night life is cool
        </Heading>
        </Box>

        </Carousel>

    )


export default Home