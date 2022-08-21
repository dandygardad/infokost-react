/** @jsxImportSource @emotion/react */
import * as global from './Global.style'
import * as style from './Password.style'

const Password = () => {
    return(
        <div css={[style.form, global.container]}>
            <h1>Ganti Password</h1>
            <form>
                <input type="password" placeholder='Masukkan password lama' />
                <input type="password" placeholder='Masukkan password baru' />
                <button>Ganti</button>
            </form>
        </div>
    )
}

export default Password