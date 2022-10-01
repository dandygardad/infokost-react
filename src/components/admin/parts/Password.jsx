/** @jsxImportSource @emotion/react */
import { useState, useRef } from 'react'
import jwt_decode from 'jwt-decode'
import * as global from './Global.style'
import * as style from './Password.style'

const Password = () => {
    const newPassword = useRef('')
    const confirmPassword = useRef('')
    const [messageBox, setMessageBox] = useState(false)

    const jwtDecoded = jwt_decode(localStorage.getItem('token'))

    const changePassword = (e) => {
        e.preventDefault()
        if(!newPassword.current.value && !confirmPassword.current.value){
            setMessageBox("Password box tidak boleh kosong!")
            return
        }

        if(!(newPassword.current.value === confirmPassword.current.value)){
            setMessageBox("Password baru & konfirmasi tidak sama!")
            return
        }

        fetch('http://localhost:8000/adminmode/changepassword', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                email: jwtDecoded.email,
                password: newPassword.current.value
            })
        }).then(response => response.json())
        .then(item => {
            if(item.message === 'success_changed') {
                setMessageBox("Password berhasil berubah!")
            } else if(item.message === 'password_not_enough') {
                setMessageBox("Password harus lebih 8 karakter dan huruf besar!")
            } else {
                setMessageBox("Terjadi kesalahan!")
            }
        })
    }

    return(
        <div css={[style.form, global.container]}>
            <h1>Ganti Password</h1>
            {messageBox && <div css={style.loading}><p>{messageBox}</p></div>}
            <form onSubmit={changePassword}>
                <input type="password" ref={newPassword} placeholder='Masukkan password baru' />
                <input type="password" ref={confirmPassword} placeholder='Masukkan password baru lagi' />
                <button>Ganti</button>
            </form>
        </div>
    )
}

export default Password