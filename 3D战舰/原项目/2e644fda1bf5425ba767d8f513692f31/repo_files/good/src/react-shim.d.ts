declare module 'react' {
  export function useState<T>(value: T): [T, (value: T | ((prev: T) => T)) => void];
  export function useRef<T>(value: T): { current: T };
  export function useEffect(effect: () => void | (() => void), deps?: readonly unknown[]): void;
  export function createElement(type: any, props: any, ...children: any[]): any;
}
declare module 'react-dom/client' {
  export function createRoot(element: Element | DocumentFragment): { render(node: any): void; unmount(): void };
}
declare module '*.css' { const value: string; export default value; }
declare namespace JSX {
  interface IntrinsicElements { [elemName: string]: any }
}
