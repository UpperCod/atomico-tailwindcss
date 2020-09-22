import { c } from "atomico";
import html from "atomico/html";
import style from "./t-button.css";

function button({ elevated, disabled, outline, roundedFull }) {
  const cn = ["btn"];
  if (elevated) cn.push("elevated");
  if (disabled) cn.push("disabled");
  if (outline) cn.push("disabled");
  if (roundedFull) cn.push("rounded-full");
  return html`<host shadowDom>
    <style>
      ${style}
    </style>
    <button class=${cn.join(" ")}><slot></slot></button>
  </host>`;
}

button.props = {
  rounded: Boolean,
  disabled: Boolean,
  elevated: Boolean,
  roundedFull: Boolean,
};

customElements.define("t-button", c(button));
