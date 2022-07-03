import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoFacebook, IoLogoLinkedin} from 'react-icons/io5'
import NextLink from 'next/link';
const Footer = () => {
  return (
    <Box align="center" opacity={0.7} fontSize="sm" position="relative">
                        <Box gap={2} mt={"10vh"} position="relative">
                <Flex gap={16} align="center" justify="center" >
                        <NextLink href="https://www.linkedin.com/in/med-ali-dridi/" key={"li"} >
                    <IoLogoLinkedin color={useColorModeValue('black', 'white')} size={"1.5rem"}  style={{cursor:'pointer'}}/>
                        </NextLink>  
                        <NextLink href="https://github.com/mohamedalidridii" key={"gh"} >
                    <IoLogoGithub color={useColorModeValue('black', 'white')} size={"1.5rem"}  style={{cursor:'pointer'}}/>
                        </NextLink>                              
                </Flex>
                <Flex gap={20}  align="center" justify="center" mt={"8vh"}>
                        <NextLink href="https://www.facebook.com/daly.19435/" key={"fa"} >
                    <IoLogoFacebook color={useColorModeValue('black', 'white')} size={"1.5rem"}  style={{cursor:'pointer'}}/>
                        </NextLink>
                        <NextLink href="https://twitter.com/daly4111" key={"tw"} >
                    <IoLogoTwitter color={useColorModeValue('black', 'white')} size={"1.5rem"}  style={{cursor:'pointer'}}/>
                        </NextLink>
                        <NextLink href="https://www.instagram.com/medaly.dridi/" key={"in"} >
                    <IoLogoInstagram color={useColorModeValue('black', 'white')} size={"1.5rem"}  style={{cursor:'pointer'}}/>
                        </NextLink>
                </Flex>
                </Box>
      {/* &copy; {new Date().getFullYear()} Mohamed Ali Dridi. All Rights Reserved. */}
    </Box>
  )
}

export default Footer