import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
body {
  /* margin: 0; */
  /* background: url("https://img.freepik.com/free-photo/ingredients-italian-pasta-black-background_23-2147926112.jpg?size=626&ext=jpg"); */
  /* background: url("https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?cs=srgb&dl=pexels-pixabay-54455.jpg&fm=jpg"); */
  /* background: url("https://cdn2.photostockeditor.com/c/2612/food-close-up-photo-of-yellow-spiral-pasta-spilled-jar-jar-jar-image.jpg"); */
  /* background: url("https://images.pexels.com/photos/5794882/pexels-photo-5794882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"); */
  background: url("https://images.unsplash.com/photo-1549896443-e6d347606bf2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80");
  height: 1vh;

  background-attachment: fixed;
  /* background-position: center center; */
  background-size: cover;
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
  @media screen and (max-width: 700px) {
    margin: 10em 2em 0em 2em;
  }
  /* @media screen and (max-width: 900px) and (min-width: 550px),
    (min-width: 1100px) {
  } */
  margin: 10em 20em 0em 20em;
  text-align: center;
  padding: 20px;
  p {
    display: block;
    color: ${(props) => props.theme.backgroundColor};
    font-size: 15px;
  }
`;
