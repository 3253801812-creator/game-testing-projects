export {};
declare global {
  interface Window {
    THREE: any;
    OPENROUTER_API_KEY?: string;
    __game: any;
    __playerBoard: any;
    __enemyBoard: any;
    __placement: any;
    __aiPlayer: any;
    __effects: any;
    __three: any;
    __scene: any;
    __camera: any;
    __renderer: any;
    __battleshipController?: any;
  }
}
