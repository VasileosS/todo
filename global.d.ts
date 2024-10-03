declare module '*.module.css' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg';

declare module '*.png';

declare module '*.jpg';
