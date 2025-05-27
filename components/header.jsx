import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/finopsimplified.png';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    { linkText: 'Home', href: '/blog' },
    { linkText: 'Blog', href: '/blog' },
    { linkText: 'About', href: '/about' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <Link href="/" className="flex items-center gap-2">
                <Image src={netlifyLogo} alt="Netlify logo" width={80} height={80} />
                <span className="text-white text-2xl font-bold">FinOps Simplified</span>
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2 underline">
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <Link
                href="https://github.com/nvbkdw/FinOpSimplified"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex lg:ml-auto"
            >
                <Image src={githubLogo} alt="GitHub logo" className="w-7" />
            </Link>
        </nav>
    );
}
