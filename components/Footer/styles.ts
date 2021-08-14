import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex: 1;
  height: 300px;
  background: ${(props) => props.theme.color.primary};
`;
