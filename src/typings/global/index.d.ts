declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
    const content: SvgrComponent
    export default content
}
