import { terser } from "rollup-plugin-terser";
import browsersync from "rollup-plugin-browsersync";
import postcss from "rollup-plugin-postcss";
import postcssNormalize from "postcss-normalize";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = isProduction === false;

export default {
  input: "src/scripts/index.js",
  output: {
    file: "public/index.js",
    format: "iife"
  },
  plugins: [
    commonjs(),
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    postcss({
      extract: true,
      sourceMap: isDevelopment,
      plugins: [autoprefixer(), postcssNormalize(), cssnano()]
    }),
    isDevelopment && browsersync({ server: "public" }),
    isProduction && terser()
  ]
};
