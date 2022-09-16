import styled from "styled-components";

type Props = {
    textAlign?: 'center' | 'left' | 'right' | 'justify'
    fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'bold' | 'bolder' | 'lighter'
    color?: string
    marginTop?: string
    marginBottom?: string
    marginRight?: string
    marginLeft?: string
}

export const P = styled.p<Props>`
  font-size: 14px;
  min-height: 26px;
  color: ${(props) => props.color ? props.color : props.theme.text};
  text-align: ${props => props.textAlign};
  font-weight: ${props => props.fontWeight};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  @media (min-width: 600px) {
    font-size: 16px;
  }
  @media (min-width: 1080px) {
    font-size: 16px;
  }

  @media (min-width: 1344px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    text-align: center;
  }
`;
