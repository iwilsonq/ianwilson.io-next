import Link from 'next/link';
import { Article } from '../pages';
import { format } from 'date-fns';

function truncateSummary(content: string): string {
  const excerpt = content.slice(0, 200).trimEnd();
  for (let i = excerpt.length; i > 0; i--) {
    if (excerpt[i] === '\n') {
      return excerpt.slice(0, i);
    }
  }
  return excerpt + '...';
}

function reformatDate(fullDate: Date): string {
  return format(new Date(fullDate), 'MMM d, yyyy');
}

interface Props {
  article: Article;
}

const BlogListItem: React.FunctionComponent<Props> = ({ article }) => {
  const { title, description, tags, date } = article.document.data;
  return (
    <Link key={article.slug} href={{ pathname: `/blog/${article.slug}` }}>
      <a>
        <div className="pb-4 w-full">
          <div className="px-4">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div>
              <span>{description}</span>
            </div>
            <div>
              <time className="text-gray-500 mr-1"> {reformatDate(date)}</time>
              <span className="text-gray-500 mr-1 mid-dot-divider" />
              {tags.split(',').map((tag: string) => (
                <span className="text-gray-500 mr-1" key={tag}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          span.mid-dot-divider::after {
            font-size: 2rem;
            content: '·';
          }
        `}</style>
      </a>
    </Link>
  );
};

export default BlogListItem;
