import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import React from 'react';

// import { Container } from './styles';

type ProductParams = {
    id: string
}

type ReturnedProps = {
    id: string | undefined,
    name: string,
    description: string
}

export const getStaticProps: GetStaticProps<ReturnedProps, ProductParams> = async ({ params, preview = false, previewData }) => {
    // const data = await getPostAndMorePosts(params.slug, preview, previewData)
    const data: ReturnedProps = {
        description: 'Produto Teste',
        name: 'Pneu aro 14"',
        id: params?.id

    }
    if (!data.id)
        return {
            notFound: true
        }

    return {
        props: {
            id: data.id,
            name: data.name,
            description: data.description
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    // const allPosts = await getAllPostsWithSlug()
    const products: ProductParams[] = [
        {
            id: '1',
        },
        {
            id: '2',
        }
    ]
    return {
        paths: products.map((product) => `/product/${product.id}`) || [],
        fallback: true,
    }
}

const Product: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ id, description, name }) => {
    return (
        <div>
            <h1>{name}</h1>
            <span>{id}</span>
            <p>{description}</p>
        </div>
    )
}

export default Product;