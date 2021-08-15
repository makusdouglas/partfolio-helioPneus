import React from 'react';
import { Container, InnerContainer, ContainerBaseProps } from './styles';
interface ContainerPops extends ContainerBaseProps {
    id?: string
}
const ContainerDefault: React.FC<ContainerPops> = ({ 
    children,
    id, 
    ...rest 
}) => {
    return (
        <Container {...rest}  id={id}>
            <InnerContainer {...rest}>
                {children}
            </InnerContainer>
        </Container>
    )
}

export default ContainerDefault;