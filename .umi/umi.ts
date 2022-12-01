// @ts-nocheck
import '@@/core/devScripts';
import { createHistory } from './core/history';
import { plugin } from './core/plugin';
import './core/pluginRegister';
import './core/polyfill';
import { getRoutes } from './core/routes';
import { renderClient } from '/Users/jihex/Code/rhooks/node_modules/@umijs/renderer-react/dist/index.mjs';
import { ApplyPluginsType } from '/Users/jihex/Code/rhooks/node_modules/umi/node_modules/@umijs/runtime';

const getClientRender = (args: { hot?: boolean; routes?: any[] } = {}) =>
  plugin.applyPlugins({
    key: 'render',
    type: ApplyPluginsType.compose,
    initialValue: () => {
      const opts = plugin.applyPlugins({
        key: 'modifyClientRenderOpts',
        type: ApplyPluginsType.modify,
        initialValue: {
          routes: args.routes || getRoutes(),
          plugin,
          history: createHistory(args.hot),
          isServer: process.env.__IS_SERVER,
          rootElement: 'root',
          defaultTitle: `rhooks`,
        },
      });
      return renderClient(opts);
    },
    args,
  });

const clientRender = getClientRender();
export default clientRender();

window.g_umi = {
  version: '3.5.35',
};

// hot module replacement
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept('./core/routes', () => {
    const ret = require('./core/routes');
    if (ret.then) {
      ret.then(({ getRoutes }) => {
        getClientRender({ hot: true, routes: getRoutes() })();
      });
    } else {
      getClientRender({ hot: true, routes: ret.getRoutes() })();
    }
  });
}
