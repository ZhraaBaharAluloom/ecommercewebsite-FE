import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListWrapper = styled.div`
  margin-top: 50px;
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
  margin-left: auto;
  margin-right: auto;
  margin-top: 5em;
  text-align: center;
  color: ${(props) => props.theme.backgroundColor};
  img {
    width: 100%;
    height: 100%;
  }

  p {
    text-align: center;
    font-weight: bold;
    border: 1px;
    /* width: 20em; */
    margin: 1em auto auto auto;
    &.shop-name {
      margin-bottom: 3em;
      color: ${(props) => props.theme.mainColor};
    }
  }
  h5 {
    margin-top: 1em;
  }
`;

export const InputFieldStyle = styled.input`
  border: 1px solid grey;
  border-radius: 5px;
  width: 4em;
  padding-left: 10px;
  margin: auto;
  margin-bottom: 5px;
  :hover {
    border-color: #aa7788;
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
