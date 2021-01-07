import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListWrapper = styled.div`
  border-top: 1px solid #979b97;
  margin-top: 50px;
  /* width: 20%; */
`;

export const PastaListWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  h1 {
    color: ${(props) => props.theme.mainColor};
    margin-top: 100px;
  }
`;

export const ItemWrapper = styled.div`
  text-align: center;
  padding: 7px;
  img {
    width: 22em;
    height: 21.5em;
    display: block;
  }

  p {
    display: inline-flex;
    padding-top: 5px;
    font-weight: bold;
  }
`;

export const ItemStyle = styled.li`
  color: #264653;
`;
export const TitleStyle = styled.h1`
  margin-left: 200px;
`;
export const DetailWrapper = styled.div`
  margin: auto;
  margin-top: 1em;
  text-align: center;
  img {
    width: 23em;
  }

  p {
    margin-top: 20px;
    vertical-align: middle;
    text-align: center;
  }
`;

export const LinkStyle = styled(Link)`
  color: red;
  cursor: pointer;
  margin: 100px auto auto 30px;
  float: left;
  button {
    border-radius: 5px;
    padding: 6px;
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.backgroundColor};
    :hover {
      background-color: ${(props) => props.theme.backgroundColor};
      color: ${(props) => props.theme.mainColor};
    }
  }
`;
