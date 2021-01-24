import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const AppLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
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
export { AppLayout, GlobalStyle };
