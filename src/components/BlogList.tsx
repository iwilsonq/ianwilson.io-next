import BlogListItem from './BlogListItem';
import { Article } from '../pages';
import Card from './Card';

interface Props {
  articles: Article[];
}

const BlogList: React.FunctionComponent<Props> = props =>
  props.articles.length === 0 ? null : (
    <Card>
      {props.articles.map(article => (
        <BlogListItem article={article} key={article.slug} />
      ))}
    </Card>
  );

export default BlogList;
