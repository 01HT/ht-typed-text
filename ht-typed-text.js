"use strict";
import { Element } from "../@polymer/polymer/polymer-element.js";
import Typed from "../typed.js/src/typed.js";

class HTTypedText extends Element {
  static get template() {
    return `
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
      <span style="[[textStyle]]"></span>
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

      textStyle: {
        type: String
      }
    };
  }

  _init() {
    if (this.options === undefined) return;
    new Typed(this.shadowRoot.querySelector("span"), this.options);
  }
}

customElements.define(HTTypedText.is, HTTypedText);
