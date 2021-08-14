import React from 'react';
import { LinkButtom } from '../../components/LinkButtom';
import Title from '../../components/Title';

import { Container } from './styles';

const Presentation: React.FC = () => {
  return (
      <Container>
          <section>
            <Title>Precisando de um pneu?</Title>

            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.</p>
            <LinkButtom
                        title='Contate-nos'
                        href='#'
                        bgColor
                    />
          </section>
      </Container>
  )
}

export default Presentation;