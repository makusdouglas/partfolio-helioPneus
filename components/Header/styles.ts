import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 5px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const LogoContainer = styled.div``;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  a {
    margin-right: 5px;
  }

  @media (max-width: 660px) {
    justify-content: flex-end;
  }

  @media (max-width: 520px) {
    a {
      font-size: ${(props) => props.theme.fontSizes.h4 * 0.9}px;
    }
  }
`;
