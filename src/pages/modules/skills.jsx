import * as React from "react";
import { Component } from "react";
import styled from "styled-components";

import githubCatIcon from '../../images/icons/github-cat.svg'
import linkedinIcon from '../../images/icons/linkedin.svg'
import telegramIcon from '../../images/icons/telegram.svg'
import instagramIcon from '../../images/icons/instagram.svg'
import youtubeIcon from '../../images/icons/youtube.svg'
import wrapperIcons from '../../images/icons/wrapper-icons.svg'
import Dmitry from '../../images/icons/sticker/sticker-lamp.svg'
import js from '../../images/icons/skills/javascript.svg'
import react from '../../images/icons/skills/react.svg'
import BEM from '../../images/icons/skills/BEM.svg'
import SCSS from '../../images/icons/skills/SCSS.svg'
import redux from '../../images/icons/skills/redux.svg'
import ReactBootstrap  from '../../images/icons/skills/React-Bootstrap.svg'
import styledComponent from '../../images/icons/skills/styled-components.svg'
import tailwind from '../../images/icons/skills/tailwind.svg'
import typescript from '../../images/icons/skills/typescript.svg'

const SectionSkills = styled.div`
    height: 1500px;
    padding-top: 232px;
    position: relative;
`
const WrapperIcons = styled.div`
    position: fixed;
    background: transparent;
    left: -1%;
    display: flex;
    flex-direction: column;
    padding-left: 22px;
    gap: 14px;
    top: 440px;
    z-index: 4;
`
const IconsLink = styled.a `
    background: transparent;
`
const IconsImg = styled.img `
    background: transparent;
    position: relative;
`
const IconLinkYoutube = styled.a `
    background: transparent;
    margin-left: -2px;
`
const Stroke = styled.img`
background: transparent;
    position: absolute;
    bottom: -12px;
    left: 21%;
    backdrop-filter: blur(5px);
`
const MainText = styled.h2 `
    font-size: 45px;
    font-weight: 600;
`
const SpanWord =  styled.span`
    background-image: linear-gradient(170deg, rgba(47,35,250,1) 0%, rgba(4,163,42,1) 61%);
    -webkit-background-clip: text;
    font-stretch: normal;
    letter-spacing: normal;
    -webkit-text-fill-color: transparent;
`
const TitleSkills = styled.h2`
    margin-top: 300px;
    font-size: 30px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 50px;

`
const DmitryImg = styled.img `
    position: absolute;
    bottom: 663px;
    right:  0;
`
const WrapperSkills = styled.div`
    display: flex;
    flex-direction: column;
    width: 90px;
`
const LineSkills = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
`
const SkillDescr = styled.h3`
    font-size: 15px;
    margin-top: 23px;

`
const Divider = styled.div`
    height: 1px;
    width: 70%;
    background-color: #f4f4f4;
    margin: 0 auto;
    margin-top: 50px;
    
`
export default class Skills extends Component {

    render() {
        return(
            <SectionSkills>
                    <WrapperIcons>
                        <Stroke src={wrapperIcons} alt='wrapper-icons'/>
                        <IconsLink href={this.github}><IconsImg src={githubCatIcon} alt="github"/></IconsLink>
                        <IconsLink href={this.linkedin}><IconsImg src={linkedinIcon} alt="linkedin"/></IconsLink>
                        <IconsLink href={this.instagram}><IconsImg src={instagramIcon} alt="instagram"/></IconsLink>
                        <IconsLink href={this.telegram}><IconsImg src={telegramIcon} alt="telegram"/></IconsLink>
                        <IconLinkYoutube href={this.youtube}><IconsImg src={youtubeIcon} alt="youtube"/></IconLinkYoutube>
                    </WrapperIcons>
                <MainText>
                    I got all my <SpanWord>skills</SpanWord> from mentored courses. <br/>
                    I focused on the frontend the most. Now I know frontend <br/> language, preprocessors, frameworks, and libraries.
                </MainText>
                <TitleSkills>My skills</TitleSkills>
                <DmitryImg src={Dmitry} alt='Dmitry-Konovets'/>
                <LineSkills>
                <WrapperSkills>
                    <img src={js} alt=""/>
                    <SkillDescr>10+ projects
                        since 2023.09</SkillDescr>
                </WrapperSkills>
                <WrapperSkills>
                    <img src={react} alt=""/>
                    <SkillDescr>10+ projects
                        since 2023.09</SkillDescr>
                </WrapperSkills>
                <WrapperSkills>
                    <img src={redux} alt=""/>
                    <SkillDescr>10+ projects
                        since 2023.09</SkillDescr>
                </WrapperSkills>
                <WrapperSkills>
                    <img src={typescript} alt=""/>
                    <SkillDescr>10+ projects
                        since 2024.02</SkillDescr>
                </WrapperSkills>
                </LineSkills>
                <Divider/>
                <LineSkills>
                <WrapperSkills>
                    <img src={SCSS} alt=""/>
                    <SkillDescr>10+ projects
                        since 2023.09</SkillDescr>
                </WrapperSkills>
                <WrapperSkills>
                    <img src={styledComponent} alt=""/>
                    <SkillDescr>4 projects
                        since 2023.08</SkillDescr>
                </WrapperSkills>
                <WrapperSkills>
                    <img src={BEM} alt=""/>
                    <SkillDescr>10+ projects
                        since 2023.09</SkillDescr>
                </WrapperSkills>
                </LineSkills>
            </SectionSkills>
        )
    }

}