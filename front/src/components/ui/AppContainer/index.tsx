import styled from "styled-components";

export const AppContainer = styled.div`
    background-image: ${props => props.theme.gradientBg};
    padding-top: 80px;
    padding-left: 48px;
    padding-right: 48px;
    padding-bottom: 80px;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
`