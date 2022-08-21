import { useState, useRef } from "react"

/** @jsxImportSource @emotion/react */
import * as style from './Login.style'

const Login = (props) => {
    document.title = "Login Admin - InfoKost Romang Lompoa"
    const username = useRef('')
    const password = useRef('')
    const [wrongPassword, setWrongPassword] = useState(false)
    // const [isLoading, setIsLoading] = useState(false)

    const checkLogin = (e) => {
        e.preventDefault()
        setWrongPassword(false)

        if(username.current.value === 'admin' && password.current.value === 'admin'){
            props.isLogged(true)
        } else {
            setWrongPassword(true)
        }
    }

    return(
        <div css={[style.container]}>
            <img src={require('../../assets/img/infokos_final.png')} alt="InfoKost Logo" />
            {wrongPassword && <p css={style.wrongStyle}>Password salah!</p>}
            <form onSubmit={checkLogin}>
                <input type="text" ref={username} placeholder="Username" />
                <input type="password" ref={password} placeholder="Password" />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login