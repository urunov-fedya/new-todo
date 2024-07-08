declare module '*.scss' {
  interface IClassNames {
      [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

/// <reference types="vite-plugin-svgr/client" />


declare module "*.module.css";
declare module "*.module.scss";

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
