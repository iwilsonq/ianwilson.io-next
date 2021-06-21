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
          <script src="https://cdn.onesignal.com/sdks/Staging-OneSignalSDK.js" async />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            // var safari_web_id = "web.onesignal.auto.2d9123a5-f6c1-46fe-a6d4-d9acca55dc3d";
            var appId = "e93cefa8-1b00-45c4-be89-c58ff6e2e373";
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
