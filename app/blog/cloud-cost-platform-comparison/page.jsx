import { BlogLayout } from 'components/blog-layout';
import { Markdown } from 'components/markdown';
import fs from 'fs';
import path from 'path';

export const metadata = {
    title: 'Cloud Cost Management Platform Comparison | FinOps Blog',
    description: 'A comprehensive comparison of leading FinOps tools and their features across major cloud platforms.'
};

// Function to read the blog content from external markdown file
function getBlogContent() {
    const contentPath = path.join(process.cwd(), 'app/blog/cloud-cost-platform-comparison/content.md');
    return fs.readFileSync(contentPath, 'utf8');
}

export default function CloudCostPlatformComparisonPage() {
    const blogContent = getBlogContent();

    return (
        <BlogLayout
            title="Cloud Cost Management Platform Comparison"
            description="A comprehensive comparison of leading FinOps tools and their features across major cloud platforms."
            category="Platform Comparison"
            author="FinOps Expert"
            publishDate="December 2024"
            readTime="8 min read"
        >
            <Markdown content={blogContent} />
        </BlogLayout>
    );
}