import styled, { css } from "styled-components";

export const Remove = styled.div`
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemLayout = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
  height: 48px;
  &:hover {
    ${Remove} {
      display: flex;
    }
  }
`;

export const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  flex: 1;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

export const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-left: 8px;
  cursor: pointer;
  ${(props: { done: boolean }) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

export const EditIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-left: 8px;
  cursor: pointer;
`;

export const TodoText = styled.div`
  flex: 1;
  font-size: 18px;
  color: #495057;
  padding: 11px;
  ${(props: { done: boolean }) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;
export default TodoItemLayout;
