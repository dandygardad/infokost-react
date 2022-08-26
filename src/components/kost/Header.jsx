/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import * as global from '../GlobalComp.style'
import * as style from './Header.style'

const Header = (props) => {
    const images = [props.img1, props.img2, props.img3, props.img4]
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
            <h2 id='start'>{props.name}</h2>
            <div onClick={changePicture} css={style.imageAnim}>
                <img src={images[imgPos]} alt={props.name} />
                {/* <img src={require("../../assets/img/" + images[imgPos])} alt="Boarding House" /> */}
            </div>
        </div>
    )
}

export default Header