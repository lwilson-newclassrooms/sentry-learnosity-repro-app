/// <reference types="vite/client" />

import { LearnosityRequest } from "./models/LearnosityRequest";
interface ItemsAppInterface {
  save: () => void;
  submit: (options: {
    show_submit_confirmation: boolean;
    show_submit_ui: boolean;
  }) => void;
  on: (event: string, callback: (event: unknown) => void) => void;
  reset: () => void;
  getScores: () => LearnosityScores;
  items: () => { goto: (index: number) => void };
}

declare global {
  interface Window {
    LearnosityItems: {
      init: (
        request: LearnosityRequest,
        callbacks: {
          readyListener: () => void;
          errorListener: (error: { code: number }) => void;
        }
      ) => ItemsAppInterface;
    };
  }
}
