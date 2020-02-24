import Head from 'next/head';
import { ReactNode } from 'react';

interface Props {
  siteDescription: string;
  siteTitle: string;
}

export default function Meta(props: Props): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{props.siteTitle}</title>
        <meta name="Description" content={props.siteDescription}></meta>
      </Head>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css?family=Lato|Lora&display=swap');
          body {
            color: #000;
            font-family: 'Lora', Helvetica, sans-serif;
            font-size: 16px;
            margin: 0;
            overflow-x: hidden;
          }

          h1,
          h2,
          h3 {
            font-family: 'Lato';
          }

          h1 {
            font-size: 40px;
          }

          p {
            font-size: 21px;
            line-height: 1.58;
          }

          a {
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
}
