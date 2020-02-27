import Head from 'next/head';

interface Props {
  description: string;
  title?: string;
}

function Meta({ title, description }: Props): JSX.Element {
  const displayTitle = title ? `${title} | Ian Wilson` : 'Ian Wilson';
  return (
    <Head>
      <title>{displayTitle}</title>
      <meta name="Description" content={description}></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="Software Engineer,Rust,JavaScript,ReasonML,GraphQL"
      />
      <meta charSet="utf-8" />
    </Head>
  );
}

export default Meta;
