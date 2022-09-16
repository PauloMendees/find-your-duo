import styled from "styled-components";

type Props = {
    textAlign?: 'center' | 'left' | 'right' | 'justify'
    fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'bold' | 'bolder' | 'lighter'
    color?: 'string'
    marginTop?: string
    marginBottom?: string
    marginRight?: string
    marginLeft?: string
}

export const H3 = styled.h3<Props>`
  font-size: 18px;
  min-height: 38px;
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  color: ${(props) => props.color ? props.color : props.theme.text};
  text-align: ${props => props.textAlign};
  font-weight: ${props => props.fontWeight};
  @media (min-width: 600px) {
    font-size: 18px;
  }
  @media (min-width: 1080px) {
    font-size: 20px;
  }

  @media (min-width: 1344px) {
    font-size: 24px;
  }

  @media (max-width: 600px) {
    text-align: center;
  }
`;
