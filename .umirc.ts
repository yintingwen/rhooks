import { defineConfig } from 'dumi';
import WebpackChain from 'webpack-chain';
import plugin from './plugins/tt'


export default defineConfig({
  title: 'rhooks',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  webpack5: {},
  resolve: {

  },
  chainWebpack(memo: WebpackChain) {
    // memo.module
    //   .rule('tttt')
    //   .test(/\.md$/)
    //   .include.add(/packages/).end()
    //   .use('./plugins/ttt')
    //   .loader(require.resolve('./plugins/ttt'))
    //   .end()
    //   .end()
    //
    // memo.module
    //   .rule('md-api-dts')
    //   .test(/\.md$/)
    //   .include
    //   .add(/packages/)
    //   .end()
    //   .use('./plugins/loader')
    //   .loader(require.resolve('./plugins/loader'))
    //   .end()
    memo.plugin('tttt').use(plugin.webpack({}))
  }
  // more config: https://d.umijs.org/config
});
