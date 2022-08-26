/** @jsxImportSource @emotion/react */
import * as style from './Informasi.style'
import * as global from '../GlobalComp.style'

const Informasi = (props) => {
    return(
        <div css={[style.container, global.container]}>
            <h4>Deskripsi Kost</h4>
            <p>{props.desc}</p>
        </div>
    )
}

export default Informasi