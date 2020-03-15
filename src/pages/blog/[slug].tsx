import { NextPage, NextPageContext } from 'next';
import Markdown from 'react-markdown';
import matter from 'gray-matter';
import Layout from '../../components/Layout';
import Meta from '../../components/Meta';
import Heading from '../../components/Heading';

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
        <Heading>{title}</Heading>
        <Markdown
          renderers={{
            heading: ({ children }) => (
              <h2 className="text-2xl font-semibold mb-4">{children}</h2>
            ),
            inlineCode: ({ children }) => (
              <code className="bg-gray-400 px-1 rounded">{children}</code>
            ),
            link: ({ children, href }) => (
              <a className="text-blue-500 hover:text-blue-800" href={href}>
                {children}
              </a>
            ),
            list: ({ children }) => <ul className="list-disc mb-4">{children}</ul>,
            listItem: ({ children }) => <li className="mb-2">{children}</li>,
            paragraph: ({ children }) => <p className="mb-4">{children}</p>,
            thematicBreak: () => <hr className="my-8" />,
          }}
          source={content}
        />
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
