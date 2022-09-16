import styled from "styled-components";

export const ContentDiv = styled.div`
  width: "100%";
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 38px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;
