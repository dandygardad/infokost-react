import { css } from '@emotion/react'

export const footer = css`
    background-color: #F5F5F5;
    padding: 48px 0px;
    font-family: "Montserrat", sans-serif;
    img {
        width: 150px;
    }
    a {
        color: black;
    }
    p {
        text-align: center;
        font-weight: 700;
        padding-top: 30px;
    }
    
`
export const footer_content = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 768px){
        gap: 100px;
        flex-direction: row;
        img {
            width: 200px;
        }
    }
`

export const footer_table = css`
    tr {
        height: 33px;
    }

    td {
        width: 100px;
    }
`