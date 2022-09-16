import styled, { css } from "styled-components";

type Props = {
  isOutlined?: boolean
  padding?: string
  width?: string
}

export const Button = styled.button<Props>`
  background-color: ${(props) =>props.theme.primary};
  color: ${(props) => props.theme.white};
  padding: ${props => props.padding || "10px"};
  display: flex;
  gap: 12px;
  align-items: center;
  border-radius: 6px;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  transition-duration: 200ms;
  min-width: 80px;
  width: ${(props) => props.width};
  justify-content: center;
  :hover {
    opacity: ${(props) => (props.disabled ? 1 : 0.8)};
  }
  ${(props) =>
    props.isOutlined && css`
      background-color: transparent;
      color: ${(props) => props.theme.primary};
      border-style: solid;
      border-width: 1px;
      border-color: ${(props) => props.theme.primary};
    `}
`;