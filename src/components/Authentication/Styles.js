import styled from "styled-components";

export const SpanStyled = styled.span`
  /* color: grey; */
  font-size: 12px;
`;
export const InputStyled = styled.input`
  padding: 3px;
  width: 19rem;
  margin-left: auto;
  margin-right: auto;
`;
export const LabelStyled = styled.label`
  color: ${(props) => props.theme.mainColor};
  float: left;
`;
export const TitleStyled = styled.h4`
  color: ${(props) => props.theme.mainColor};
  text-align: center;
  padding-top: 50px;
  padding-bottom: 30px;
`;
