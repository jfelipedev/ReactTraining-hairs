import React from 'react'
import Banner from '../../assets/header-background.png'
import { Container, Content } from './style';

function Header (){
    return <Container>
        <Content>
        <img src={Banner} alt="banner" id="home"/>
        </Content>
        </Container>    
}

export default Header;