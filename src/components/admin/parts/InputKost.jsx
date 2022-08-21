// Used for input & edit
/** @jsxImportSource @emotion/react */
import * as global from './Global.style'
import * as style from './InputKost.style'
import { useParams } from 'react-router-dom'

const InputKost = () => {
    const { id } = useParams()
    return(
        <div css={[style.form, global.container]}>
            <h1>{id ? "Edit Kost" : "Input Kost"}</h1>
            <form>
                <div css={style.inputForm}>
                    <input type="text" placeholder='Nama Kost' />
                    <input type="text" placeholder='Custom Link' />
                </div>
                <input type="number" placeholder='Harga' />
                <div css={style.inputForm}>
                    <input type="text" placeholder='Alamat' />
                    <input type="number" placeholder='No. Telepon' />
                </div>
                <div css={style.inputForm}>
                    <input type="text" placeholder='Longitude' />
                    <input type="text" placeholder='Latitude' />
                </div>
                <input type="text" placeholder='Link Google Maps' />
                <div css={style.inputForm}>
                    <input type="file" />
                    <input type="file" />
                </div>
                <input type="file" />
                <textarea rows="8" placeholder="Masukkan deskripsi kost" />
                <button>Submit Data Kost</button>
            </form>
        </div>
    )
}

export default InputKost