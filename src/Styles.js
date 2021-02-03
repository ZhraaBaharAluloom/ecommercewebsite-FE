import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

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
  /* display: flex; */
  /* flex-wrap: wrap; */
  margin: 10em 5em 0em 5em;
  padding: 20px;
  p {
    display: block;
    color: grey;
    font-size: 15px;
  }
`;

export const CartLinkStyle = styled(Link)`
  display: flex;
  float: right;
  margin: 1em 0.4em auto auto;
  color: grey;
`;
