/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

function App() {
  const preflight = css`
    margin: 0;
    padding: 0;
    background-color: red;
  `
  return (
    <div css={preflight}>
      hello
    </div>
  );
}

export default App;
