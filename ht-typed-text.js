"use strict";
import { LitElement, html } from "@polymer/lit-element";
import Typed from "typed.js/src/typed.js";

class HTTypedText extends LitElement {
  render() {
    const { textStyle } = this;
    return html`
       <style>
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
    }
      </style>
      <span style=${textStyle}></span>
    `;
  }

  static get is() {
    return "ht-typed-text";
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

customElements.define(HTTypedText.is, HTTypedText);
