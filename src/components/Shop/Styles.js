import styled from "styled-components";

export const ListWrapper = styled.div`
  /* border-top: 1px solid #979b97; */
  margin-top: 50px;
`;

export const ShopListWrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;

  h1 {
    color: ${(props) => props.theme.mainColor};
    margin-top: 100px;
  }
`;

export const DetailWrapper = styled.div`
  text-align: center;
  margin-top: 10px;
  img {
    width: 100%;
  }
  p {
    padding-top: 10px;
    font-weight: bold;
  }
`;
export const ShopItemWrapper = styled.div`
  img {
    width: 22em;
    height: 22em;
    padding: 5px;
    display: block;
  }
  p {
    text-align: center;
    padding-top: 10px;
  }
  margin-top: 10px;
  border: 1px;
`;
