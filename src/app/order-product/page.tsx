'use client'
import { useRouter } from "next/navigation";
const OrderProduct = () => {
    const router = useRouter()
    const handleClick = () => {
        // router.push('/') - for changing route
        // router.back() - for going back
        // router.forward() - for going forward
        router.replace('/') // - for replacing route so user can't go to prev page
    }
    return (
        <>
        <h1>Order Product</h1>
        <button onClick={handleClick}>Place order</button>
        </>
    )
}
 
export default OrderProduct;