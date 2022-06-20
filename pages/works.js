
import { Container, Heading, SimpleGrid, Divider, useColorModeValue } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import ThumbBridesSecrets from "../public/images/ThumbBridesSecrets.jpg";
import ThumbTazuri from "../public/images/ThumbTazuri.jpg";
import Layout from "../components/layouts/article";

const Works= () => {
    return (
        <Layout>
        <Container >
            <Heading as="h3" fontSize={20}  mt={14}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6} borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={5} mt={9} style={{backdropFilter: 'blur(100px)'}}>
                <Section>
                    <WorkGridItem id="bridessecrets" title="Bride&apos;s Secrets" thumbnail={ThumbBridesSecrets}>
                         A portfolio app connected with content management system 
                         to create, modify or delete a product.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="tazuri" title="Tazuri" thumbnail={ThumbTazuri}>
                         A portfolio app connected with content management system 
                         to create, modify or delete a product.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}
export default Works