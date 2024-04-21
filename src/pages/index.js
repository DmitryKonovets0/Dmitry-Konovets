import * as React from "react";
import { Component } from "react";
import styled, {createGlobalStyle} from "styled-components";

import Introduce from "./modules/introduce";
import Skills from "./modules/skills";
import Portfolio from "./modules/portfolio";
import Contacts from "./modules/contacts";
import Footer from "./modules/footer";

const Container = styled.div`
    width:90%;
    margin: 0 auto;
`
const GlobalStyle = createGlobalStyle`
    * {
        background-color: ${props => props.backgroundColor};
        margin: 0;
        padding: 0;
        font-family: "Open Sans", sans-serif;
        font-style: normal;
        font-weight: 500;
        box-sizing: border-box;
        color: ${props => props.textColor};
    }
    body {
        overflow-x: hidden;
    }
    a{
        background:none;
    }
    
`;
export default class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            t: 0
        };
    }
    changeTState = (newValue) => {
        this.setState({ t: newValue });
    }


    render() {
        const textColor = this.state.t === 1 ? '#202020' : '#f4f4f4'
        const backgroundColor = this.state.t === 1 ? '#fff' : '#202020'

        return (
        <Container>
            <GlobalStyle backgroundColor={backgroundColor} textColor={textColor} />
            <Introduce t={this.state.t} changeTState={this.changeTState} />
                <Skills/>
            <Portfolio/>
            <Contacts/>
            <Footer/>
    </Container>
        );
    }
}

export const Head = () => <title>Home Page</title>;
