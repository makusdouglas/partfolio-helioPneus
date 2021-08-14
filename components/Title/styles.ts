import styled from "styled-components";

export type Props = {
  customColor?: string;
};

export const HeadingH1 = styled.h1<Props>`
  font-size: ${(p) => p.theme.fontSizes.h1}px;
  color: ${(p) => (p.customColor ? p.customColor : p.theme.color.text)};
`;
export const HeadingH2 = styled.h2<Props>`
  font-size: ${(p) => p.theme.fontSizes.h2}px;
  color: ${(p) => (p.customColor ? p.customColor : p.theme.color.text)};
`;
export const HeadingH3 = styled.h3<Props>`
  font-size: ${(p) => p.theme.fontSizes.h3}px;
  color: ${(p) => (p.customColor ? p.customColor : p.theme.color.text)};
`;
export const HeadingH4 = styled.h4<Props>`
  font-size: ${(p) => p.theme.fontSizes.h4}px;
  color: ${(p) => (p.customColor ? p.customColor : p.theme.color.text)};
`;
