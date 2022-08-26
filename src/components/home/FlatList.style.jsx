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

export const load = css`
    width: 130px;
    margin: 0 auto;
    padding: 10px 20px;
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
`