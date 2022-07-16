/** @jsxImportSource @emotion/react */
import * as global from '../GlobalComp.style'
import * as style from './Header.style'

const Header = () => {
    return(
        <div css={[global.container, style.container]}>
            <h2>Boarding House</h2>
            <h4>Rp5.200.000 - Rp7.000.000 / Tahun</h4>
            <img src={require("../../assets/img/dummy.png")} alt="Boarding House" />
        </div>
    )
}

export default Header