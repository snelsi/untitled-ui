import externals from 'rollup-plugin-node-externals';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: 'src/index.tsx',
  output: {
    format: 'esm',
    sourcemap: false,
    preserveModules: true,
    preserveModulesRoot: 'src',
    dir: 'lib'
  },
  plugins: [externals(), resolve(), typescript()]
};

export default config;
