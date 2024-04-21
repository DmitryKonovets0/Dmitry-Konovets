import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

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
    display: flex;
    justify-content: center;
    align-items: center;
`, Header = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    margin: 0 0 24px;
    padding: 20px 5%;
    box-shadow: 0 8px 26.5px 0 rgba(0, 0, 0, 0.2);
    z-index: 5;
`, Ul = styled.ul`
    display: flex;
`, LiText = styled.div`
    display: flex;
    font-size: 20px;
    font-weight: 300;
    width: 457px;
    height: 24px;
    margin: 8px 0 8px 0;
    justify-content: space-between;
    text-transform: uppercase;
    padding-top: 5px;
`, StyledLink = styled(Link)`
    color: inherit;
    cursor: pointer;

    &:hover {
        transition: all .2s;
        color: #CACACA;
    }
`, ThemeToggle = styled.div`
    width: 25px;
    height: 25px;
    margin: 8px 0 7px 34%;
    cursor: pointer;
`, LanguageToggle = styled.div`
    margin: 8px 0 7px 71px;
    display: flex;
    gap: 20px;
    padding-top: 5px;
`, Eng = styled.div`
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        transition: all .2s;
        color: #CACACA;
    }
`, Ua = styled.div`
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        transition: all .2s;
        color: #CACACA;
    }
`, Btn = styled.button`
    cursor: pointer;
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
    text-transform: uppercase;
    color: #202020;
    @supports (-moz-appearance:none) {
        padding-top: 13px;
    }

    &:hover {
        transition: all .2s;
        background: #CACACA;
    }
`, TextWrapper = styled.div`
    position: absolute;
    left: 0;
    width: 610px;
    height: 339px;
    display: flex;
    flex-direction: column;
`, Hi = styled.h2`
    font-size: 30px;
    text-align: left;
    display: flex;
    position: relative;
`, Sticker = styled.img`
    position: absolute;
    top: -32px;
    left: 215px;
`, Frontend = styled.h1`
    font-size: 50px;
    text-align: left;
    font-stretch: normal;
    letter-spacing: normal;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    @supports (-moz-appearance:none) {
        margin-top: 10px;
    }
    background: linear-gradient(
            to right,
            #283C86 20%,
            #45A247 30%,
            #283C86 70%,
            #45A247 80%
    );
    background-clip: text;
    text-fill-color: transparent;
    background-size: 500% auto;
    animation: textShine 5s ease-in-out infinite alternate;
}

@keyframes textShine {
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 100% 50%;
    }
}
`, Descr = styled.h3`
    font-size: 20px;
    text-align: left;
    margin-top: 40px;
    font-weight: 300;
    z-index: 2;
    position: relative;
    background: transparent;
`, Arrow = styled.div`
    position: absolute;
    top: 179px;
    right: 490px;
`, Dmitry = styled.img`
    position: absolute;
    bottom: 67px;
    right: 3%;
    border-radius: 13px;
    z-index: 2;
`, BubbleFirst = styled.img`
    position: absolute;
    right: -6%;
    top: -1%;
    z-index: 1;
`, BubbleSecond = styled.img`
    position: absolute;
    left: -6%;
    bottom: -1%;
    z-index: 1;
`, WrapperIcons = styled.div`
    display: flex;
    position: absolute;
    background: transparent;
    bottom: 69px;
    left: 0;
    z-index: 4;
    gap: 46px;
    width: 380px;
    height: 38px;
`, IconLinkYoutube = styled.a`
    position: relative;
    bottom: 3px;
`, IconsLink = styled.a`
    background: transparent;
`, IconsImg = styled.img`
    background: transparent;
`;
export default class Introduce extends Component {
    constructor(props) {
        super(props);
        this.instagram = 'https://www.instagram.com/konovets_dmitry/';
        this.telegram = 'https://t.me/DmitryKonovets';
        this.youtube = 'https://www.youtube.com/channel/UCGdbh3u1lShvIrFH7h5D0yw'
        this.linkedin = 'https://www.linkedin.com/in/dmitry-konovets-021a34263/'
        this.github = 'https://github.com/DmitryKonovets0'
        this.state = {
            buttonText: "Contact me", // Начальный текст кнопки
            t: 0
        };
    }

    changeButtonText = (newButtonText) => {
        this.props.changeTState(1);

        // Изменяем состояние buttonText
        this.setState({
            buttonText: newButtonText
        });
    }
    render() {
        return (

            <SectionIntroduce id='about-me'>
                <Header>
                    <Ul>
                        <LiText>
                                <StyledLink to="about-me" smooth={true} duration={500} offset={-50} className="link">about me</StyledLink>
                                 <StyledLink to="skills" smooth={true} duration={500} offset={-50}>skills</StyledLink>
                             <StyledLink to="portfolio" smooth={true} duration={500} offset={-50} >portfolio</StyledLink>
                        </LiText>
                        <ThemeToggle>
                            <img src={sun} alt="sun"/>
                        </ThemeToggle>
                        <LanguageToggle>
                            <Eng>eng</Eng>
                            <Ua>ua</Ua>
                        </LanguageToggle>
                        <Btn onClick={() => this.changeButtonText("New Text")}>
                            {this.state.buttonText}
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
                    <IconsLink href={this.github}><IconsImg src={githubCatIcon} alt="github"/></IconsLink>
                    <IconsLink href={this.linkedin}><IconsImg src={linkedinIcon} alt="linkedin"/></IconsLink>
                    <IconsLink href={this.instagram}><IconsImg src={instagramIcon} alt="instagram"/></IconsLink>
                    <IconsLink href={this.telegram}><IconsImg src={telegramIcon} alt="telegram"/></IconsLink>
                    <IconLinkYoutube href={this.youtube}><IconsImg src={youtubeIcon} alt="youtube"/></IconLinkYoutube>
                </WrapperIcons>
            </SectionIntroduce>
        );
    }
}
