import * as React from "react";
import { Component } from "react";
import styled from "styled-components";
import Links from "../../assets/links";


import github from '../../images/icons/github-b.svg'
import linkedin from '../../images/icons/linkedin-b.svg'
import instagram from '../../images/icons/instagram-b.svg'
import youtube from '../../images/icons/youtube-b.svg'
import telegram from '../../images/icons/telegram-b.svg'

const SectionContacts = styled.div`
    height: 600px;
    margin-top: 300px;
`, Header = styled.h2`
    font-size: 30px;
    text-decoration: a;
    text-transform: uppercase;
    text-align: center;
`, WrapperLinks = styled.div`
    position: relative;
    left: ${props => props.hideWrapper ? '-110%' : '0%' };
    transition: 2s all;
    display: flex;
    margin-top: 100px;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 294px;
    background-color: #fff;
    border-radius: 30px;
    padding: 90px 106px;
`, ContactWrapper = styled.div`
    background: transparent;
    width: 161px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`, ContactImg = styled.img`
    background: transparent;
    height: 70px;
    width: 70px;
`,
    ContactNickname = styled.h2`
    font-size: 20px;
    margin-top: 21px;
    background: transparent;
    color: #202020;;
`;
export default class Contacts extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const links = new Links()
        return(
            <SectionContacts id='contacts'>
                <Header>Contacts</Header>
                <WrapperLinks hideWrapper={this.props.hideWrapper}>
                    <ContactWrapper>
                        <a href={links.github}>
                            <ContactImg src={github} alt=""/>
                        </a>
                        <ContactNickname>DmitryKonovets0</ContactNickname>
                    </ContactWrapper>
                    <ContactWrapper>
                        <a href={links.linkedin}>
                            <ContactImg src={linkedin} alt=""/>
                        </a>
                        <ContactNickname>Dmitry Konovets</ContactNickname>
                    </ContactWrapper>
                    <ContactWrapper>
                        <a href={links.instagram}>
                            <ContactImg src={instagram} alt=""/>
                        </a>
                        <ContactNickname>dmitry_konovets</ContactNickname>
                    </ContactWrapper>
                    <ContactWrapper>
                        <a href={links.telegram}>
                            <ContactImg src={telegram} alt=""/>
                        </a>

                        <ContactNickname>@DmitryKonovets</ContactNickname>
                    </ContactWrapper>
                    <ContactWrapper>
                        <a href={links.youtube}>
                            <ContactImg src={youtube} alt=""/>
                        </a>
                        <ContactNickname>@dmitrykonovets0</ContactNickname>
                    </ContactWrapper>
                </WrapperLinks>
            </SectionContacts>
        )
    }
}