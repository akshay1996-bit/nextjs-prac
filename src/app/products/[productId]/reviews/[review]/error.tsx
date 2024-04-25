'use client'
const ErrorBoundary = ({error,reset}: {
    error: Error,
    reset: () => void
}) => {
    /**
     * Error handled by errr.tsx file doesn't handle error of layout.tsx file
     * so we need to have an error.tsx file to the parent folder of layout.tsx file
     */
    return (
        <>
        <h1>Error in Review {error.message}</h1>
        <button onClick={()=> reset()}>Try Again</button>
        </>
    )
}
 
export default ErrorBoundary;