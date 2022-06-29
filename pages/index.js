
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
                <Box flexGrow={1} >
                    <Heading as="h1" variant="page-title" position="relative" align="center" style={{zIndex:"-1"}}>
                        Mohamed Ali Dridi
                    </Heading>
                    <p  style={{zIndex:"1"}} align="center">3D Artist | Technologist | Developer</p>
                </Box>
            </Box>
                <Box align="center" mt={10}>
                    <Link href="/interaction">
                        <Button
                        rightIcon={<MdTouchApp />} 
                        bg={useColorModeValue('#E01A4F', '#E01A4F')}
                        color={useColorModeValue('white', 'white')}>
                            3D experience
                            </Button></Link>    
                </Box>
                <Box align="center" mt={5}>
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