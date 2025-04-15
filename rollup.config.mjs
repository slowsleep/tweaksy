import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: {
    index:'src/index.ts',
    layout: 'src/components/layout/index.ts',
    form: 'src/components/form/index.ts',
  },
  output: [
    {
      dir: 'dist',
      format: 'esm',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist/',
      rootDir: 'src',
    }),
    postcss()
  ],
  external: ['react', 'react-dom']
};
