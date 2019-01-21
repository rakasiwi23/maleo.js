import { Server } from '@airy/maleo/lib/server/Server';
import path from 'path';

import { MyDocument } from './_document';
import { routes } from './routes';
import { Wrap } from './_wrap';

const PORT = process.env.PORT || 8080;

const maleoServer = Server.init({
  port: PORT,
  assetDir: path.resolve('.', '.maleo', 'client'),
  distDir: path.resolve('.', 'dist'),

  routes,

  _document: MyDocument,
  _wrap: Wrap,
});

maleoServer.run(() => {
  // tslint:disable-next-line:no-console
  console.log('Server running on port :' + PORT);
});
