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
        <div className="article">
          <div className="article-content">
            <h2>{title}</h2>
            <div>
              <span>{description}</span>
            </div>
            <div>
              <time> {reformatDate(date)}</time>
              <span className="mid-dot-divider" />
              {tags.split(',').map((tag: string) => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          .article-link-content {
            display: flex;
          }
          .article {
            padding-bottom: 16px;
            width: 100%;
          }

          h2 {
            font-size: 2.5rem;
            margin-bottom: 0;
          }

          span,
          time {
            font-family: Lato, sans-serif;
            font-size: 1.6rem;
            color: rgba(0, 0, 0, 0.54);
            margin-right: 4px;
          }

          span.mid-dot-divider::after {
            content: '·';
          }

          .article-content {
            padding: 0 16px;
            color: #000;
          }
        `}</style>
      </a>
    </Link>
  );
};

export default BlogListItem;
