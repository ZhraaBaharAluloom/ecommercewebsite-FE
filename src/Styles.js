import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    background-color: ${(props) => props.theme.backgroundColor};
}
`;

export const ThemeButton = styled.button`
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
  border: 2px solid white;
  border-radius: 5px;
  font-size: 1em;
  margin: 1.25em 4em 3em 1em;
  padding: 0.25em 1em;
  position: fixed;
  font-weight: bold;
`;
export const InstagramIconStyle = styled.div`
  border-top: 1px solid #979b97;
  /* justify-content: center; */
  display: flex;
  /* flex-wrap: wrap; */
  margin-top: 100px;
  padding: 20px;
`;
