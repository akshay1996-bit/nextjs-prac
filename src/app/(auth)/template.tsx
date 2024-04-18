'use client'
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './styles.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [inputVal,setInputVal] = useState('')
    const navLinks = [
        { name: 'Register', href: '/register' },
        { name: 'Login', href: '/login' },
        { name: 'Forgot Password', href: '/forgot-password' }
    ]
    const pathname = usePathname()
    return (
        <div>
            <div>
                <input value={inputVal} onChange={e => setInputVal(e.target.value)}/>
            </div>
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href)
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
                    >{link.name}</Link>
                )
            })}
            {children}
        </div>
    )
}
