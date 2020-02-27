import sort from 'fast-sort';
import matter, { GrayMatterFile } from 'gray-matter';
import { NextPage } from 'next';

import Layout from '../components/Layout';
import BlogList from '../components/BlogList';
import Meta from '../components/Meta';

export interface Article {
  document: GrayMatterFile<any>;
  slug: string;
}

interface Props {
  articles: Article[];
}

const Index: NextPage<Props> = props => (
  <Layout>
    <Meta description="Ian Wilson's Personal Developer Blog & Site" />
    <h1>The Blog</h1>
    <BlogList articles={props.articles} />
  </Layout>
);

Index.getInitialProps = async function() {
  const siteConfig = await import(`../data/config.json`);
  const context = require.context('../articles', true, /\.md$/);
  const keys = context.keys();
  const values = keys.map<{ default: string }>(context);
  const articles = keys.map(
    (key: string, index: number): Article => {
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.');
      const value = values[index];
      const document = matter(value.default);
      return {
        document,
        slug,
      };
    }
  );

  sort(articles).desc(a => a.document.data.date);

  return {
    articles,
    ...siteConfig.default,
  };
};

export default Index;
