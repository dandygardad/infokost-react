import { useState, useEffect } from 'react'
import Login from '../components/admin/Login'
import Logged from '../components/admin/Logged'

/** @jsxImportSource @emotion/react */

const Admin = () => {
    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        fetch('http://localhost:8000/adminmode/checkjwt' , {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then(response => response.json())
        .then(item => {
            if(item.jwt_accept){
                setIsLogged(true)
            } else {
                localStorage.removeItem('token')
            }
        })
    }, [])

    return(
        <div css={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
        {isLogged ? <Logged isLogged={setIsLogged} /> : <Login isLogged={setIsLogged} />}
        </div>
    )
}

export default Admin