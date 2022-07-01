
import { Container, Box, Heading, Image, useColorModeValue, Button,  } from "@chakra-ui/react";
import Section from '../components/section';
import NextLink from 'next/link';
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import ReactCountryFlag from "react-country-flag"
const Page = () =>{
    return (
        <Layout >
        <Container borderRadius="lg" bg={useColorModeValue('whiteAlpha.700', 'blackAlpha.900')} p={6}  style={{backdropFilter: 'blur(100px)'}} >
        <div style={{display: "flex", justifyContent:"center", alignItems:"center", mb:"10px"}}>
            <Heading as="h1" fontSize={"5rem"}   opacity={0.3} position="relative" align="center">
                ABOUT
            </Heading>
            <p  style={{position:"absolute", fontSize:"7px", letterSpacing:"3px"}}>EXPERIENCES | WHO I AM | TECHNOLOGIES </p></div>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.200')} p={3} mb={6} mt={9} align="center" >
            Hello, I&apos;m a Full Stack Web Developer based in Tunisia <ReactCountryFlag countryCode="TN"/>
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1} style={{zIndex:1}}>
                    <Heading as="h2" variant="page-title" position="relative" align="center">
                        Mohamed Ali Dridi
                    </Heading>
                    <p align="center">3D Artist | Technologist | Developer</p>
                </Box>
                <Box flexShrink={0}
                mt={{base:8, md: 0}} 
                ml={{md:6}} 
                align="center"
                >
                    <Image 
                    borderColor="whiteAlpha.800"
                    borderWidth={2}
                    borderStyle="solid"
                    maxWidth="8rem"
                    display="inline-block" 
                    borderRadius="full" 
                    position="relative"
                    src="/images/profilepic.jpg" alt="Profile Image"/>
                </Box>
            </Box>
            <Section delay={0.1} position="relative">
                <Heading as="h3" variant="section-title" position="relative">
                    Work
                </Heading>
                <Paragraph >
                My name is Mohamed Ali Dridi and I describe myself as a Creative Developer based in Tunisia and somebody has the skills,
                    qualities and Imagination to match with your needs.</Paragraph>
                    <br/>
                <p>As a developer, my expertise includes React, javascript, webgl, python, 
                    node and a wide range of related frameworks and libraries, I have years of experience with Three.js and WebGL,
                    along with CSS. Everything a web based project might need.</p>
                    <br/>
                    <p>For video processing I have scripting in ffMPEG, Blender, After Effect and Cinema4D. 3D modeling in Cinema4D, Blender enable me to work
                        with all facets of the creative pipeline.
                    </p>
                    <br/>
                <p>My life long love of coding has promoted a career from 
                    Mechanics Engineering to IT Engineering.</p>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button
                        rightIcon={<ChevronRightIcon />} 
                        bg={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}
                        color={useColorModeValue('white', 'black')}>
                            My Portfolio
                            </Button></NextLink>    
                </Box> 
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">Bio</Heading>
                <BioSection>
                    <BioYear>1995</BioYear>
                    Born in Tunis, Tunisia.
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Completed the Bachelor&apos;s of science in Mechatronics Engineering at 
                    The Private Higher School of Engineering and Technology - ESPRIT
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Worked at G2Expertise Tunisia as Mechatronics Engineer
                </BioSection>
                <BioSection>
                    <BioYear>2015 to present</BioYear>
                    Works as a freelancer
                </BioSection>
            </Section>
        </Container>
        </Layout>
    )}
export default Page