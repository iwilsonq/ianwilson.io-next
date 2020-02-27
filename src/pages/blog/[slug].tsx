import { NextPage, NextPageContext } from 'next';
import Markdown from 'react-markdown';
import matter from 'gray-matter';
import Layout from '../../components/Layout';
import Meta from '../../components/Meta';

interface Props {
  content: string;
  data: { [key: string]: any };
}

const Article: NextPage<Props> = ({ content, data }) => {
  const { title, description } = data;
  return (
    <Layout>
      <Meta title={title} description={description} />
      <div>
        <h1>{title}</h1>
        <Markdown source={content} />
      </div>
    </Layout>
  );
};

Article.getInitialProps = async function(context: NextPageContext) {
  const { slug } = context.query;
  const file = await import(`../../articles/${slug}.md`);
  const { data, content } = matter(file.default);
  return { content, data };
};

export default Article;
