// @ts-nocheck
import { LitElement, css, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class SimpleGreeting extends LitElement {
  static get styles() {
    return css`p { color: var(--greeting-color, blue); }`;
  }

  updated(changedProperties) {
    if (changedProperties.has('color')) {
      this.style.setProperty('--greeting-color', this.color || 'blue');
    }
  }

  static properties = {
    name: { type: String },
    color: { type: String },
  };

  constructor() {
    super();
    this.name = 'somebody';
  }

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
customElements.define('simple-greeting', SimpleGreeting);


export class Counter extends LitElement {
  static get styles() {
    return css``;
  }

  updated(changedProperties) {
    if (changedProperties.has('count')) {
      this.count++;
    }
  }

  static properties = {
    name: { type: String },
    color: { type: String },
  };

  constructor() {
    super();
    this.count = 0;
  }

  render() {
    return html`<button>${count}</button>`;
  }
}
customElements.define('counter', Counter);