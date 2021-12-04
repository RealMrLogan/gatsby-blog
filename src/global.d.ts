// fix: gatsby typescript error cannot find module img.jpg or its corresponding type declarations
// declare module "*.jpg" {
//   export default "" as string;
// }
// declare module "*.png" {
//   export default "" as string;
// }

// fix typescript error of not being able to import svgs has react components
declare module "*.svg" {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
