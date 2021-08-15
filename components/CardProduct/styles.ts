import { lighten } from "polished";
import styled from "styled-components";

type CardProps = {
  inStock?: boolean;
};

export const Card = styled.article<CardProps>`
  max-width: 300px;
  /* max-height: 500px; */
  background: ${(props) => lighten(0.04, props.theme.color.bgSecondary)};
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  padding-bottom: 40px;

  box-shadow: 2px 4px 8px #111;
  border: 1px solid #555;
`;

export const ContentContaier = styled.div<CardProps>`
  margin: 10px;

  h3 {
    color: #fff;
    font-weight: bold;
  }
  strong {
    font-family: "Roboto Mono", monospace;
    font-weight: 700;
    font-size: ${(props) => props.theme.fontSizes.h4};
  }

  span {
    display: block;
    color: ${(props) =>
      props.inStock ? props.theme.color.success : props.theme.color.danger};
    font-size: ${(props) => props.theme.fontSizes.h4 * 0.75}px;
  }
`;
type LinkButtomProps = {
  disabled?: boolean;
};
export const ButtomFooter = styled.a<LinkButtomProps>`
  position: absolute;
  bottom: 0;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;

  background: ${(props) => props.theme.color.primary};
  color: #fff;
  padding: 5px;
  border: 0;
  svg {
    margin-right: 4px;
  }
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${(props) => lighten(0.1, props.theme.color.primary)};
    color: #fff;
  }
`;
