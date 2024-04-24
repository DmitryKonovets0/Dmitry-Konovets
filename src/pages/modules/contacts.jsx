import * as React from "react";
import { Component } from "react";
import styled from "styled-components";

import github from '../../images/icons/github-b.svg'
import linkedin from '../../images/icons/linkedin-b.svg'
import instagram from '../../images/icons/instagram-b.svg'
import youtube from '../../images/icons/youtube-b.svg'
import telegram from '../../images/icons/telegram-b.svg'

const SectionContacts = styled.div`
    height: 600px;
    margin-top: 300px;
`
const Header = styled.h2`
    font-size: 30px;
    text-decoration: a;
    text-transform: uppercase;
    text-align: center;
`
const WrapperLinks = styled.div`
    display: flex;
    margin-top: 100px;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 294px;
    background-color: #fff;
    border-radius: 30px;
    padding: 90px 106px;
`
const LinkItem = styled.div`
    background: transparent;
    width: 161px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const LinkImg = styled.img`
    background: transparent;
    height: 70px;
    width: 70px;
`
const LinkNickname = styled.h2`
    font-size: 20px;
    margin-top: 21px;
    background: transparent;
    color: #202020;;
`

export default class Contacts extends Component {
    render() {
        return(
            <SectionContacts id='contacts'>
                <Header>Contacts</Header>
                <WrapperLinks>
                    <LinkItem>
                        <LinkImg src={github} alt=""/>
                        <LinkNickname>DmitryKonovets0</LinkNickname>
                    </LinkItem>
                    <LinkItem>
                        <LinkImg src={linkedin} alt=""/>
                        <LinkNickname>Dmitry Konovets</LinkNickname>
                    </LinkItem>
                    <LinkItem>
                        <LinkImg src={instagram} alt=""/>
                        <LinkNickname>dmitry_konovets</LinkNickname>
                    </LinkItem>
                    <LinkItem>
                        <LinkImg src={telegram} alt=""/>
                        <LinkNickname>@DmitryKonovets</LinkNickname>
                    </LinkItem>
                    <LinkItem>
                        <LinkImg src={youtube} alt=""/>
                        <LinkNickname>@dmitrykonovets0</LinkNickname>
                    </LinkItem>
                </WrapperLinks>
            </SectionContacts>
        )
    }
}