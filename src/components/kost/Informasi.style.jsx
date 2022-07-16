import { css } from "@emotion/react"

export const container = css`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 0 16px 24px 16px !important;
    h4 {
        font-size: 18px;
        font-weight: 700;
    }
    p {
        font-size: 14px;
        line-height: 24px;
    }
    @media screen and (min-width: 1024px){
        p {
            font-size: 16px;
            line-height: 28px;
        }
    }
`