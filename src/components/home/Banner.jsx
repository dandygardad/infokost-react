import { Link } from 'react-router-dom'

/** @jsxImportSource @emotion/react */
import * as style from './Banner.style'

const Banner = () => {
    return(
        <div css={style.container}>
            <Link to={'/'}>
                <img css={style.logo} src={require('../../assets/img/infokos_final.png')} alt="InfoKos Logo" />
            </Link>
            <form css={style.search}>
                <input type="text" name='search' placeholder='Cari kost impian' />
                <button>Cari</button>
            </form>
        </div>
    )
}

export default Banner