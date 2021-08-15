import { lighten } from "polished";
import styled from "styled-components";
export type RoundedIconButtonProps = {
  bg: string;
};
export const StyledRoundedIconButton = styled.a<RoundedIconButtonProps>`
  width: 60px;
  height: 60px;

  background: ${(props) => props.bg};
  padding: 10px;
  border-radius: 50%;
  color: #fff;

  transition: all 0.2s ease-in-out;

  &:hover {
    color: #fff;
    background: ${(props) => lighten(0.1, props.bg)};
  }
`;
