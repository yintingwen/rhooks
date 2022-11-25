import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'rhooks',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  resolve: {
    includes: ['docs', 'packages/hooks/src']
  },
  navs: [
    {
      title: 'Hooks',
      path: '/hooks',
    }
  ],
  menus: {
    "/hooks": [
      {
        title: "lifeCycle",
        children: [
          "useMount",
          "useUnMount"
        ]
      },
      {
        title: "utils",
        children: [
          "useLatestRef",
        ]
      }
    ]
  }
  // more config: https://d.umijs.org/config
});
