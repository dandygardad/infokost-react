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
        width: 250px;
        padding: 6px 0;
        text-align: center;
        font-size: 16px;
        letter-spacing: 0.05em;
        border: 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
        &:focus {
            outline: none;
            &::placeholder {
                opacity: 0;
            }
        }
    };
    button {
        border-radius: 4px;
        border: 0;
        font-weight: 600;
        font-size: 16px;
        padding: 6px 22px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        &:hover {
            background-color: #0d6efd;
            color: #fafafa;
            transition: all 0.2s ease;
        }
    }
    @media screen and (min-width: 425px){
        input {
            width: 300px;
        }
    }
    @media screen and (min-width: 768px){
        input {
            width: 350px;
        }
    }
`