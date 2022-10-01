import { css } from '@emotion/react'

export const container = css`
    display: flex;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    flex-direction: column;
    margin: 0 auto;
    gap: 12px;
    font-family: 'Montserrat', sans-serif;
    background-color: #bb7944;
    max-width: 280px;
    padding: 48px 32px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    img {
        max-width: 80%;
        margin: 0 auto;

    }

    form {
        gap: 12px;
        display: flex;
        flex-direction: column;
        
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
            
            &:hover {
                background-color: #0d6efd;
                color: #fafafa;
                transition: all 0.2s ease;
            }
        }
    }

    .loading {
        color: white;
        margin: 5px auto;
        font-weight: 600;
    }
`

export const wrongStyle = css`
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
`