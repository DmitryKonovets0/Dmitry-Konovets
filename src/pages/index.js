import * as React from "react";
import { Component } from "react";
import styled, {createGlobalStyle} from "styled-components";

import Introduce from "./modules/introduce";
import Skills from "./modules/skills";
import Portfolio from "./modules/portfolio";
import Contacts from "./modules/contacts";
import Footer from "./modules/footer";
import ModalWindow from "./modules/modal-window";

const Container = styled.div`
    width: 90%;
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
        overflow: ${props => props.modal ? 'hidden' : "auto"};
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
            clickToggle: false,
            modal: false,
            hideWrapper: false

        };
    }
    changeTheme = () => {
        this.setState({ clickToggle: true });
    }
    openModal = () => {
        this.setState({ modal: true });
    }
    closeModal = (e) => {
        const modal = document.querySelector('#modal')
        if(!modal || !modal.contains(e.target)) {
            this.setState({ modal: false });
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const scrolledPixels = window.scrollY;
        if (scrolledPixels > 390) {
            this.setState({ hideWrapper: true });
        } else {
            this.setState({ hideWrapper: false });
        }
    }
    render() {

        const textColor = this.state.clickToggle === true ? '#202020' : '#f4f4f4'
        const backgroundColor = this.state.clickToggle === true ? '#fff' : '#202020'

        return (
        <Container>
            <GlobalStyle backgroundColor={backgroundColor} textColor={textColor} modal={this.state.modal}/>
            <Introduce clickToggle={this.state.clickToggle} hideWrapper={this.state.hideWrapper} modal={this.state.modal}  openModal={this.openModal} changeTheme={this.changeTheme} />
            <Skills hideWrapper={this.state.hideWrapper}/>
            <Portfolio/>
            <Contacts/>
            <Footer/>
            <ModalWindow modal={this.state.modal} closeModal={this.closeModal}/>
        </Container>
        );
    }
}

export const Head = () => <title>Home Page</title>;
