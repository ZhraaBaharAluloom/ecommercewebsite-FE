import styled from "styled-components";

export const SearchbarWrapper = styled.div`
  margin-top: 5em;
  display: flex;
  justify-content: center;
`;
export const SearchbarWrapper2 = styled.div`
  width: 18rem;
  display: flex;
`;
export const SearchbarStyled = styled.input`
  text-align: center;
  width: 20rem;
  border: 3px solid ${(props) => props.theme.mainColor};
  border-right: none;
  padding: 15px;
  height: 30px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
`;
export const SearchButtonStyle = styled.p`
  width: 4rem;
  border: 1px solid ${(props) => props.theme.mainColor};
  background: ${(props) => props.theme.mainColor};
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
  height: 36px;
`;
