import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import livereload from 'rollup-plugin-livereload';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: 'src/timed-slider.js',
    output: {
      file: 'docs/scripts/timed-slider.js',
      name: 'JNationTimedSlider',
      format: 'iife',
      sourcemap: production
    },
    plugins: [
      eslint(),
      resolve(),
      babel({
        exclude: 'node_modules/**' // only transpile our source code
      }),
      !production && livereload({
        watch: 'docs',
        port: 35729
      }),
      production && terser()
    ]
  },
  {
    input: 'src/framed-slider.js',
    output: {
      file: 'docs/scripts/framed-slider.js',
      name: 'JNationFramedSlider',
      format: 'iife',
      sourcemap: production
    },
    plugins: [
      eslint(),
      resolve(),
      babel({
        exclude: 'node_modules/**' // only transpile our source code
      }),
      !production && livereload({
        watch: 'docs',
        port: 35730
      }),
      production && terser()
    ]
  }
];
