import Link from 'next/link';
import React from 'react';
import { StyledLinkButtom, StyledLinkButtomProps} from './styles';

export interface LinkButtomProps extends StyledLinkButtomProps {
    title: string;
    href: string;
    newTable?: boolean
}

export const LinkButtom: React.FC<LinkButtomProps> = ({title, href, bgColor, newTable}) => {
  return (
    <Link href={href} passHref>
      <StyledLinkButtom href={href} bgColor={bgColor} target={newTable? 'blank' : '_self'}>
        {title}
      </StyledLinkButtom>
    </Link>
  )
}