interface Iparams {
    productId: string
}

interface Iprops {
    params: Iparams
}

const ProductsDetail = (props: Iprops) => {
    const {
        params
    } = props
    return (
        <>
            <h1>Products Detail {params.productId}</h1>
        </>)
}

export default ProductsDetail;