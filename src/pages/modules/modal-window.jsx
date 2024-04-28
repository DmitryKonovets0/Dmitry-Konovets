import React, { Component } from "react";
import styled from "styled-components";

import telegramIcon from '../../images/Telegram.svg'
import emailIcon from '../../images/Email.svg'
import instagramIcon from '../../images/Instagram.svg'
import instagramActive from '../../images/Instagram-active.svg'
import telegramActive from '../../images/Telegram-active.svg'
import emailActive from '../../images/Email-active.svg'

const ModalSection = styled.div`
    position: relative;
    z-index: 6;
    display: ${props => props.modal ? 'block' : 'none'};
    animation: ani .4s forwards;
    @keyframes ani {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
`,
Modal = styled.div`
    width: 550px;
    height: ${props => props.elementActive ? '515px' : '275px'};
    padding: 50px;
    transition: .5s all;
    border-radius: 30px;
    position: fixed;
    top: 20vh;
    left: 50vw;
    transform: translate(-50%);
    z-index: 7;
`,
Overlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 6;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.3);
`,
CloseBtnWrapper = styled.div`
    position: absolute;
    background: none;
    right: 500px;
    z-index: 9;
    top: 187px;
    
    
`,  CloseBtn = styled.div`
            background: none;
            width: 20px;
            height: 20px;
            cursor: pointer;
            position: relative;
            &:after,&:before {
                content: '';
                position: absolute;
                width: 1px;
                height: 100%;
                background-color: #a3a3a3;
                left: 9px;
            }
            &:after{
                transform: rotate(-45deg);
                
            }
            &:before{
                transform: rotate(45deg);
            }
`,
Heading = styled.h2`
    font-size: 30px;
    color: #f4f4f4;
    text-align: center;
`,
Span = styled.span`
    background-image: linear-gradient(92deg, #283c86 0%, #45a247 94%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
`,
Subheader = styled.h3`
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
`,
QuestionText = styled.h3`
    font-size: 15px;
    margin-top: 40px;
`,
QuestionWrapperIcons = styled.div`
    width: 160px;
    margin-top: 10px;
    height: 40px;
    display: flex;
    justify-content: space-around;
`,
QuestionIcon = styled.img`
    cursor: pointer;
`,
WrapperInput = styled.div`
    margin-top: 20px;
    display: ${props => props.leave !== '' ? "block" : "none" };
    transition: 5s all;
        animation: ani .9s forwards;
        @keyframes ani {
            0% {opacity:0;}
            100% {opacity:1}
        }
    }
`,
InputHeading = styled.h2`
    font-size: 15px;
`,
InputString = styled.input`
    width: 100%;
    outline: none;
    margin-top: 10px;
    border-radius: 10px;
    border: solid 1px #f4f4f4;
    height: 40px;
    padding: 10px;
`,
Btn = styled.button`
    cursor: pointer;
    display: ${props => props.leave !== '' ? "flex" : "none" };
    width: 105px;
    height: 35px;
    justify-content: center;
    animation: btn 1s forwards;
    @keyframes btn {
        0% {opacity: 0; display: none}
        20% {opacity:.3; display: none}
        100% {opacity: 1; display: flex}
    }
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    background-image: linear-gradient(92deg, #283c86 0%, #45a247 94%);
    font-weight: 500;
    border: none;
    font-size: 18px;
    text-transform: uppercase;
    color: #fff;
    margin-top: 30px;
`
export default class ModalWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: false,
            telegram: false,
            instagram: false,
            elementActive: false,
            leave: '',
            placeholder: ''
        }
    }
    addState = (e) => {
            if(e.target === document.querySelector('#email')) {
                this.setState({ email: true });
                this.setState({ leave: 'Leave your email' });
                this.setState({ placeholder: 'yourname@gmail.com' });
                this.setState({ elementActive: true });
            } else if(e.target === document.querySelector('#telegram')) {
                this.setState({ telegram: true });
                this.setState({ leave: 'Leave your nickname' });
                this.setState({ placeholder: '@Yourname' });
                this.setState({ elementActive: true });
            } else if(e.target === document.querySelector('#instagram')) {
                this.setState({ instagram: true });
                this.setState({ leave: 'Leave your nickname' });
                this.setState({ placeholder: '@Yourname' });
                this.setState({ elementActive: true });
            }
    }
    clearState = () => {
        this.setState({
            email: false,
            telegram: false,
            instagram: false,
            elementActive: false,
            leave: '',
            placeholder: ''});
    }
    setActive = (e) => {
        if(this.state.leave === '') {
            this.addState(e)
        } else {
            this.clearState()
            this.addState(e)
        }
    }
    render() {
        const {email, telegram, instagram, leave} = this.state
        return(
            <ModalSection modal={this.props.modal}>
                <Overlay onClick={this.props.closeModal} >
                    <CloseBtnWrapper id='close' onClick={this.props.closeModal}><CloseBtn></CloseBtn></CloseBtnWrapper>
                    <Modal id='modal' elementActive={this.state.elementActive}>
                        <Heading>You have a <Span>question</Span>?</Heading>
                        <Subheader>Leave it here!</Subheader>
                        <QuestionText>How to contact you?</QuestionText>
                        <QuestionWrapperIcons>
                            <QuestionIcon onClick={this.setActive} id='email' src={email === true ? emailActive : emailIcon} alt=""/>
                            <QuestionIcon onClick={this.setActive} id='telegram' src={telegram === true ? telegramActive : telegramIcon} alt=""/>
                            <QuestionIcon onClick={this.setActive} id='instagram' src={instagram === true ? instagramActive : instagramIcon} alt=""/>
                        </QuestionWrapperIcons>
                        <WrapperInput leave={leave} >
                            <InputHeading>{this.state.leave}</InputHeading>
                            <InputString type="text" placeholder={this.state.placeholder}/>
                        </WrapperInput>
                        <WrapperInput leave={leave} >
                            <InputHeading >Leave your message</InputHeading>
                            <InputString type="text" placeholder='Hey, Dmytro. Could you tell me...'/>
                        </WrapperInput>
                        <Btn leave={leave}>
                            submit
                        </Btn>
                    </Modal>
                </Overlay>
            </ModalSection>

        )
    }
}