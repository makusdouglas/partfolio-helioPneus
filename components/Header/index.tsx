import React from 'react';
import Image from 'next/image'
import ContainerDefault from '../ContainerDefault';
import { LinkButtom } from '../LinkButtom';

import { HeaderContainer, LogoContainer, NavContainer } from './styles';
import Logo from '../../public/assets/heliopneus_logo.png'
import { css } from 'styled-components';
import PhoneNumber, { DefaultMessage } from '../../constants/whatsapp';

const Header: React.FC = () => {
    const StyleMasteContainer = css`
        position: fixed;
        z-index: 100;
        height: auto;
        border-bottom: 1px solid #444;

        `
    const StyleInnerContainer = css`
        height: auto;
    `

  return (
      <ContainerDefault
        height={120}
        isPixel
        styleMasterContainer={StyleMasteContainer}
        styleInnerContainer={StyleInnerContainer}
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
                    href='#inicio'
                />
                <LinkButtom
                    title='Catálogo'
                    href='#products'
                />
                <LinkButtom
                    title='Onde encontrar?'
                    href='#'
                />
                <LinkButtom
                    title='Contate-nos'
                    href={`https://api.whatsapp.com/send?phone=${PhoneNumber}&text=${DefaultMessage}`}
                    newTable
                />
              </NavContainer>
          </HeaderContainer>
      </ContainerDefault>
  )
}

export default Header;