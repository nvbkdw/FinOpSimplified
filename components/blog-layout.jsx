import Link from 'next/link';
import { Card } from './card';

export function BlogLayout({ 
    children, 
    title, 
    category, 
    author, 
    publishDate, 
    readTime, 
    description 
}) {
    return (
        <div className="max-w-screen w-full mx-auto">
            <header className="mb-12">
                {/* <nav className="mb-6">
                    <Link href="/" className="text-primary hover:opacity-80">
                        ← Back to Home
                    </Link>
                </nav> */}
                
                <div className="mb-6">
                    <h1 className="mb-4">{title}</h1>
                    {description && (
                        <p className="text-lg text-neutral-300 mb-4">{description}</p>
                    )}
                    <div className="flex flex-wrap items-center gap-4 text-neutral-400 text-sm">
                        {author && <span>By {author}</span>}
                        {author && publishDate && <span>•</span>}
                        {publishDate && <span>{publishDate}</span>}
                        {publishDate && readTime && <span>•</span>}
                        {readTime && <span>{readTime}</span>}
                    </div>
                    {category && (
                        <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mt-4">
                            {category}
                        </span>
                    )}
                </div>
            </header>

            <article className="prose prose-invert max-w-none">
                {children}
            </article>
        </div>
    );
} 