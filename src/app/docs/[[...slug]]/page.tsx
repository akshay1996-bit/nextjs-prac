// 'use client'
// import { useEffect } from "react"


/**
 * slug in next js, is for having any number of params in url route
 * in the routes folder, just create [...slug] folder and inside it the
 * page.tsx file will have all params in params.slug which is an array.
 * Now, if we go to the parent route of slug (here docs) it will return
 * 404 for docs, to avoid this and use same page.tsx as in slug, rename and 
 * double wrap the slug
 */
const Docs = ({ params }: {
    params: {
        slug: string[]
    }
}) => {
    // useEffect(() => {
    //     console.log('slug', params.slug)
    // }, [params])
    if (params.slug?.length === 2) {
        return <h1>Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}</h1>
    }
    else if (params.slug?.length === 1) {
        return <h1>Viewing docs for feature {params.slug[0]}</h1>
    }
    return (
        <>
            <h1>Docs Homepage</h1>
        </>)
}

export default Docs;