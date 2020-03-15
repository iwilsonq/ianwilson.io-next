import { NextPage } from 'next';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import Heading from '../components/Heading';

const Contact: NextPage = () => {
  return (
    <Layout>
      <Meta title="The Contact" description="Ian Wilson's contact information" />
      <Heading>Contact</Heading>
      <p>
        If you would like to get in touch, please send me an email at
        iwilsonq@gmail.com and I’ll try get back to you within a day or so!
      </p>
    </Layout>
  );
};

export default Contact;
