import styled from "styled-components";

export const SpanStyled = styled.span`
  color: red;
`;
export const InputStyled = styled.input`
  padding: 3px;
`;
export const LabelStyled = styled.label`
  color: ${(props) => props.theme.backgroundColor};
`;
export const TitleStyled = styled.h4`
  color: ${(props) => props.theme.backgroundColor};
  text-align: center;
  padding: 10px;
`;
