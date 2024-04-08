import { notFound } from "next/navigation";

const ReviewDetails = ({params}:any) => {

    if(parseInt(params.review) > 1000){
        notFound()
    }

    return (
        <>
            <h1>Review {params.review} for product {params.productId}</h1>
        </>)
}

export default ReviewDetails;