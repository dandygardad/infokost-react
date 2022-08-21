import { css, keyframes } from "@emotion/react"

export const container = css`
    padding: 28px 10px !important;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    align-items: center;
    h2 {
        font-size: 24px;
        font-weight: 700;
    }
    h4 {
        color: #8f0a11;
    }
    img {
        width: 100%;
    }

    @media screen and (min-width: 768px){
        img {
            width: 600px;
        }
    }
    @media screen and (min-width: 1024px){
        img {
            width: 700px;
        }
    }
`
const fadeIn = keyframes`
 0% {
    opacity: 0;
 }
 100%{
    opacity: 1;
 }
`

export const imageAnim = css`
    cursor: pointer;
    img {
        animation: ${fadeIn} 1s ease forwards;
    }
`