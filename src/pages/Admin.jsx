import { useState } from 'react'
import Login from '../components/admin/Login'
import Logged from '../components/admin/Logged'

/** @jsxImportSource @emotion/react */

const Admin = () => {
    const [isLogged, setIsLogged] = useState(false)
    
    return(
        <div css={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
        {isLogged ? <Logged isLogged={setIsLogged} /> : <Login isLogged={setIsLogged} />}
        </div>
    )
}

export default Admin