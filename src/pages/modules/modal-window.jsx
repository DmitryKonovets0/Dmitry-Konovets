import React, { Component } from "react";
import styled from "styled-components";

import telegramIcon from '../../images/Telegram.svg'
import emailIcon from '../../images/Email.svg'
import instagramIcon from '../../images/Instagram.svg'
import instagramActive from '../../images/Instagram-active.svg'
import telegramActive from '../../images/Telegram-active.svg'
import emailActive from '../../images/Email-active.svg'

const Wrapper = styled.div`
    width: 550px;
    height: 494px;
    padding: 50px 50px 40px;
    border-radius: 30px;
    position: fixed;
    top: 20vh;
    left: 50vw;
    transform: translate(-50%);
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
    display: flex;
    width: 105px;
    height: 35px;
    justify-content: center;
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
            leaveT: '',
            leave: {
                leaveEmail: 'Leave your email',
                leaveInstagram: 'Leave your nickname',
                leaveTelegram: 'Leave your nickname'
            },
            placeholder: {
                placeholderEmail: 'yourname@gmail.com',
                placeholderInstagram: 'Leave your nickname',
                placeholderTelegram: 'Leave your nickname'
            }
        }
    }
    setActive = (e) => {
        if(e.target === document.querySelector('#email')) {
            this.setState({ email: true });
            this.setState({ leaveT: 'Leave your email' });
        } else if(e.target === document.querySelector('#telegram')) {
            this.setState({ telegram: true });
            this.setState({ leaveT: 'Leave your nickname    ' });
            console.log(2)
        } else if(e.target === document.querySelector('#instagram')) {
            this.setState({ instagram: true });
            console.log(3)
        }
    }
    render() {
        const {email, telegram, instagram} = this.state
        return(
            <Wrapper>
                <Heading>You have a <Span>question</Span>?</Heading>
                <Subheader>Leave it here!</Subheader>
                <QuestionText>How to contact you?</QuestionText>
                <QuestionWrapperIcons>
                    <QuestionIcon onClick={this.setActive} id='email' src={email === true ? emailActive : emailIcon} alt=""/>
                    <QuestionIcon onClick={this.setActive} id='telegram' src={telegram === true ? telegramActive : telegramIcon} alt=""/>
                    <QuestionIcon onClick={this.setActive} id='instagram' src={instagram === true ? instagramActive : instagramIcon} alt=""/>
                </QuestionWrapperIcons>
                <WrapperInput>
                    <InputHeading>{this.state.leaveT}</InputHeading>
                    <InputString type="text" placeholder={this.state.placeholder.placeholderEmail}/>
                </WrapperInput>
                <WrapperInput>
                    <InputHeading>Leave your message</InputHeading>
                    <InputString type="text" placeholder='Hey, Dmytro. Could you tell me...'/>
                </WrapperInput>
                <Btn>
                    submit
                </Btn>
            </Wrapper>
        )
    }
}