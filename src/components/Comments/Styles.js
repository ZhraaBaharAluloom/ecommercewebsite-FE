import styled from "styled-components";

export const CommentFormWrapper = styled.div`
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

export const CommentListWrapper = styled.div`
  height: 10em;
  width: 17em;
  overflow: auto;
  border: 0.4px solid #d6d6d6;
  padding: 1em;
  margin-right: auto;
  margin-left: auto;
  text-align: left;
`;
// export const TextareaStyle = styled.textarea`
//   border: none;
// `;
