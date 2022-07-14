import { css } from '@emotion/react'

export const footer = css`
    background-color: #F5F5F5;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    img {
        width: 50%
    }
    a {
        color: black;
    }
    p {
        padding-top: 30px;
    }
`

export const footer_table = css`
    tr {
        height: 25px;
    }

    td {
        width: 100px;
    }
`