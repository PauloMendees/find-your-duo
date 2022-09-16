import styled from "styled-components";

export const Paper = styled.div<{fullwidth?: boolean}>`
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 24px;
    padding-bottom: 25px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: ${props => props.theme.paper};
    width: ${props => props.fullwidth ? '100%' : 'auto'};
`