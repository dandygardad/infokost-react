/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import * as global from '../GlobalComp.style'
import * as style from './Header.style'

const Header = () => {
    const images = ["dummy.png", "dummy1.png", "dummy2.png"]
    const [imgPos, setImgPos] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(changePicture, 5000)
        return () => {clearInterval(interval)}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const changePicture = () => {
        setImgPos(imgPos => imgPos < images.length - 1 ? imgPos + 1 : 0)
    }

    return(
        <div css={[global.container, style.container]}>
            <h2 id='start'>Boarding House</h2>
            <h4>Rp5.200.000 - Rp7.000.000 / Tahun</h4>
            <div onClick={changePicture} css={style.imageAnim}>
                <img src={require("../../assets/img/" + images[imgPos])} alt="Boarding House" />
            </div>
        </div>
    )
}

export default Header