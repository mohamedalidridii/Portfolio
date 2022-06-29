
import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import Link from 'next/link';
import {ChevronLeftIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";

const Interaction = () =>{
    return (
        <Layout>
                        <Box align="center" position="relative" top={"70vh"}>
                    <Link href="/">
                        <Button
                        leftIcon={<ChevronLeftIcon />} 
                        bg={useColorModeValue('blackAlpha.800', 'whiteAlpha.700')}
                        color={useColorModeValue('white', 'black')}>
                            Home
                            </Button></Link>    
                </Box>
        </Layout>
    )}
export default Interaction