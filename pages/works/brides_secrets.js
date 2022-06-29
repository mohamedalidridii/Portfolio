import { Container, Badge, List, Link, ListItem, useColorModeValue } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import { Title,WorkImage , Meta } from '../../components/work'
import { SimpleGrid } from '@chakra-ui/react'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Footer from '../../components/footer'

const Work =() => {
    return(
        <Layout title="Bride&apos;s Secrets">
            <Container borderRadius="lg" bg={useColorModeValue('whiteAlpha.800', 'blackAlpha.800')} p={6} mt={9} style={{backdropFilter: 'blur(100px)'}}>
                <Title>
                    Bride&apos;s Secrets <Badge>MAI 2022</Badge>
                </Title>
                <P>
                A fully responsive Website connected with content management system
                to easily Posts Wedding dresses.
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
                        <span> React Hooks / Context API | Nextjs | GROQ | Sanity CMS </span>
                     </ListItem>
                </List>
                <SimpleGrid columns={1} gap={4}>
        <WorkImage src="/images/works/bridesSecrets/cms.PNG" alt="Content management system" />
        <WorkImage src="/images/works/bridesSecrets/test.PNG" alt="test" />
        <WorkImage src="/images/works/bridesSecrets/test1.PNG" alt="test1" />
      </SimpleGrid>
      <WorkImage src="/images/works/bridesSecrets/phone1.PNG" alt="phone-1" />
      <WorkImage src="/images/works/bridesSecrets/phone2.PNG" alt="phone-2" />
      <SimpleGrid columns={2} gap={4}>
      

      <WorkImage src="/images/works/bridesSecrets/phone3.PNG" alt="phone-3" />
      <WorkImage src="/images/works/bridesSecrets/phone4.PNG" alt="phone-4" />
      </SimpleGrid>
            </Container>
            <Footer/>
        </Layout>
    )
}
export default Work 