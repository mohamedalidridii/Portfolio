
import { Container, Box, Heading, Button, useColorModeValue, Flex } from "@chakra-ui/react";
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
                        bg={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}
                        color={useColorModeValue('white', 'black')}>
                            My Portfolio
                            </Button></NextLink>    
                </Box>
                <Box gap={3} mt={"15vh"} >
                <Flex gap={10} align="center" justify="center" >
                        <NextLink href="https://www.linkedin.com/in/med-ali-dridi/">
                    <IoLogoLinkedin color={useColorModeValue('white', 'white')} size={30} opacity={0.8}/>
                        </NextLink>  
                        <NextLink href="https://github.com/mohamedalidridii">
                    <IoLogoGithub color={useColorModeValue('white', 'white')} size={30} opacity={0.8}/>
                        </NextLink>                              
                </Flex>
                <Flex gap={10}  align="center" justify="center" mt={"3vh"}>
                    
                        <NextLink href="https://www.facebook.com/daly.19435/">
                    <IoLogoFacebook color={useColorModeValue('white', 'white')} size={30} opacity={0.8}/>
                        </NextLink>
                        <NextLink href="https://twitter.com/daly4111">
                    <IoLogoTwitter color={useColorModeValue('white', 'white')} size={30} opacity={0.8}/>
                        </NextLink>
                        <NextLink href="https://www.instagram.com/medaly.dridi/">
                    <IoLogoInstagram color={useColorModeValue('white', 'white')} size={30} opacity={0.8}/>
                        </NextLink>
                </Flex>
                </Box>
                
          
          
        </Container>
        </Layout>
    )}
export default Page