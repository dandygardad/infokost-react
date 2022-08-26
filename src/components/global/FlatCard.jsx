import { HashLink as Link } from "react-router-hash-link"

/** @jsxImportSource @emotion/react */
import * as style from './FlatCard.style'

const FlatCard = (props) => {
    return(
        <div css={style.container}>
            <img src={props.image} alt={"Gambar dari " + props.name} css={style.cardImage} />
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