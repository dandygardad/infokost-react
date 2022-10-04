/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import axios from 'axios'
import * as style from './FlatList.style'
import * as global from '../GlobalComp.style'
import FlatCard from '../global/FlatCard'

const FlatListSearch = (props) => {
    const [dataKost, setDataKost] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState("0")

    // Fetch data kost
    useEffect(() => {
        axios.post(`${process.env.REACT_APP_API_URL}/kost/search` , {
            page: currentPage,
            search: props.input 
        })
            .then(res => {
                if(res.status === 200){
                    setIsLoading(true)
                    setDataKost([...dataKost, ...res.data.kost])
                    setIsLoading(false)
                } else { console.log("No Data!") }
            })
    }, [currentPage])

    const handleLoad = () => {
        setIsLoading(true)
        setCurrentPage((prevState) => parseInt(prevState) + 10)
    }
    
    return(
        <div css={[global.container, style.container]}>
            <h1 css={global.title}>Hasil Pencarian untuk "{props.input}"</h1>
            {/* For loop here to show all kost */}
            <div css={style.containerCards}>
                {dataKost.map((res) => <FlatCard key={res.id} image={res.img_depan} name={res.name} desc={res.desc} slug={res.slug} />)}
            </div>
            {!isLoading ? <button css={style.load} onClick={handleLoad}>Selanjutnya</button> : <p css={{ textAlign: "center", padding: "24px 0" }}>Load data...</p>}
        </div>
    )
}

export default FlatListSearch