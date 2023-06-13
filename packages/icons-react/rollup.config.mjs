import externals from "rollup-plugin-node-externals";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

import pkg from "./package.json" assert { type: "json" };

const createOutput = (config) => ({
  sourcemap: true,
  ...(config || {}),
});

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "esm",
    },
  ].map(createOutput),
  plugins: [externals(), resolve(), commonjs(), typescript()],
};

export default config;
