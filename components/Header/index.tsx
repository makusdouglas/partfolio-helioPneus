import React from 'react';
import Image from 'next/image'
import ContainerDefault from '../ContainerDefault';
import { LinkButtom } from '../LinkButtom';

import { HeaderContainer, LogoContainer, NavContainer } from './styles';
import Logo from '../../public/assets/heliopneus_logo.png'

const Header: React.FC = () => {

  return (
      <ContainerDefault
        height={120}
        isPixel
      >
          <HeaderContainer>
              <LogoContainer>
                  <Image
                    src={Logo}
                    height={50}
                    width={150}
                    quality={80}
                    />
              </LogoContainer>
              <NavContainer>
                <LinkButtom
                    title='Inicio'
                    href='#'
                />
                <LinkButtom
                    title='Catálogo'
                    href='#'
                />
                <LinkButtom
                    title='Onde encontrar?'
                    href='#'
                />
                <LinkButtom
                    title='Contate-nos'
                    href='#'
                />
              </NavContainer>
          </HeaderContainer>
      </ContainerDefault>
  )
}

export default Header;