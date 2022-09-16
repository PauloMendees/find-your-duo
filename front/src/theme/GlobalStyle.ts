import { createGlobalStyle } from "styled-components";

//Resetando o CSS
export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
  border: none;
}
`;