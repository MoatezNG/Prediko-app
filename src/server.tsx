import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from './client/App';

let assets: any;

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();
//@ts-ignore
const cssLinksFromAssets = (assets, entrypoint) =>
  assets[entrypoint]
    ? assets[entrypoint].css
      ? assets[entrypoint].css
          //@ts-ignore
          .map((asset) => `<link rel="stylesheet" href="${asset}">`)
          .join('')
      : ''
    : '';
//@ts-ignore
const jsScriptTagsFromAssets = (assets, entrypoint, extra = '') =>
  assets[entrypoint]
    ? assets[entrypoint].js
      ? assets[entrypoint].js
          //@ts-ignore
          .map((asset) => `<script src="${asset}"${extra}></script>`)
          .join('')
      : ''
    : '';

export const renderApp = (req: express.Request, res: express.Response) => {
  const context: any = {};

  const markup = renderToString(
    <StaticRouter context={context} location={req.url}>
      <App />
    </StaticRouter>,
  );

  if (context.url) {
    return { redirect: context.url };
  }
  const html =
    // prettier-ignore
    `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;900&display=swap" rel="stylesheet">
        ${cssLinksFromAssets(assets, 'client')}
    </head>
    <body>
        <div id="root">${markup}</div>
        ${jsScriptTagsFromAssets(assets, 'client', ' defer crossorigin')}
    </body>
  </html>`;

  return { html };
};

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .get('/*', (req: express.Request, res: express.Response) => {
    const { html = '', redirect = false } = renderApp(req, res);
    if (redirect) {
      res.redirect(redirect);
    } else {
      res.send(html);
    }
  });

export default server;
