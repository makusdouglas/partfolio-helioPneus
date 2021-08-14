import Link from 'next/link';
import React from 'react';
import { StyledLinkButtom, StyledLinkButtomProps} from './styles';

export interface LinkButtomProps extends StyledLinkButtomProps {
    title: string;
    href: string;
}

export const LinkButtom: React.FC<LinkButtomProps> = ({title, href, bgColor}) => {
  return (
    <Link href={href} passHref>
      <StyledLinkButtom href={href} bgColor={bgColor}>
        {title}
      </StyledLinkButtom>
    </Link>
  )
}