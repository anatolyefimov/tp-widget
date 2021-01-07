declare module '*.html' {
  const value: string;
  export default value;
}

declare module '*.css' {

  interface IClassNames {
    [className: string]: string
  }

  const classNames: IClassNames;
  export default classNames;
}
