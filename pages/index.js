
import { Container, Box, Heading, Button, useColorModeValue } from "@chakra-ui/react";

import Link from 'next/link';

import { ChevronRightIcon } from "@chakra-ui/icons";
import {MdTouchApp} from 'react-icons/md'
import Layout from "../components/layouts/article";
import Footer from "../components/footer";

const Page = () =>{
    return (
        <Layout>
        <Container mt={40}>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h1"  variant="page-title" position="relative" fontSize={["9vw","4vw", "2.5vw"]} align="center" mt={"3rem"} style={{zIndex:"-2", display:"flex", alignContent:"center", justifyContent:"center"}}>
                        Mohamed Ali Dridi
                    </Heading>
                    <p  style={{zIndex:"1", fontSize:"1.5vh", letterSpacing:"3.5px"}} borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.700')} align="center">3D Artist | Technologist | Developer</p>
                </Box>
            </Box>
                <Box align="center" mt={"2rem"}>
                    <Link href="/interaction">
                        <Button
                        rightIcon={<MdTouchApp />} 
                        bg={useColorModeValue('#E01A4F', '#E01A4F')}
                        color={useColorModeValue('white', 'white')}>
                            3D experience
                            </Button></Link>    
                </Box>
                <Box align="center" mt={"2rem"} >
                    <Link href="/works">
                        <Button
                        rightIcon={<ChevronRightIcon />} 
                        bg={useColorModeValue('blackAlpha.800', 'white')}
                        color={useColorModeValue('white', 'black')}>
                            My Portfolio
                            </Button></Link>    
                </Box>
        </Container>
        <Footer/>
        </Layout>
    )}
export default Page