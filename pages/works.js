
import { Container, Heading, Link, List, ListItem, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import ThumbBridesSecrets from "../public/images/ThumbBridesSecrets.jpg";
import ThumbTazuri from "../public/images/ThumbTazuri.jpg";
//  import GlucoseMeter from "../public/images/ThumbGlucoseMeter.jpeg"
import Layout from "../components/layouts/article";
import { Meta, WorkImage } from "../components/work";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Footer from "../components/footer";

const Works= () => {
    return (
        <Layout >
        <Container borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.900')} p={6}  style={{backdropFilter: 'blur(100px)'}}>
            <div style={{display: "flex", justifyContent:"center", alignItems:"center", mb:"10px"}}>
            <Heading as="h1" fontSize={"5rem"}   opacity={0.3} position="relative" align="center">
                WORKS
            </Heading>
            <p  style={{position:"absolute", fontSize:"7px", letterSpacing:"3px"}}>PROJECTS | COLLABORATIONS | EXPLORATIONS </p></div>
            <SimpleGrid columns={[1,1,1]} gap={6} borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')} p={6} mt={9} style={{backdropFilter: 'blur(100px)'}}>
            <Heading as="h3" fontSize={20}  mt={8}>
                Development
            </Heading>
                <Section>
                <Meta>Notice:</Meta>All Data are available upon request: mohamedali.dridi1@esprit.tn<br/><br/>
                    <WorkGridItem id="brides_secrets" title="Bride&apos;s Secrets" thumbnail={ThumbBridesSecrets} key={"tazuri"}>
                         A fully responsive Website for clothing store to showcase their marchandise, this web site connected with content management system 
                         to easy create, modify or delete a product.
                    </WorkGridItem>
                </Section>
                <Section>
                
                    <WorkGridItem id="tazuri" title="Tazuri" thumbnail={ThumbTazuri} key={"tazuri"}>
                         A desktop website Portfolio for a artificial plants store to showcase her Products and Projects.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
            
            <SimpleGrid columns={1} gap={4} borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')} p={6} mt={9} style={{backdropFilter: 'blur(100px)'}}>
            <Heading as="h3" fontSize={20}  mt={14} >
                Prototypes
            </Heading>
            <p mb={5}>Shaders | 3D | Visual FX </p>
            <SimpleGrid columns={["1","1","1"]} gap={4} borderRadius="lg">
            <List ml={4} my={4}>
                     <ListItem>
                        <Meta>Video processing</Meta>
                        <span>Blender | Cinema 4D | KeyShot | After Effects-Element3D</span>
                     </ListItem>
                     <ListItem>
                        <Meta>Post processing</Meta>
                        <span>Photoshop</span>
                     </ListItem>
                </List>
                <WorkImage src="./images/works/portfolio.png" alt="Head" />
                <WorkImage src="./images/works/render1.png" alt="render-Tazuri" />
                <WorkImage src="./images/works/procederal-lace.png" alt="render-Tazuri" />
                <WorkImage src="./images/works/AP5.jpg" alt="AirPods" />
                <WorkImage src="./images/works/GM2.jpg" alt="Glucose Meter" />
                <WorkImage src="./images/works/DCMotor1.jpg" alt="DCMotor1" />
                <List ml={4} my={4}>
                     <ListItem>
                        <Meta>more</Meta>
                        <Link href="https://www.behance.net/DALY3DESIGN">More about 3D stuff <ExternalLinkIcon mx="2px"/></Link>
                     </ListItem>
                </List>
        {/* <WorkImage src="./images/works/head/portfolio1.png" alt="Head 1" />
        <WorkImage src="./images/works/head/portfolio4.png" alt="Head 4" /> */}
            </SimpleGrid>
      {/* <SimpleGrid columns={1} gap={4} borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={6} mt={9} style={{backdropFilter: 'blur(100px)'}}>
        <WorkImage src="./images/works/airPods/AP5.jpg" alt="AirPods" />
        <WorkImage src="./images/works/airPods/AP1.jpg" alt="AirPods" />
        <WorkImage src="./images/works/airPods/AP2.jpg" alt="AirPods" />
        <WorkImage src="./images/works/airPods/AP3.jpg" alt="AirPods" />
        <WorkImage src="./images/works/airPods/AP4.jpg" alt="AirPods" />

      </SimpleGrid>
            <SimpleGrid columns={1} gap={1} borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={6} mt={9} style={{backdropFilter: 'blur(100px)'}}>
        <WorkImage src="./images/works/Tazuri/render1.jpg" alt="render-Tazuri" />
        <WorkImage src="./images/works/Tazuri/render2.jpg" alt="render-Tazuri2" />
        <WorkImage src="./images/works/Tazuri/render3.jpg" alt="render-Tazuri3" />
        </SimpleGrid>

            <SimpleGrid columns={1} gap={4} borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={6} mt={9} style={{backdropFilter: 'blur(100px)'}}>
        <WorkImage src="./images/works/GlucoseMeter/GM1.jpg" alt="Glucose Meter" />
        <WorkImage src="./images/works/GlucoseMeter/GM2.jpg" alt="Glucose Meter" />
      </SimpleGrid>
      <SimpleGrid columns={1} gap={4} borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={6} mt={9} style={{backdropFilter: 'blur(100px)'}}>
        <WorkImage src="./images/works/DCMotor/ThumbDCMotor.jpg" alt="ThumbDCMotor" />
        <WorkImage src="./images/works/DCMotor/ThumbDCMotor1.jpg" alt="ThumbDCMotor1" />
      </SimpleGrid> */}
      </SimpleGrid>
      
        </Container>
        <Footer/>
        </Layout>
    )
}
export default Works