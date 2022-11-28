import { defineConfig } from 'dumi';
import unpluginDts from './plugins/tt'
import WebpackChain from 'webpack-chain';


export default defineConfig({
  title: 'rhooks',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  resolve: {

  },
  chainWebpack(memo: WebpackChain) {
    memo.plugin('dts').use(unpluginDts.webpack({}))
    // memo.module
    //   .rule('dts')
    //   .test(/.*\.md$/)
    //   .include
    //     .add(/package.*\.md/)
    //     .end()
    //   .use('dts')
    //     .loader(require.resolve('./plugins/loader.js')).end()
  }
  // more config: https://d.umijs.org/config
});
