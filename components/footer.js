import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoFacebook, IoLogoLinkedin, IoLogoBehance} from 'react-icons/io5'
import NextLink from 'next/link';
const Footer = () => {
  return (
    <Box align="center" opacity={0.8} fontSize="sm" position="relative" bottom={1}>
                        <Box gap={3} mt={"15vh"} position="relative">
                <Flex gap={10} align="center" justify="center" >
                        <NextLink href="https://www.linkedin.com/in/med-ali-dridi/" key={"li"} >
                    <IoLogoLinkedin color={useColorModeValue('black', 'white')} size={20}  style={{cursor:'pointer'}}/>
                        </NextLink>  
                        <NextLink href="https://github.com/mohamedalidridii" key={"gh"} >
                    <IoLogoGithub color={useColorModeValue('black', 'white')} size={20}  style={{cursor:'pointer'}}/>
                        </NextLink>                              
                </Flex>
                <Flex gap={8}  align="center" justify="center" mt={"3vh"} mb={"3vh"}>
                        <NextLink href="https://www.facebook.com/daly.19435/" key={"fa"} >
                    <IoLogoFacebook color={useColorModeValue('black', 'white')} size={20}  style={{cursor:'pointer'}}/>
                        </NextLink>
                        <NextLink href="https://twitter.com/daly4111" key={"tw"} >
                    <IoLogoTwitter color={useColorModeValue('black', 'white')} size={20}  style={{cursor:'pointer'}}/>
                        </NextLink>
                        <NextLink href="https://www.instagram.com/medaly.dridi/" key={"in"} >
                    <IoLogoInstagram color={useColorModeValue('black', 'white')} size={20}  style={{cursor:'pointer'}}/>
                        </NextLink>
                        <NextLink href="https://www.behance.net/DALY3DESIGN" key={"li"} >
                    <IoLogoBehance color={useColorModeValue('black', 'white')} size={20}  style={{cursor:'pointer'}}/>
                        </NextLink>
                </Flex>
                </Box>
      &copy; {new Date().getFullYear()} Mohamed Ali Dridi. All Rights Reserved.
    </Box>
  )
}

export default Footer