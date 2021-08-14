import React from 'react'
import ContainerDefault from '../components/ContainerDefault'
import Presentation from '../templates/Presentation'
import { Products } from '../templates/Products'

export default function Home() {
  return( 
    <>
    <ContainerDefault>
      <Presentation/>
    </ContainerDefault>
    <ContainerDefault bg='secondary'>
      <Products/>
    </ContainerDefault>
    </>
    )
}
