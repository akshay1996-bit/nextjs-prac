
export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <h2>Auth Footer</h2>
        </>

    )
}
