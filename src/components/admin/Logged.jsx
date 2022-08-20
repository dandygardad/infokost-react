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
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Logged