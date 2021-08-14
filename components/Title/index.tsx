import React from 'react';

import { HeadingH1, HeadingH2, HeadingH3, HeadingH4, Props } from './styles';

export interface TitleProps extends Props {
  size?: 'h1' | 'h2' | 'h3' | 'h4'
}

const Title: React.FC<TitleProps> = ({size, children, ...rest}) => {
 switch (size) {
  case 'h1':
    return <HeadingH1 {...rest}>{children}</HeadingH1>
  
  case 'h2':
    return <HeadingH2 {...rest}>{children}</HeadingH2>
  
  case 'h3':
    return <HeadingH3 {...rest}>{children}</HeadingH3>
  
  case 'h4':
    return <HeadingH4 {...rest}>{children}</HeadingH4>
 
   default:
    return <HeadingH1 {...rest}>{children}</HeadingH1>
 }
}

export default Title;