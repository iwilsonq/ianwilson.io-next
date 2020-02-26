import Head from 'next/head';

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
          @import url('https://fonts.googleapis.com/css?family=Lato:400,700|Lora&display=swap');
          html,
          body {
            color: #000;
            font-family: 'Lora', Helvetica, sans-serif;
            font-size: 10px;
            margin: 0;
            overflow-x: hidden;
          }

          h1,
          h2,
          h3 {
            font-family: 'Lato';
            font-weight: 700;
          }

          h1 {
            font-size: 3.4rem;
          }

          p,
          ol,
          ul,
          li,
          a {
            font-size: 2.1rem;
          }

          a {
            color: #0070f3;
          }

          pre,
          code,
          code[class*='language-'],
          pre[class*='language-'] {
            font-size: 1.6rem;
          }

          @media (max-width: 727px) {
            p,
            ol,
            ul,
            li,
            a {
              font-size: 1.8rem;
            }
            h1 {
              font-size: 3rem;
            }
            pre,
            code,
            code[class*='language-'],
            pre[class*='language-'] {
              font-size: 1.6rem;
            }
          }

          a {
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
}
