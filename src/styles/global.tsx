import { css, Global } from '@emotion/react'

const GlobalStyle = () => {
  const style = css`
    :root {
      --color: red;
    }

    body {
      margin: 0;
      padding: 0;
    }

    img,
    svg {
      max-width: 100%;
      vertical-align: bottom;
    }

    strong {
      font-weight: bold;
    }

    em {
      font-weight: bold;
      font-style: normal;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      padding: 0;
    }

    p {
      margin: 0;
      padding: 0;
      max-height: 100%;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      list-style: inherit;
    }

    hr {
      display: none;
    }

    a {
      color: inherit;
      text-decoration: inherit;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    button {
      padding: 0;
      background: transparent;
      margin: 0;
      border: none;
      cursor: pointer;
    }
  `

  return <Global styles={style} />
}

export default GlobalStyle
