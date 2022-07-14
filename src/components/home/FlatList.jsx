/** @jsxImportSource @emotion/react */
import * as style from './FlatList.style'
import * as global from '../GlobalComp.style'
import FlatCard from '../global/FlatCard'

const FlatList = () => {
    return(
        <div css={[global.container, style.container]}>
            <h1 css={global.title}>Flat List</h1>
            {/* For loop here to show all kost */}
            <div css={style.containerCards}>
                <FlatCard image={"dummy.png"} name="Kost Ernias" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam autem accusamus esse officiis similique eum deserunt modi, amet suscipit saepe molestias natus quae dolor" slug="kost-ernias" />
                <FlatCard image={"dummy.png"} name="Kost Ernias" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam autem accusamus esse officiis similique eum deserunt modi, amet suscipit saepe molestias natus quae dolor" slug="kost-ernias" />
                <FlatCard image={"dummy.png"} name="Kost Ernias" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam autem accusamus esse officiis similique eum deserunt modi, amet suscipit saepe molestias natus quae dolor" slug="kost-ernias" />
                <FlatCard image={"dummy.png"} name="Kost Ernias" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam autem accusamus esse officiis similique eum deserunt modi, amet suscipit saepe molestias natus quae dolor" slug="kost-ernias" />
                <FlatCard image={"dummy.png"} name="Kost Ernias" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam autem accusamus esse officiis similique eum deserunt modi, amet suscipit saepe molestias natus quae dolor" slug="kost-ernias" />
                <FlatCard image={"dummy.png"} name="Kost Ernias" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam autem accusamus esse officiis similique eum deserunt modi, amet suscipit saepe molestias natus quae dolor" slug="kost-ernias" />
            </div>
        </div>
    )
}

export default FlatList