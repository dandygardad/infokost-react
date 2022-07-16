import { css } from '@emotion/react'

export const container = css`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 10px 16px 28px 16px !important;
    h4 {
        font-size: 18px;
        font-weight: 700;
    }
    a {
        color: black;
        line-height: 24px;
    }
    #mapid{
        margin: 0 auto;
        height: 300px;
        width: 100%;
    }
`
export const contact_list = css`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 10px 0;
    p {
        font-weight: 600;
        font-size: 14px;
    }
`