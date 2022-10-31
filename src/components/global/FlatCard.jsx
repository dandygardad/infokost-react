import { HashLink as Link } from "react-router-hash-link"
import { LazyLoadImage } from "react-lazy-load-image-component"

/** @jsxImportSource @emotion/react */
import * as style from './FlatCard.style'

const urlPicture = `${process.env.REACT_APP_API_URL}/uploads/`

const FlatCard = (props) => {
    return(
        <div role="listitem" css={style.container}>
            {/* <img src={urlPicture.concat(props.image)} alt={"Gambar dari " + props.name} css={style.cardImage} /> */}
            {/* <img src={props.image} alt={"Gambar dari " + props.name} css={style.cardImage} /> */}
            <LazyLoadImage css={style.cardImage} alt={"Gambar dari " + props.name} src={urlPicture.concat(props.image)} effect={"blur"} placeholderSrc={require('../../assets/img/empty.webp')} />
            {/* <img src={require('../../assets/img/' + props.image)} alt={"Gambar dari " + props.name} css={style.cardImage} /> */}
            <div css={style.containerCard}>
                <h4>{props.name}</h4>
                <p>{props.desc}</p>
                <div>
                    <Link to={"/kost/" + props.slug +'#start'}>More</Link>
                </div>
            </div>
        </div>
    )
}

export default FlatCard