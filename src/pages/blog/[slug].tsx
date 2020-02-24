import { NextPage, NextPageContext } from 'next';
import Markdown from 'react-markdown';
import matter, { GrayMatterFile } from 'gray-matter';
import Layout from '../../components/Layout';

interface Props {
  content: string;
  data: { [key: string]: any };
}

const Article: NextPage<Props> = props => {
  const markdownBody = props.content;
  const frontmatter = props.data;
  return (
    <Layout>
      <div>
        <h1>{frontmatter.title}</h1>
        <Markdown source={markdownBody} />
      </div>
    </Layout>
  );
};

Article.getInitialProps = async function(context: NextPageContext) {
  const { slug } = context.query;
  const content = await import(`../../articles/${slug}.md`);
  const { data } = matter(content.default);
  return { content, data };
};

export default Article;
