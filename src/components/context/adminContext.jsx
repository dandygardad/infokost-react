import React, { useState } from 'react'

export const adminContext = React.createContext({
    jwt_token: ''
})

const AdminContextProvider = () => {
    const [jwtToken, setJwtToken] = useState('')
}

export default AdminContextProvider