import * as React from "react";
import { Component } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

import bubble from '../../images/icons/bubble/footer/Ellipse 1.svg'
import Dmitry from '../../images/icons/sticker/sticker-footer.svg'

const SectionFooter = styled.div`
    display: grid;
    grid-template-columns: 315px 478px;
    grid-column-gap: 440px;
    padding: 38px 5.5% 0;
    position: relative;
    left: -5.5%;
    height: 150px;
    width: 150%;
    box-shadow: 0 -8px 26.5px 0 rgba(0, 0, 0, 0.2);
`, Bubble = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
`, WrapperSections = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 103px);
    grid-template-rows: repeat(2, 24px);
    grid-column-gap: 100px;
    grid-row-gap: 25px;
    position: relative;
    z-index: 2;
    background: transparent;
`, Descr = styled.h3`
    font-size: 20px;
    text-align: right;
    width: 478px;
    margin-top: 15px;
`, DmitryImg = styled.img`
    position: absolute;
    right: 29%;
    bottom: 0;
    z-index: 2;
`,StyledLink = styled(Link)`
    color: inherit;
    cursor: pointer;
    font-size: 20px;
    font-weight: 300;
    text-transform: uppercase;
    &:hover {
        transition: all .2s;
        color: #CACACA;
    }`;
export default class Footer extends Component {
    render() {
        return(
            <SectionFooter>
                <Bubble src={bubble}/>
                <WrapperSections>
                    <StyledLink to="about-me" smooth={true} duration={500} offset={-50} className="link">about me</StyledLink>
                    <StyledLink to="portfolio" smooth={true} duration={500} offset={-50} >portfolio</StyledLink>
                    <StyledLink to="skills" smooth={true} duration={500} offset={-50}>skills</StyledLink>
                    <StyledLink to="contacts" smooth={true} duration={500} offset={-50}>contacts</StyledLink>
                </WrapperSections>
                <Descr>Contact me to get a perfectly optimized website with the cleanest code possible!</Descr>
                <DmitryImg src={Dmitry}></DmitryImg>
            </SectionFooter>
        )
    }
}