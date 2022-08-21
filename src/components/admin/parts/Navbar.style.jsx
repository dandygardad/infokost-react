import { css } from '@emotion/react'

export const container = css`
    display: flex;
    justify-content: space-between;
    font-family: 'Montserrat', sans-serif;
    align-items: center;
    padding: 35px 15px;
    background-color: #bb7944;
    margin: 0 auto;

    a {
        text-decoration: none;
        color: #fafafa;
        font-size: 22px;
        letter-spacing: -0.5px;
        font-weight: 800;
    }

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
            padding: 0px 5px;
            a {
                padding: 8px;
                letter-spacing: 1px;
                font-size: 16px;
                font-weight: 600;
                &:hover {
                    border-radius: 5px;
                    background-color: #0d6efd;
                    transition: all 0.2s ease;
                }
            }
            button {
                border: 0;
                border-radius: 3px;
                padding: 3px 8px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                
                &:hover {
                    background-color: #0d6efd;
                    color: #fafafa;
                    transition: all 0.2s ease;
                }
            }
        }
    }
`