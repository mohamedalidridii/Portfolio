
import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import Link from 'next/link';
import {ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";

const Interaction = () =>{
    return (
        <Layout>
                        <Box align="center" position="relative" top={"70vh"}>
                    <Link href="/works">
                        <Button
                        rightIcon={<ChevronRightIcon />} 
                        bg={useColorModeValue('blackAlpha.800', 'whiteAlpha.400')}
                        color={useColorModeValue('white', 'black')}>
                            My portfolio
                            </Button></Link>    
                </Box>
        </Layout>
    )}
export default Interaction