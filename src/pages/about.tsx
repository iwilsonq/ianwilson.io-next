import { NextPage } from 'next';
import Layout from '../components/Layout';
import Meta from '../components/Meta';

const About: NextPage = () => {
  return (
    <Layout>
      <Meta title="The About" description="The Bio of Ian Wilson" />
      <h1>The About</h1>
      <p>I am Ian Wilson, a full stack developer that runs and enjoys music.</p>
      <p>
        I enjoy programming topics like JavaScript, Rust, ReasonML and GraphQL. I've
        written some articles about these which can be viewed on my profile at
        <a href="https://dev.to/iwilsonq"> dev.to</a> or here on this website.
      </p>
      <p>
        In the near future, I would like to get into making educational video
        content as well.
      </p>
      <p>Here's a neat exit quote.</p>
      <blockquote>
        <b>You stay classy, San Diego</b> - <em>Ron Burgundy</em>
      </blockquote>
    </Layout>
  );
};

export default About;
