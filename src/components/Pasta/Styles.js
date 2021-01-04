import { Link } from "@material-ui/core";
import styled from "styled-components";

export const ListWrapper = styled.div`
  border-top: 1px solid #979b97;
  margin-top: 50px;
`;

export const PastaListWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;

  h1 {
    color: ${(props) => props.theme.mainColor};
    margin-top: 100px;
  }
`;

export const ItemWrapper = styled.div`
  text-align: center;
  margin: auto;
  img {
    width: 22em;
    height: 22em;
    padding: 5px;
    display: block;
  }

  p {
    display: inline-flex;
    padding-right: 20px;
  }
`;

export const ItemStyle = styled.li`
  color: #264653;
`;
export const TitleStyle = styled.h1`
  margin-left: 200px;
`;
export const DetailWrapper = styled.div`
  /* display: block; */
  margin: auto;
  margin-top: 5em;
  text-align: center;
  img {
    width: 22em;
    /* float: left; */
    /* margin: 20px auto auto 10px; */
  }

  p {
    margin-top: 20px;
    vertical-align: middle;
    text-align: center;
  }
`;

export const LinkStyle = styled(Link)`
  color: red;
`;
