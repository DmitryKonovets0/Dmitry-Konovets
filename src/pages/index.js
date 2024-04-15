import * as React from "react";
import Introduce from "./modules/introduce";
import { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    width:90%;
    margin: 0 auto;
`
export default class IndexPage extends Component {
    render() {
        return (
            <Container>
                <style>
                    {`
                        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300,500,600;1,600&display=swap');
                        * {
                          font-family: "Open Sans", sans-serif;
                          font-style: normal;
                          font-weight: 500;
                          margin: 0;
                          padding: 0;
                          box-sizing: border-box;
                          text-transform: uppercase;
                          background-color: #202020;
                        }
                    `}
                </style>
                <Introduce/>
            </Container>
        );
    }
}

export const Head = () => <title>Home Page</title>;
