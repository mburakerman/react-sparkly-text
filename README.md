# ✨ react-sparkly-text

<br />

[![NPM](https://img.shields.io/npm/v/react-sparkly-text)](https://www.npmjs.com/package/react-sparkly-text)

## ⏬ Install

```js
npm i react-sparkly-text
```

## 🪡 Usage

```js
import { ReactSparklyText } from "react-sparkly-text"
```

```html
<p>Lorem ipsum dolor <ReactSparklyText>sparkly text</ReactSparklyText> sit amet.</p>
```

## ⚙️ Props

```js
type TextElement = React.ReactElement<{ children: React.ReactNode }>;

type Props = {
  children: string | TextElement | Array<string | TextElement>;
  size?: number; // sparkle size in pixels. default is 30
};
```

## ©️ License

Licensed under MIT

## ✨ Inspired From

🙏🏼 Thanks @stefanjudis for inspiration: https://github.com/stefanjudis/sparkly-text
