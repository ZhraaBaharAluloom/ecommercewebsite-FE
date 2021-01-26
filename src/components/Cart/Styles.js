import styled from "styled-components";

export const TotalPriceStyle = styled.p`
  margin: 2em;
  font-family: "Times New Roman", Times, serif;
  color: ${(props) => props.theme.backgroundColor};
  text-align: center;
`;

export const Wrapper = styled.div`
  width: 180px;
  height: 30px;
  background-color: black;
  position: relative;
  animation-name: example;
  animation-duration: 4s;
  @keyframes example {
    0% {
      background-color: red;
      left: 0px;
      top: 0px;
    }

    25% {
      background-color: purple;
      left: 200px;
      top: 0px;
    }
    50% {
      background-color: blue;
      left: 200px;
      top: 200px;
    }
    75% {
      background-color: grey;
      left: 0px;
      top: 200px;
    }
    100% {
      background-color: navajowhite;
      left: 0px;
      top: 0px;
    }
  }
`;

export const CartItemWrapper = styled.div`
  text-align: center;
  padding: 7px;
  margin-top: 4em;

  img {
    width: 22em;
    height: 21.5em;
    /* display: block; */
  }

  p {
    /* display: inline-flex; */
    padding-top: 5px;
    font-weight: bold;
  }
`;

export const InputFieldStyle = styled.input`
  border: 1px solid grey;
  border-radius: 5px;
  width: 3.5em;
  padding-left: 10px;
  margin: auto;
  margin-bottom: 5px;
  :hover {
    border-color: #aa7788;
  }
`;

export const RemoveItemButton = styled.button`
  width: 9em;
  border: 1px solid ${(props) => props.theme.mainColor};
  border-radius: 10px;
  background: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
  cursor: pointer;
  padding: 5px;
  font-size: 12px;
  font-weight: bold;
  :hover {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.mainColor};
  }
`;
