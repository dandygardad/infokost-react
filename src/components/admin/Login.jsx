import { useState, useRef } from "react"

/** @jsxImportSource @emotion/react */
import * as style from './Login.style'

const Login = (props) => {
    document.title = "Login Admin - InfoKost Romang Lompoa"
    const username = useRef('')
    const password = useRef('')
    const [wrongPassword, setWrongPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const checkLogin = (e) => {
        e.preventDefault()
        setWrongPassword(false)
        setIsLoading(true)

        if(!username.current.value || !password.current.value){
            setWrongPassword(true)
            setIsLoading(false)
            return
        }

        fetch(`${process.env.REACT_APP_API_URL}/adminmode/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username.current.value,
                password: password.current.value
            })
        }).then(response => response.json())
        .then(login => {
            if(login.message === "Berhasil"){
                localStorage.setItem('token', login.data.token)
                props.isLogged(true)
            } else {
                setWrongPassword(true)
                setIsLoading(false)
            }
        })
    }

    return(
        <div css={[style.container]}>
            <img src={require('../../assets/img/infokos_final.png')} alt="InfoKost Logo" />
            {wrongPassword && <p css={style.wrongStyle}>Username/Password salah!</p>}
            <form onSubmit={checkLogin}>
                <input type="text" ref={username} placeholder="Username" />
                <input type="password" ref={password} placeholder="Password" />
                {isLoading ? <p className="loading">Loading..</p> : <button>Login</button>}
            </form>
        </div>
    )
}

export default Login