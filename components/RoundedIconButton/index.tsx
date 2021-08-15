import React from 'react';
import Link from 'next/link'

import { StyledRoundedIconButton, RoundedIconButtonProps } from './styles';

export interface RoundedIconButtonType extends RoundedIconButtonProps {
    link: string
}

export const RoundedIconButton: React.FC<RoundedIconButtonType> = ({children, link, ...rest}) => {
  return (
    <Link href={link} passHref>
      <StyledRoundedIconButton {...rest} target='_blank' >
          {children}
      </StyledRoundedIconButton>
    </Link>
  )
}