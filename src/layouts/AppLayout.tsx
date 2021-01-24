import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

const AppLayout = styled.div`
    display: flex;
    margin: auto;
    border-radius: 24px;
    width: 450px;
    height: 90vh;
    background-color: white;
`;

const GlobalStyle = createGlobalStyle`
    body, html, #app {
        width: 100%;
        height: 100%;
        margin: 0;
        position: relative;
    }
    #app {
        display: flex;
        background-color: #e9ecef;;
    }
`;
export {AppLayout, GlobalStyle};