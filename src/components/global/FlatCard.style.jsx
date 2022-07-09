import { css } from '@emotion/react'

export const container = css`
    padding: 2px 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    width: 200px;
    margin : 20px;
`

export const cardImage = css`
    width: 100%;
`

export const containerCard = css`
display: flex;
flex-direction: column;
gap: 12px;
padding: 10px 5px;
    h4 {
        font-weight: 700;
        font-size: 18px;
    }
    p {
        line-height: 1.4;
        font-size: 14px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    a {
        padding: 5px 20px;
        border-radius: 5px;
        border: 0px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
        background: #0067D5;
        color: white;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        float: right;
        text-decoration: none;
    }
`