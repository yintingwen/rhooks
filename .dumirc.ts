import { defineConfig } from 'dumi';
import path from 'path';
import remarkDts from './plugins/remark-dts';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'rhook',
  },
  alias: {
    '@plugins': path.resolve('./plugins'),
  },
  resolve: {
    atomDirs: [
      {
        type: 'hooks/react',
        dir: path.resolve(__dirname, '/packages/react/src'),
      },
    ],
  },
  extraRemarkPlugins: [remarkDts],
});
