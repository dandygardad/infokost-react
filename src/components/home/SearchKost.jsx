import { useParams, useNavigate } from "react-router-dom"

import Banner from "./Banner"
import FlatListSearch from "./FlatListSearch"
import Footer from "../global/Footer"

const SearchKost = () => {
    const { input } = useParams()
    const navigate = useNavigate()
    
    if(!input) {
        navigate('/')
    }

    return(
        <>
            <Banner />
            <FlatListSearch input={input} />
            <Footer />
        </>
    )
}

export default SearchKost