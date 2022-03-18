export type Shortcut =
  | {
      ctrlKey: boolean;
      shiftKey: boolean;
      altKey: boolean;
      metaKey: boolean;
      key: string;
    }
  | string[];
