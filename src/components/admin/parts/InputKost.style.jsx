import { css } from '@emotion/react'

export const form = css`
    form {
        gap: 12px;
        display: flex;
        flex-direction: column;
        max-width: 480px;
        margin: 0 auto;
        border-radius: 4px;
        padding: 20px;
        background-color: #fafafa;
        input {
            border: 0;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
            border-radius: 3px;
            padding: 5px;
            font-size: 16px;
            
            &::placeholder {
                font-size: 16px;
            }
        }
        
        button {
            border: 0;
            border-radius: 3px;
            padding: 7px 5px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            background-color: #0d6efd;
            color: #fafafa;
            
            &:hover {
                background-color: #01337d;
                transition: all 0.2s ease;
            }
        }
    }
    textarea {
        font-size: 16px;
        resize: none;
        padding: 10px;
    }
`

export const inputForm = css`
    display: flex;
    gap: 12px;
    justify-content: space-between;
    input {
        width: 100%;
    }
`