import replace from '@rollup/plugin-replace';
import multi from '@rollup/plugin-multi-entry';

export default {
  output: {
    //dir: 'output',
    //format: 'cjs'
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __buildDate__: () => JSON.stringify(new Date()),
      __buildVersion: 15
    }),
    multi()
  ]
};