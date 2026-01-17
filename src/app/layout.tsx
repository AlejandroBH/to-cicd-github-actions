import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Contador CI/CD',
    description: 'Proyecto de práctica CI/CD con GitHub Actions',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    );
}
