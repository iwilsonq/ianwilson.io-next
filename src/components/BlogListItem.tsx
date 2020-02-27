import Link from 'next/link';
import Markdown from 'react-markdown';
import { Article } from '../pages';

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
  const date = new Date(fullDate);
  return date.toDateString().slice(4);
}

interface Props {
  article: Article;
}

const BlogListItem: React.FunctionComponent<Props> = ({ article }) => {
  return (
    <Link key={article.slug} href={{ pathname: `/blog/${article.slug}` }}>
      <a>
        <div className="article">
          <div className="article-content">
            <div className="article-hero"></div>
            <div className="hero-text">
              <h2>{article.document.data.title}</h2>
              <h3> {reformatDate(article.document.data.date)}</h3>
            </div>
          </div>
        </div>
        <style jsx>{`
          .article-link-content {
            display: flex;
          }
          .article {
            width: 100%;
          }
          .article-hero {
            position: relative;
            background: url(${article.document.data.hero_image}) center;
            opacity: 0.3;
            color: #000;
            height: 200px;
          }
          .article-content {
            position: relative;
            padding: 16px;
          }

          .hero-text {
            color: #000;
            padding: 16px;
            position: absolute;
            top: 0;
            left: 16px;
          }
        `}</style>
      </a>
    </Link>
  );
};

export default BlogListItem;
