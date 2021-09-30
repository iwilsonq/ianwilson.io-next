import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../data/gtag';

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            var appId = "aea2d136-bca5-4e12-bb68-3fce54ac4354";
            window.OneSignal = window.OneSignal || [];
            OneSignal.push(function() {
              window.OneSignal.init({
                // safari_web_id: safari_web_id,
                appId: appId,
                notifyButton: {
                  enable: true,
                },
              });
            });
          `}}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
