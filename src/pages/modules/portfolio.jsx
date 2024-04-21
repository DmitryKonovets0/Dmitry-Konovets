import * as React from "react";
import { Component } from "react";
import styled from "styled-components";

import bubble from '../../images/icons/bubble/third-section/Ellipse 1.svg'
import Dmitry from '../../images/icons/sticker/sticker-macbook.svg'
import line from '../../images/line/lines.svg'
import githubCatIcon from '../../images/icons/github-cat.svg'
import ProjectImg from '../../images/icons/project-img.svg'

const SectionPortfolio = styled.div`
    height: 1970px;
    padding-top: 351px;
    position: relative;
    z-index: 3;
`
const PortfolioText = styled.h2`
    font-size: 45px;
    font-weight: 600;
    position: relative;
    z-index: 2;
    background-color: transparent;
`
const SpanText = styled.span`
    background-image: linear-gradient(170deg, rgba(47,35,250,1) 0%, rgba(4,163,42,1) 61%);
    -webkit-background-clip: text;
    font-stretch: normal;
    letter-spacing: normal;
    -webkit-text-fill-color: transparent;
`
const Bubble = styled.img`
    position: absolute;
    top: 517px;
    z-index: 0;
    right: -6%;
`
const Title = styled.h2`
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    margin-top: 300px;
    background: transparent;
`
const Line = styled.img`
    position: absolute;
    z-index: -1;
    left: -124px;
    top: 780px;
    width: 116%;
`
const DmitryImg = styled.img`
    position: absolute;
    top: 950px;
    left: 0;
    z-index: 2;
    background: transparent;
`
const WrapperButton = styled.div`
    background: transparent;
    display: flex;
    justify-content: center;
    margin-top:60px ;
    margin-bottom: -60px;
`
const ButtonP = styled.div`
    width: 190px;
    height: 35px;
    background: #fff;
    color: black;
    font-size: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ButtonW = styled.div`
    width: 190px;
    height: 35px;
    background: #fff;
    color: black;
    font-size: 20px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const WrapperProject = styled.div`
    position: relative;
    width: 610px;
    margin: 120px auto 0;
    height: 295px;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border: solid 2px #f4f4f4;
    background-color: rgba(244, 244, 244, 0.03);
    padding: 40px 85px;
    z-index: 2;
`
const ProjectTitle = styled.div`
    font-size: 30px;
    font-weight: 500;
    background: transparent;
    text-align: center;

`
const ProjectDescr = styled.div`
    text-align: center;
    font-size: 20px;
    margin-top: 14px;
    font-weight: 300;
    background: transparent;
`
const ProjectGithub = styled.img`
    background: none;
    display: block;
    margin: 10px auto 0;

`
const ProjectPrevR = styled.img`
    position: absolute;
    z-index: 3;
    bottom: -20px;
    right: -197px;
    background: none;
`
const ProjectPrevL = styled.img`
    position: absolute;
    z-index: 3;
    bottom: -20px;
    left: -197px;
    transform: rotate(328deg);
    background: none;
`
export default class Portfolio extends Component {

    render() {
        return(
            <SectionPortfolio id="portfolio">
                <Bubble  src={bubble}></Bubble>
                <PortfolioText >
                    During my study, I added a few projects to my <SpanText>portfolio</SpanText>. Here are projects that I did in the courses and also ones that I developed on my own for practice. Among them are landing pages and portfolios that include various
                    technologies and functions.
                </PortfolioText>
                <Title>PORTFOLIO</Title>
                <Line src={line}></Line>
                <DmitryImg src={Dmitry}></DmitryImg>
                <WrapperButton>
                    <ButtonW>Work</ButtonW>
                    <ButtonP>Personal</ButtonP>
                </WrapperButton>
                <WrapperProject>
                    <ProjectTitle>Project Name</ProjectTitle>
                    <ProjectDescr>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A corporis deleniti illo minus modi molestiae pariatur temporibus. Esse magni maxime omnis quam quis quo repellendus sit. Aut dolores numquam quidem.</ProjectDescr>
                    <a href="#"><ProjectGithub src={githubCatIcon}></ProjectGithub></a>
                    <ProjectPrevR src={ProjectImg}></ProjectPrevR>
                </WrapperProject>
                <WrapperProject>
                    <ProjectTitle>Project Name</ProjectTitle>
                    <ProjectDescr>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A corporis deleniti illo minus modi molestiae pariatur temporibus. Esse magni maxime omnis quam quis quo repellendus sit. Aut dolores numquam quidem.</ProjectDescr>
                    <a href="#"><ProjectGithub src={githubCatIcon}></ProjectGithub></a>
                    <ProjectPrevL src={ProjectImg}></ProjectPrevL>
                </WrapperProject>
            </SectionPortfolio>
        )
    }
}

