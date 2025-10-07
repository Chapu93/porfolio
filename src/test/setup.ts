import '@testing-library/jest-dom'

// Mock matchMedia para jsdom
if (!window.matchMedia) {
  // @ts-expect-error polyfill para entorno de test
  window.matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })
}

// Mock IntersectionObserver para jsdom
if (!('IntersectionObserver' in window)) {
  // @ts-expect-error polyfill para entorno de test
  window.IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() { return [] }
  }
}
