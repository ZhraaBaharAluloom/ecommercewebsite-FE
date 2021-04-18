import styled from "styled-components";

export const TextWrapper = styled.div`
  @media screen and (max-width: 800px) {
    margin: 5em 2em auto 2em;
  }
  /* @media screen and (max-width: 900px) and (min-width: 450px),
    (min-width: 1100px) {
  } */
  margin: 10em 10em 0em 10em;

  justify-content: center;
  border: 10px solid grey;
  border-radius: 20px;
  padding: 2em;
  border-style: double;
  background-color: #f4e3b8;
  p {
    text-align: justify;
    text-align-last: center;
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.theme.mainColor};
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  }
`;
