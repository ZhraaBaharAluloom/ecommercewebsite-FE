import styled from "styled-components";

export const AddButtonStyle = styled.p`
  width: 10em;
  border: 1px solid ${(props) => props.theme.mainColor};
  border-radius: 10px;
  background: ${(props) => props.theme.mainColor};
  text-align: center;
  color: #fff;
  cursor: pointer;
  margin: auto;
  padding: 5px;
  font-size: 12px;
  float: right;
`;

export const UpdateShopButtonStyle = styled.p`
  cursor: pointer;
  color: #fff;
  background-color: #a2b9ae;
  display: -moz-inline-box;
  border: 4px;
  width: 9rem;
  border-radius: 5px;
  margin: auto;
  padding: 5px;
  margin-bottom: 2px;
`;
export const DeleteShopButtonStyle = styled.p`
  cursor: pointer;
  color: #fff;
  background-color: #890613;
  display: -moz-inline-box;
  border: 4px;
  width: 9rem;
  border-radius: 5px;
  margin: auto;
  padding: 5px;
`;

// Signup & Sign in styles

export const SignupButtonStyled = styled.button`
  font-size: 15px;
  color: ${(props) => props.theme.mainColor};
  cursor: pointer;
  margin-right: 10px;
  :hover {
    padding: 6px 18px;
    transition: all 0.3s ease-out;
    background-color: transparent;
    color: ${(props) => props.theme.mainColor};
    border-radius: 4px;
    border: 2px solid var(--primary);
    transition: all 0.3s ease-out;
  }
`;
export const SigninTextStyled = styled.button`
  font-size: 15px;
  color: ${(props) => props.theme.mainColor};
  cursor: pointer;
  margin-right: 2px;
  :hover {
    padding: 6px 18px;
    transition: all 0.3s ease-out;
    background-color: transparent;
    color: ${(props) => props.theme.mainColor};
    border-radius: 4px;
    border: 2px solid var(--primary);
    transition: all 0.3s ease-out;
  }
`;
export const SigninButtonStyled = styled.p`
  :root {
    --primary: #1888ff;
  }
  margin-top: 15px;
  padding: 8px 20px;
  border-radius: 4px;
  outline: none;
  border: none;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  background-color: var(--primary);

  :hover {
    padding: 6px 18px;
    transition: all 0.3s ease-out;
    background-color: transparent;
    color: #fff;
    border-radius: 4px;
    border: 2px solid var(--primary);
    transition: all 0.3s ease-out;
  }
`;
