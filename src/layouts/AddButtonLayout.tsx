import styled from "styled-components";

const HeaderLayout = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  width: 60px;
  height: 60px;
  z-index: 5;
  cursor: pointer;
  font-size: 60px;
  position: absolute;
  left: calc(50% - 30px);
  bottom: -20px;
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-align: center;
`;

export default HeaderLayout;
