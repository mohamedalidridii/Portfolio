import { Container, Badge, List, Link, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title,WorkImage , Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work =() => {
    return(
        <Layout title="Bride&apos;s Secrets">
            <Container>
                <Title>
                    Bride&apos;s Secrets <Badge>2022</Badge>
                </Title>
                <P>
                A portfolio app connected with content management system 
                to easy create, modify or delete a product.
                </P>
                <List ml={4} my={4}>
                     <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.brides-secrets.com/" >https://www.brides-secrets.com <ExternalLinkIcon mx="2px"/></Link>
                     </ListItem>
                     <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOs/Linux/iOS/Android</span>
                     </ListItem>
                     <ListItem>
                        <Meta>Stack</Meta>
                        <span>Nextjs | React | GROQ | Sanity CMS</span>
                     </ListItem>
                </List>
            </Container>
        </Layout>
    )
}
export default Work 