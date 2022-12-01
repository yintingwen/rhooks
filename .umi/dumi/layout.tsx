// @ts-nocheck
import apis from '@@/dumi/apis';
import config from '@@/dumi/config';
import demos from '@@/dumi/demos';
import React from 'react';
import Layout from '/Users/jihex/Code/rhooks/node_modules/.pnpm/@umijs+preset-dumi@1.1.49_m6mgwbawdpyioy7nhpteg3frci/node_modules/@umijs/preset-dumi/lib/theme/layout';

export default (props) => (
  <Layout {...props} config={config} demos={demos} apis={apis} />
);
