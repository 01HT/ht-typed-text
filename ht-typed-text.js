"use strict";
import { LitElement, html, css } from 'lit-element';
import Typed from "typed.js/src/typed.js";

class HTTypedText extends LitElement {
   static get styles() {
    return css`
    :host {
      display: inline;
      position: relative;
      box-sizing: border-box;
    }

    .typed-cursor {
      opacity: 1;
      animation: blink .8s infinite;
      text-decoration: none;
    }

    @keyframes blink {
      0% {
          opacity: 1;
      }
      50% {
          opacity: 0;
      }
      100% {
          opacity: 1;
      }
    }`
  }
  
  render() {
    const { textStyle } = this;
    return html`
      <span style="${textStyle}"></span>
    `;
  }

  static get properties() {
    return {
      textStyle: { type: String },
      options: { type: Object }
    };
  }

  updated() {
    new Typed(this.shadowRoot.querySelector("span"), this.options);
  }
}

customElements.define("ht-typed-text", HTTypedText);
