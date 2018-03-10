"use strict";
import { LitElement, html } from "../@polymer/lit-element/lit-element.js";
import Typed from "typed.js";

class HTTypedText extends LitElement {
  render({textStyle}) {
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
      <span style="${textStyle}"></span>
    `;
  }
  
  static get is() {
    return "ht-typed-text";
  }

  static get properties() {
    return {
      options: {
        type: Object,
        observer: "_init"
      },

      textStyle: String
    };
  }

  _init() {
    if (this.options === undefined) return;
    new Typed(this.shadowRoot.querySelector("span"), this.options);
  }
}

customElements.define(HTTypedText.is, HTTypedText);
