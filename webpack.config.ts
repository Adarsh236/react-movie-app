import { merge } from 'webpack-merge';

import CommonConfig from './build-utils/webpack.common';
import DevConfig from './build-utils/webpack.dev';
import ProdConfig from './build-utils/webpack.prod';

const localConfig = merge<any>(CommonConfig(), DevConfig(), {
  name: 'local',
  mode: 'development',
});

const prodConfig = merge<any>(CommonConfig(), ProdConfig(), {
  name: 'prod',
  mode: 'production',
});

module.exports = [localConfig, prodConfig];
