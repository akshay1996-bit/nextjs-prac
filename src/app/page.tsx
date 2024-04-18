'use client'
import * as React from 'react';
import Link from 'next/link';

const Home = () => {

    return (
        <>
            <h1>home Page</h1>
            <Link href='/blog'>Blog</Link>
            <Link href='/products'>Products</Link>
        </>
    );
}

export default Home;