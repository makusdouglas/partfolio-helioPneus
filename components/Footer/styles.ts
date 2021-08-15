import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 200px;
  padding: 20px 10px;
  position: relative;

  display: flex;
  flex-direction: column;

  & > #author {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    text-align: center;
  }
`;
