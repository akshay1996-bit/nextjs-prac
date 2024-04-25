'use client'
import { notFound } from "next/navigation";

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count)
}

const ReviewDetails = ({ params }: any) => {

    const random = getRandomInt(2)

    if (parseInt(params.review) > 1000) {
        notFound()
    }

    if(random === 1){
        throw new Error('error load')
    }

    return (
        <>
            <h1>Review {params.review} for product {params.productId}</h1>
        </>)
}

export default ReviewDetails;