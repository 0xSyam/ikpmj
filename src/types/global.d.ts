// src/types/global.d.ts

// Instance interfaces for Bootstrap components
interface BsDropdownInstance {
  show(): void;
  hide(): void;
  toggle(): void;
  dispose(): void;
  // Add other instance methods if needed by your project
}

interface BsCollapseInstance {
  show(): void;
  hide(): void;
  toggle(): void;
  dispose(): void;
}

interface BsOffcanvasInstance {
  show(): void;
  hide(): void;
  toggle(): void;
  dispose(): void;
}

// Constructor interfaces for Bootstrap components
interface BsDropdownConstructor {
  new (element: Element, options?: Partial<Record<string, unknown>>): BsDropdownInstance;
  getInstance(element: Element): BsDropdownInstance | null;
}

interface BsCollapseConstructor {
  new (element: Element, options?: Partial<Record<string, unknown>>): BsCollapseInstance;
  getInstance(element: Element): BsCollapseInstance | null;
}

interface BsOffcanvasConstructor {
  new (element: Element, options?: Partial<Record<string, unknown>>): BsOffcanvasInstance;
  getInstance(element: Element): BsOffcanvasInstance | null;
}

// Extend the Window interface to include 'bootstrap'
declare global {
  interface Window {
    bootstrap: {
      Dropdown: BsDropdownConstructor;
      Collapse: BsCollapseConstructor;
      Offcanvas: BsOffcanvasConstructor;
      // Add other Bootstrap components here if your project uses them, e.g., Modal, Tooltip
    };
  }
}

// Export {} to make this a module file, which is good practice for .d.ts files.
export {};
