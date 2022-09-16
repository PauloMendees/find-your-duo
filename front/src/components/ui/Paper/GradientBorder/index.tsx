import styled from "styled-components";

export const GradientBorder = styled.div<{fullwidth?: boolean}>`
    background: linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 44.57%);
    padding-top: 4px;
    width: auto;
    max-width: 1344px;
    width: ${props => props.fullwidth ? '100%' : 'auto'};
    border-radius: 8px;
`