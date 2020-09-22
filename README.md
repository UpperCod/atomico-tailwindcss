# Atomico + Tailwindcss + Estack

I've created [@uppercod/postcss-import](https://github.com/uppercod/postcss-import) for Postcss that allows to point to selectors of an import to compose new CSS, I've tried it with [**Atomico**](https://github.com/atomicojs/atomico) + [Tailwindcss](https://.com/components/buttons) and the result is pleasantly small.

[**Atomico**](https://github.com/atomicojs/atomico) is an amazing library of only 2.9KB for creating webcomponents just using functionsls.

## [Live example 👉](https://uppercod.github.io/atomico-tailwindcss/)

### webcomponent

```js
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
```

### style

```css
@import "https://unpkg.com/tailwindcss@1.7.5/dist/tailwind.css" (as: T);

.btn {
  @extend T"button",
    T.bg-blue-500,
    T.text-white,
    T.font-bold,
    T.py-2,
    T.px-4,
    T.rounded;
  border: none;
}

.btn:hover {
  @extend T.hover\:bg-blue-700:hover;
}

.rounded-full {
  @extend T.rounded-full;
}

.disabled {
  @extend T.opacity-50, T.cursor-not-allowed;
}
.elevated {
  @extend T.shadow;
}
```
