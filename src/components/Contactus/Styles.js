import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin-top: 5em;
  border: 1px;
  width: 20em;
  margin-left: auto;
  margin-right: auto;
  p {
    padding-left: 1em;
  }
`;

export const InputStyled = styled.input`
  padding: 3px;
  width: 19rem;
  margin-left: auto;
  margin-right: auto;
`;

export const SubmitButtonStyled = styled.button`
  background-color: ${(props) => props.theme.mainColor};
  border: none;
  width: 100%;
`;
