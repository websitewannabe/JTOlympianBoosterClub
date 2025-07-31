// TypeScript declarations for EqualWeb accessibility tools
declare global {
  interface Window {
    interdeal: {
      sitekey: string;
      domains: {
        js: string;
        acc: string;
      };
      Position: string;
      Menulang: string;
      draggable: boolean;
      btnStyle: {
        vPosition: string[];
        margin: string[];
        scale: string[];
        color: {
          main: string;
          second: string;
        };
        icon: {
          outline: boolean;
          outlineColor: string;
          type: number;
          shape: string;
        };
      };
      showTooltip: boolean;
      open?: () => void;
    };
  }
}

export {};