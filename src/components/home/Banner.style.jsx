import { css } from '@emotion/react'

export const container = css`
    background-color: #bb7944;
    padding: 48px 0px;
`

export const logo = css`
    display: block;
    margin: 0 auto;
`

export const search = css`
    display: flex;
    flex-direction: column;
    row-gap: 14px;
    align-items: center;
    input {
        border-radius: 4px;
        width: 75%;
        padding: 5px 0;
        text-align: center;
        font-size: 14px;
        letter-spacing: 0.05em;
        border: 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    }
`