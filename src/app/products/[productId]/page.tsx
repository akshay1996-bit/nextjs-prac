import { Metadata } from "next"

type Props = {
    params: {
        productId: string
    }
}
// Dynamic metadata
// name of func should be same
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    //sync
    // return {
    //     title: `Product ${params.productId}`
    // }
    //async
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`android ${params.productId}`)
        }, 100)
    })
    return {
        title: `Product ${title}`
    }
}

const ProductsDetail = (props: Props) => {
    const {
        params
    } = props
    return (
        <>
            <h1>Products Detail {params.productId}</h1>
        </>)
}

export default ProductsDetail;