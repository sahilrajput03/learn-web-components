// @ts-nocheck
import { LitElement, css, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class SimpleGreeting extends LitElement { // & Component
  constructor() {
    super();
    // ❤️Learn: `this.name` is undefined here even when passed to
    //          component because properties are not yet initialized thus they
    //          are `undefined` here.
    // console.log('this.name?', this.name) // undefined

    // ❤️Learn: Setting default value of property (s) go here:
    this.name = 'somebody';

    // Learn: `this` Prints the instance of the component being created
    // console.log('`this` in SimpleGreeting component?', this); 
  }

  // ❤️Learn: Define reactive property (s) for your LitElement
  //            component. Updating `this.name` and `this.color` will trigger
  //            rerender.
  static properties = {
    name: { type: String },
    color: { type: String },
  };

  render() {
    return html`<p style="color: ${this.color}">Hello, ${this.name}!</p>`;
  }
}
customElements.define('simple-greeting', SimpleGreeting);

export class SimpleCounter extends LitElement { // & Component
  constructor() {
    super();
    this.count = 0; // set initial value of `count`
  }

  static properties = { count: { type: Number }, };

  increment() { this.count++; }

  updated(changedProperties) {
    console.log(this.constructor.name, 'updated - changedProperties.get(`count`)?', changedProperties.get('count')); // Prints previous count value
    console.log(this.constructor.name, 'updated - this.count', this.count); // Prints updated count value
  }

  static get styles() { return css`button { color: pink; background: black; }`; }

  render() {
    return html`<button @click="${this.increment}">${this.count}</button>`;
  }
}
customElements.define('simple-counter', SimpleCounter);

export class UserProfile extends LitElement {
  constructor() {
    super();
  }
  static properties = {
    name: { type: String },
    age: { type: String },
    gender: { type: String },
  };
  // Lifecycle method (of LitElement)
  firstUpdated(changedProperties) {
    // console.log('firstUpdated?', changedProperties);
    // ❤️Learn: Errors handling goes here for properties
    const errors = [];
    if (!this.name) { errors.push('Please provide name property.'); }
    if (!this.age) { errors.push('Please provide age property.'); }
    if (!this.gender) { errors.push('Please provide gender property.'); }
    if (errors.length) { throw ['Missing properties:', ...errors].join('\n'); }
  }

  // This lifecycle method (of LitElement) is run after `firstUpdated`
  updated(changedProperties) {
    console.log('updated - changedProperties?', changedProperties); // { 'age': previousValueHere }
    console.log('updated - changedProperties.get(`age`) ?', changedProperties.get('age')); // Prints previous age value
    console.log('this.age?', this.age); // Prints updated age value
  }

  static get styles() {
    return css`
    .container {
      border: 2px solid black;
      width: fit-content;
      padding: 10px; 
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    button { color: purple; background: white; border-color: purple; }`;
  }

  increment() { this.age++; }

  render() {
    return html`
      <div class="container"> 
        <div>Name: ${this.name}</div>
        <button @click="${this.increment}">Age: ${this.age}</button>
        <div>Gender: ${this.gender}</div>
      <div>
    `;
  }
}
customElements.define('user-profile', UserProfile);