import React from 'react';
import { LinkButtom } from '../../components/LinkButtom';
import Title from '../../components/Title';
import PhoneNumber, { DefaultMessage } from '../../constants/whatsapp';

import { Container } from './styles';

const Presentation: React.FC = () => {
  return (
      <Container id='inicio'>
          <section>
            <Title>Precisando de um pneu?</Title>

            <p>Temos o pneu remold <strong>FORT TIRES</strong>, o melhor remold do mercado.</p>

            <ul>
              <li>Garantia de 6meses</li>
              <li>Remoldagem com borracha <strong>VIPAL</strong> líder de mercado na América Latina</li>
              <li>Empresa com 6 anos de mercado e distribuição em todo Brasil</li>
              <li>Produto certificado pelo <strong>INMETRO</strong></li>
            </ul>
            <LinkButtom
                        title='Contate-nos'
                        bgColor
                        href={`https://api.whatsapp.com/send?phone=${PhoneNumber}&text=${DefaultMessage}`}
                    newTable
                    />
          </section>
      </Container>
  )
}

export default Presentation;