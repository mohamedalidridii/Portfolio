import { Container, Badge, List, ListItem, Link, useColorModeValue } from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'

import { Title,WorkImage , Meta } from '../../components/work'
import { SimpleGrid } from '@chakra-ui/react'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Footer from '../../components/footer'

const Work =() => {
    return(
        <Layout title="Tazuri">
            <Container borderRadius="lg" bg={useColorModeValue('whiteAlpha.800', 'blackAlpha.800')} p={6} mt={9} style={{backdropFilter: 'blur(100px)'}}>
                <Title>
                    Tazuri <Badge>APRIL 2022</Badge>
                </Title>
                <P>
                A Portfolio Website of decoration Store using modern technics and Nature friendly based in Tunisia. 
                </P>
                <List ml={4} my={4}>
                     <ListItem>
                        <Meta>Website</Meta>
                        Still a concept and not deployed yet.
                        {/* <Link href="https://www.brides-secrets.com/" >https://www.brides-secrets.com <ExternalLinkIcon mx="2px"/></Link> */}
                     </ListItem>
                     <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOs/Linux/iOS/Android</span>
                     </ListItem>
                     <ListItem>
                        <Meta>Stack</Meta>
                        <span> HTML / CSS / JAVASCRIPT </span>
                     </ListItem>
                     <ListItem>
          <Meta>Inspiration</Meta>
          <Link href="https://css-tricks.com/lets-make-one-of-those-fancy-scrolling-animations-used-on-apple-product-pages/">
          Let’s Make One of Those Fancy Scrolling Animations Used on Apple Product Pages. <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> 
                </List>
                <SimpleGrid columns={1} gap={4}>
        <WorkImage src="/images/works/tazuri/tazuri1.gif" alt="Content management system" />
        <WorkImage src="/images/works/tazuri/tazuri-produit1.gif" alt="test" />
        <WorkImage src="/images/works/tazuri/tazuri-projet1.gif" alt="test1" />
      </SimpleGrid>
            </Container>
            <Footer/>
        </Layout>
    )
}
export default Work 
