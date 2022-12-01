// @ts-nocheck
import { plugin } from './plugin';
import { ApplyPluginsType } from '/Users/jihex/Code/rhooks/node_modules/umi/node_modules/@umijs/runtime';

export function getRoutes() {
  const routes = [
    {
      path: '/~demos/:uuid',
      layout: false,
      wrappers: [require('../dumi/layout').default],
      component: (props) => {
        const React = require('react');
        const {
          default: getDemoRenderArgs,
        } = require('/Users/jihex/Code/rhooks/node_modules/.pnpm/@umijs+preset-dumi@1.1.49_m6mgwbawdpyioy7nhpteg3frci/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const {
          default: Previewer,
        } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        const { demos } = React.useContext(context);
        const [renderArgs, setRenderArgs] = React.useState([]);

        // update render args when props changed
        React.useLayoutEffect(() => {
          setRenderArgs(getDemoRenderArgs(props, demos));
        }, [
          props.match.params.uuid,
          props.location.query.wrapper,
          props.location.query.capture,
        ]);

        // for listen prefers-color-schema media change in demo single route
        usePrefersColor();

        switch (renderArgs.length) {
          case 1:
            // render demo directly
            return renderArgs[0];

          case 2:
            // render demo with previewer
            return React.createElement(Previewer, renderArgs[0], renderArgs[1]);

          default:
            return `Demo ${props.match.params.uuid} not found :(`;
        }
      },
    },
    {
      path: '/_demos/:uuid',
      redirect: '/~demos/:uuid',
    },
    {
      __dumiRoot: true,
      layout: false,
      path: '/',
      wrappers: [
        require('../dumi/layout').default,
        require('/Users/jihex/Code/rhooks/node_modules/.pnpm/dumi-theme-default@1.1.24_inqcvtnzuzl23s3wuff4vq2y3y/node_modules/dumi-theme-default/es/layout.js')
          .default,
      ],
      routes: [
        {
          path: '/react/use-latest-ref',
          component:
            require('/Users/jihex/Code/rhooks/packages/react/src/useLatestRef/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'packages/react/src/useLatestRef/index.md',
            updatedTime: 1669489077000,
            componentName: 'useLatestRef',
            nav: {
              title: 'useLatestRef',
              path: '/react',
            },
            slugs: [
              {
                depth: 1,
                value: 'useLatestRef',
                heading: 'uselatestref',
              },
              {
                depth: 2,
                value: 'API',
                heading: 'api',
              },
            ],
            title: 'useLatestRef',
            group: {
              path: '/react/use-latest-ref',
              title: 'useLatestRef',
            },
          },
          title: 'useLatestRef - rhooks',
        },
        {
          path: '/react/use-mount',
          component:
            require('/Users/jihex/Code/rhooks/packages/react/src/useMount/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'packages/react/src/useMount/index.md',
            updatedTime: 1669629858000,
            componentName: 'useMount',
            nav: {
              title: 'useMount',
              path: '/react',
            },
            slugs: [
              {
                depth: 1,
                value: 'useMount',
                heading: 'usemount',
              },
            ],
            title: 'useMount',
            group: {
              path: '/react/use-mount',
              title: 'useMount',
            },
          },
          title: 'useMount - rhooks',
        },
        {
          path: '/react/use-un-mount',
          component:
            require('/Users/jihex/Code/rhooks/packages/react/src/useUnMount/index.md')
              .default,
          exact: true,
          meta: {
            filePath: 'packages/react/src/useUnMount/index.md',
            updatedTime: 1669489077000,
            componentName: 'useUnMount',
            nav: {
              title: 'useUnMount',
              path: '/react',
            },
            slugs: [
              {
                depth: 1,
                value: 'useUnMount',
                heading: 'useunmount',
              },
            ],
            title: 'useUnMount',
            group: {
              path: '/react/use-un-mount',
              title: 'useUnMount',
            },
          },
          title: 'useUnMount - rhooks',
        },
        {
          path: '/',
          component: require('/Users/jihex/Code/rhooks/docs/index.md').default,
          exact: true,
          meta: {
            filePath: 'docs/index.md',
            updatedTime: 1669370703000,
            hero: {
              title: 'rhooks',
              desc: '<div class="markdown"><p>rhooks site example</p></div>',
              actions: [
                {
                  text: 'Getting Started',
                  link: '/components',
                },
              ],
            },
            features: [
              {
                icon: 'https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png',
                title: 'Feature 1',
                desc: '<div class="markdown"><p>Balabala</p></div>',
              },
              {
                icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png',
                title: 'Feature 2',
                desc: '<div class="markdown"><p>Balabala</p></div>',
              },
              {
                icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png',
                title: 'Feature 3',
                desc: '<div class="markdown"><p>Balabala</p></div>',
              },
            ],
            footer:
              '<div class="markdown"><p>Open-source MIT Licensed | Copyright © 2020<br />Powered by <a href="https://d.umijs.org/" target="_blank">dumi<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="__dumi-default-external-link-icon"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a></p></div>',
            slugs: [
              {
                depth: 2,
                value: 'Hello rhooks!',
                heading: 'hello-rhooks',
              },
            ],
            title: 'Hello rhooks!',
          },
          title: 'Hello rhooks! - rhooks',
        },
        {
          path: '/react',
          meta: {},
          exact: true,
          redirect: '/react/use-latest-ref',
        },
      ],
      title: 'rhooks',
      component: (props) => props.children,
    },
  ];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
