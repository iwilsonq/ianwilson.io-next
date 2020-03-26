import sort from 'fast-sort';
import matter, { GrayMatterFile } from 'gray-matter';
import { NextPage } from 'next';

import Layout from '../components/Layout';
import Meta from '../components/Meta';
import NewsletterForm from '../components/NewsletterForm';
import Link from '../components/Link';
import Heading from '../components/Heading';

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
    <Heading>Ian Wilson</Heading>
    <h2 className="text-3xl mb-8">
      Fullstack Web Developer living in the San Francisco Bay Area.
    </h2>
    <p className="mb-6">
      I develop solutions that assist businesses and developers in their day-to-day
      operations. One way I achieve this is by
      <Link href="/blog"> writing articles </Link>
      on emerging technologies like Rust, GraphQL, ReasonML, and JavaScript.
    </p>
    <ul className="list-disc list-inside mb-4">
      <p className="mb-2">When I'm not writing or coding, I am generally</p>
      <li className="mb-2">running the roads and trails by my home</li>
      <li className="mb-2">
        exploring my musical interests via instrument or karaoke
      </li>
      <li className="mb-2">
        having a bevy while watching sports or playing video games
      </li>
    </ul>
    <p className="mb-4">
      Kindly follow me on Twitter{' '}
      <a
        className="text-blue-500 hover:text-blue-800"
        href="https://twitter.com/iwilsonq"
        target="_blank"
      >
        @iwilsonq
      </a>
    </p>
    <img className="" src="/rubens_wedding.jpg" alt="ruben's wedding" />

    <hr className="my-8" />
    <h2 className="text-2xl font-bold">Sign Up for the Newsletter</h2>
    <p className="mb-4">
      If you'd like to be in the loop when I write a new post, sign up for my
      newsletter.
    </p>
    <NewsletterForm />
    <p className="mb-4">By my honor, I won't send you spam. </p>
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
