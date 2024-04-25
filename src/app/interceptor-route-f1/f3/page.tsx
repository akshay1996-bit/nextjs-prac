import Link from "next/link";

const F3 = () => {
    return (<>
        <h1>F3 page</h1>
        <Link href='/interceptor-route-f1/f4'>F4</Link>
        <Link href='/about'>About</Link>
    </>);
}
 
export default F3;