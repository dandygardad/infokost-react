import { css } from '@emotion/react'

export const containerCards = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    div {
        flex: 100%;
    }
    @media screen and (min-width: 425px){
        div {
            flex: 25%;
        }
    }
`

export const container = css`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
`