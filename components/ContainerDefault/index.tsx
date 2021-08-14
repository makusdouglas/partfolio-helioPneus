import React from 'react';
import { Container, InnerContainer, ContainerBaseProps } from './styles';
interface ContainerPops extends ContainerBaseProps {
}
const ContainerDefault: React.FC<ContainerPops> = ({ 
    children, 
    ...rest 
}) => {
    return (
        <Container {...rest} >
            <InnerContainer {...rest}>
                {children}
            </InnerContainer>
        </Container>
    )
}

export default ContainerDefault;