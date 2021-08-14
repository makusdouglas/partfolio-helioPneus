import React from 'react';

import { Container, InnerContainer, ContainerBaseProps } from './styles';

const ContainerDefault: React.FC<ContainerBaseProps> = ({ children, ...rest }) => {
    return (
        <Container {...rest}>
            <InnerContainer {...rest}>
                {children}
            </InnerContainer>
        </Container>
    )
}

export default ContainerDefault;