import React, { useState } from 'react';

import { 
    Container, 
    GroupContainer, 
    GroupTitleContainer, 
    CardsContainer 
} from './styles';
import {products, Groups} from '../../constants/products';
import { CardProduct } from '../../components/CardProduct';
import {Dropdown, DropdownButton} from 'react-bootstrap'

import PneuImage from '../../public/assets/pneu.png'
import Title from '../../components/Title';


export const Products: React.FC = () => {
    const [selectedGroup, setSelectedgroup] = useState<Groups | 0>(0);
  return (
      <Container>
          <div id='main-title'>
            <Title size='h1'>Catálogo</Title>
            <DropdownButton
            title='Filtrar'
            variant='dark'
            drop={'down'}
            >
                    <Dropdown.Item  onSelect={() => setSelectedgroup(0)}>Todos</Dropdown.Item>
                    {products.map(groups => (
                        <Dropdown.Item
                        key={groups.group} 
                        onSelect={() => setSelectedgroup(groups.group)}
                        active={groups.group === selectedGroup}
                        >Aro {groups.group}"</Dropdown.Item>
                    ))}
            </DropdownButton>
          </div>
          <p>*Obs: Imagens meramente ilustrativas</p>
          {products.map(
              group => selectedGroup === 0 ? 
              (              
                <GroupContainer key={group.group}>
                    <GroupTitleContainer>
                        <Title size='h2'>Pneu Aro {group.group}"</Title>
                        <hr />
                    </GroupTitleContainer>
                    <CardsContainer>
                        {group.products.length > 0? 
                        group.products.map(product => (
                            <CardProduct
                                key={product.id}
                                title={product.name}
                                value={product.value}
                                inStock={product.inStock}
                                imageSource={PneuImage}
                            />
                        ))
                        :
                        <span>Não há produtos</span>
                        }

                    </CardsContainer>
                </GroupContainer>
                )
                : selectedGroup === group.group && (              
                    <GroupContainer key={group.group}>
                        <GroupTitleContainer>
                            <Title size='h2'>Pneu Aro {group.group}"</Title>
                            <hr />
                        </GroupTitleContainer>
                        <CardsContainer>
                            {group.products.length > 0? 
                            group.products.map(product => (
                                <CardProduct
                                    key={product.id}
                                    title={product.name}
                                    value={product.value}
                                    inStock={product.inStock}
                                    imageSource={PneuImage}
                                />
                            ))
                            :
                            <span>Não há produtos</span>
                            }
    
                        </CardsContainer>
                    </GroupContainer>
                    )
          )}
      </Container>
  )
}
