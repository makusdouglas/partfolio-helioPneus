import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { Card, ContentContaier, ButtomFooter } from './styles';
import { HeadingH3 } from '../Title/styles';
import { FaPhone } from 'react-icons/fa'
import { formatPrice } from '../../utils/formatPrice';
import PhoneNumber from '../../constants/whatsapp';

export interface CardProductProps {
 title: string
 value: number
 inStock?: boolean,
 imageSource: StaticImageData

}

export const CardProduct: React.FC<CardProductProps> = ({
    title,
    value,
    imageSource,
    inStock
}) => {
  return (
      <Card inStock={inStock}>
          <Image
            src={imageSource}
            quality={100}
            />
            <ContentContaier inStock={inStock}>
            <HeadingH3>{title}</HeadingH3>
            <span>{inStock? 'DISPONÍVEL': 'FORA DE ESTOQUE'}</span>
            <strong>{formatPrice(value)}</strong>
            
            </ContentContaier>
            <Link 
                href={`https://api.whatsapp.com/send?phone=${PhoneNumber}&text=${encodeURI('Ola, tenho interesse no ' + title + ', gostaria de obter mais informações. 😉')}`}
                passHref
                >
                <ButtomFooter disabled={!inStock} target='_blank'> 
                    <FaPhone/>
                    Solicitar
                </ButtomFooter>
            </Link>            
      </Card>
  )
}
