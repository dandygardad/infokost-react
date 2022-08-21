import { Link } from 'react-router-dom'

/** @jsxImportSource @emotion/react */
import * as style from './Navbar.style'

const Navbar = (props) => {
    return(
        <div css={style.container}>
            <Link to={'kost'}>InfoKost Admin</Link>
            <ul>
                <li><Link to={'kost'}>Data Kost</Link></li>
                <li><Link to={'input'}>Input Kost</Link></li>
                <li><Link to={'change-password'}>Ganti Password</Link></li>
                <li><button onClick={props.logoutButton}>Logout</button></li>
            </ul>
        </div>
    )
}

export default Navbar