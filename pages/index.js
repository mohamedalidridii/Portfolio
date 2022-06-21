
import { Container, Box, Heading, Button } from "@chakra-ui/react";
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io5'
import NextLink from 'next/link';

import { ChevronRightIcon } from "@chakra-ui/icons";

import Layout from "../components/layouts/article";

const Page = () =>{
    return (
        <Layout>
        <Container mt={40}>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1} >
                    <Heading as="h1" variant="page-title" position="relative" align="center" zIndex={-1}>
                        Mohamed Ali Dridi
                    </Heading>
                    <p  zIndex={1} align="center">3D Artist | Technologist | Developer</p>
                </Box>
            </Box>
                <Box align="center" my={5}>
                    <NextLink href="/works">
                        <Button
                        rightIcon={<ChevronRightIcon />} 
                        colorScheme="teal">
                            My Portfolio
                            </Button></NextLink>    
                </Box> 
                
          
          
        </Container>
        </Layout>
    )}
export default Page