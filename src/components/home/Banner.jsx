import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

/** @jsxImportSource @emotion/react */
import * as style from './Banner.style'

const Banner = () => {
    const navigate = useNavigate()
    const inputSearch = useRef()

    const handleSearch = (e) => {
        e.preventDefault()
        if(inputSearch.current.value){
            navigate(`/search/${inputSearch.current.value}`)
        }
    }

    return(
        <div css={style.container}>
            <Link to={'/'}>
                <img css={style.logo} src={require('../../assets/img/infokos_final.png')} alt="InfoKos Logo" />
            </Link>
            <form css={style.search} onSubmit={handleSearch}>
                <input type="text" ref={inputSearch} name='search' placeholder='Cari kost impian' />
                <button>Cari</button>
            </form>
        </div>
    )
}

export default Banner