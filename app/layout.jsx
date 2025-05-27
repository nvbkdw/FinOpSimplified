import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | FinOps Simplified',
        default: 'FinOps Simplified'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/finopsimplified.ico" sizes="64x64" />
                <title className="text-white">FinOps Simplified</title>
            </head>
            <body className="antialiased text-white bg-gray-900">
                <div className="flex flex-col min-h-screen max-w-screen bg-noise px-6 md:px-36">
                    <div className="flex flex-col w-full max-w-screen mx-auto grow">
                        <Header />
                        <main className="grow">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
