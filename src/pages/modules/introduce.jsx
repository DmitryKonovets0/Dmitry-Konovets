import React, { Component } from "react";
import styled from "styled-components";
import sun from '../../images/icons/sun.svg'
import arrow1 from '../../images/arrow/arrow-1.svg'
import I from '../../images/picture.png'
import bubbleFirst from '../../images/icons/bubble/first-section/Ellipse 1.svg'
import bubbleSecond from '../../images/icons/bubble/first-section/Ellipse 2.svg'
import stickerHi from '../../images/icons/sticker/sticker-hi .svg'
import githubCatIcon from '../../images/icons/github-cat.svg'
import linkedinIcon from '../../images/icons/linkedin.svg'
import telegramIcon from '../../images/icons/telegram.svg'
import instagramIcon from '../../images/icons/instagram.svg'
import youtubeIcon from '../../images/icons/youtube.svg'

const SectionIntroduce = styled.div`
    position: relative;
    height: 715px;
    padding-top: 32px;
    background-color: #202020;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Header = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    margin: 0 0 24px;
    padding: 20px 5%;
    box-shadow: 0 8px 26.5px 0 rgba(0, 0, 0, 0.2);
    z-index: 3;
`
const Ul = styled.ul`
display: flex;
`
const LiText = styled.div`
    display: flex;
    font-size: 20px;
    font-weight: 300;
    color: #f4f4f4;
    width: 457px;
    height: 24px;
    margin: 8px 0 8px 0;
    justify-content: space-between;
`
const LiLink = styled.a`
    text-decoration: none;
    color: inherit;
    cursor: pointer;
`
const ThemeToggle = styled.div `
    width: 25px;
    height: 25px;
    margin: 8px 0 7px 34%;
    cursor:pointer;
`
const LanguageToggle = styled.div`
    margin: 8px 0 7px 71px;
    display: flex;
    gap: 20px;
    color: #f4f4f4;
`
const Eng = styled.div`
cursor: pointer;
`
const Ua = styled.div`
cursor: pointer;
`
const Btn = styled.button`
    display: flex;
    width: 150px;
    height: 40px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    background-color: #f4f4f4;
    margin-left: 70px;
    font-weight: 500;
    border: none;
    font-size: 18px;
`
const TextWrapper = styled.div`
    position: absolute;
    left: 0;
    width: 610px;
    height: 339px;
    display: flex;
    flex-direction: column;
    
`
const Hi = styled.h2 `
    font-size: 30px;
    color: #f4f4f4;
    text-align: left;
    display: flex;
    text-transform: none;
    position: relative;
`
const Sticker = styled.img`
    position: absolute;
    top: -32px;
    left: 215px;
`
const Frontend = styled.h1`
    font-size: 50px;
    text-align: left;
    background-image: linear-gradient(170deg, rgba(47,35,250,1) 0%, rgba(4,163,42,1) 61%);
    text-transform: none;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

`
const Descr = styled.h3`
    font-size: 20px;
    text-align: left;
    color: #f4f4f4;
    margin-top: 40px;
    font-weight: 300;
    text-transform: none;
    z-index: 2;
    position: relative;
    background: transparent;

`
const Arrow = styled.div`
    position: absolute;
    top: 179px;
    right: 490px;
`
const Dmitry = styled.img `
    position: absolute;
    right: 3%;
    z-index: 2;
`
const BubbleFirst = styled.img `
    position: absolute;
    right: -6%;
    top: -1%;
    z-index: 1;
`
const BubbleSecond = styled.img `
    position: absolute;
    left: -6%;
    bottom: -1%;
    z-index: 1;
`
const WrapperIcons = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 4;
    gap: 46px;
    width: 271px;
    height: 38px;
`
const IconsLink = styled.a`
    width: 24px;
    height: 24px;
`
export default class Introduce extends Component {
    constructor(props) {
        super(props);
        this.instagram = 'https://www.instagram.com/konovets_dmitry/';
        this.telegram = '@DmitryKonovets';
        this.youtube = 'https://www.youtube.com/channel/UCGdbh3u1lShvIrFH7h5D0yw'
        this.linkedin = 'https://www.linkedin.com/in/dmitry-konovets-021a34263/'
        this.github = 'https://github.com/DmitryKonovets0'

    }
    render() {
        return (
            <SectionIntroduce>
                <Header>
                    <Ul>
                        <LiText>
                            <LiLink href={this.instagram}>about me</LiLink>
                             <LiLink href={this.youtube}>skills</LiLink>
                             <LiLink href={this.linkedin}>portfolio</LiLink>
                        </LiText>
                        <ThemeToggle>
                            <img src={sun} alt="sun"/>
                        </ThemeToggle>
                        <LanguageToggle>
                            <Eng>eng</Eng>
                            <Ua>ua</Ua>
                        </LanguageToggle>
                        <Btn>
                            contact me
                        </Btn>
                    </Ul>
                </Header>
                <TextWrapper>
                    <Hi>
                        Hi, I’m Dmitry <Sticker src={stickerHi} alt="Sticker-Dmitry"/>
                    </Hi>
                    <Frontend>
                        Frontend Developer
                    </Frontend>
                    <Descr>
                        My passion is creating innovative websites and implementing the newest features using modern
                        technologies and code.
                        <br/><br/>
                        My experience is more than 1 year of studying and participating in educational projects and
                        independent practice.
                        <br/><br/>
                        I am especially proud of creating the website
                        you are currently visiting.
                    </Descr>
                </TextWrapper>
                <Arrow>
                    <img src={arrow1} alt="arrow"/>
                </Arrow>
                    <Dmitry src={I} alt="Dmitry-Konovets"/>
                <BubbleFirst src={bubbleFirst} alt='bubble'/>
                <BubbleSecond src={bubbleSecond} alt='bubble'/>
                <WrapperIcons>
                    <IconsLink href={this.github}><img src={githubCatIcon} alt="github"/></IconsLink>
                    <IconsLink href={this.linkedin}><img src={linkedinIcon} alt="linkedin"/></IconsLink>
                    <IconsLink href={this.instagram}><img src={instagramIcon} alt="instagram"/></IconsLink>
                    <IconsLink href={this.telegram}><img src={telegramIcon} alt="telegram"/></IconsLink>
                    <IconsLink href={this.youtube}><img src={youtubeIcon} alt="youtube"/></IconsLink>
                </WrapperIcons>
            </SectionIntroduce>
        );
    }
}
