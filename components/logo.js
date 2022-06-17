import Link from 'next/link'
import Image from 'next/image'
import {Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size:18px;
display: inline-flex;
align-items: center;
height: 2rem;
line-height: 20px;
padding: 1.3rem;
&:hover img {
    transform: rotate(20deg);
}
`
const Logo = () => {
    const logoImg = `/images/lgb${useColorModeValue('', 'w')}.png`
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src= {logoImg} width={40} height={30} alt="logo"/>
                    <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='M PLUS Rounded 1c'
                    fontWeight="bold"
                    ml={3}>
                        Mohamed Ali Dridi
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}
export default Logo