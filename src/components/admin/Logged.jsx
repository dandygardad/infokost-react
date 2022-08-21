import Navbar from "./parts/Navbar"
import { Outlet } from 'react-router-dom'

/** @jsxImportSource @emotion/react */

const Logged = (props) => {
    document.title = "Admin Mode - InfoKost Romang Lompoa"
    const viewport = document.querySelector("meta[name=viewport]")
    viewport.setAttribute('content', 'width=1024')
    const logoutButton = () => {
        props.isLogged(false)
    }
    
    return(
        <div css={{ maxWidth: "1024px", margin: "0 auto" }}>
            <Navbar logoutButton={logoutButton}/>
            <div css={{ padding: "20px 15px", fontFamily: "'Montserrat', sans-serif" }}>
                <Outlet />
            </div>
        </div>
    )
}

export default Logged