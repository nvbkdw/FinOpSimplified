import { Card } from 'components/card';
import { Markdown } from 'components/markdown';
import { BlogLayout } from 'components/blog-layout';
import Link from 'next/link';

export const metadata = {
    title: 'FinOps Blog | Cloud Cost Management Insights',
    description: 'Expert insights on Financial Operations (FinOps) and cloud cost optimization strategies.'
};

export default function BlogPage() {
    return (
        <BlogLayout
            title="FinOps Simplified"
            description="Expert insights on Financial Operations (FinOps) and cloud cost optimization strategies."
        >
            <div className="not-prose">
                <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
                    <BlogPostCard
                        title="Cloud Cost Management Platform Comparison"
                        excerpt="A comprehensive comparison of leading FinOps tools and their features across major cloud platforms."
                        href="/blog/cloud-cost-platform-comparison"
                        readTime="8 min read"
                        category="Platform Comparison"
                    />
                    {/* Add more blog post cards here as you create more content */}
                </section>
            </div>
        </BlogLayout>
    );
}

function BlogPostCard({ title, excerpt, href, readTime, category }) {
    return (
        <Link href={href} className="no-underline">
            <Card className="h-full transition-transform hover:scale-105">
                <div className="flex flex-col h-full">
                    <span className="text-sm font-medium text-primary mb-2">{category}</span>
                    <h3 className="mb-3">{title}</h3>
                    <p className="text-neutral-600 mb-4 flex-grow">{excerpt}</p>
                    <span className="text-sm text-neutral-500">{readTime}</span>
                </div>
            </Card>
        </Link>
    );
} 