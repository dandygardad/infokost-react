import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';


import Banner from '../components/home/Banner'
import Header from '../components/kost/Header'
import Informasi from '../components/kost/Informasi'
import Footer from '../components/global/Footer'
import Contact from '../components/kost/Contact'

const Kost = () => {
    const { id } = useParams()
    const [dataKost, setDataKost] = useState([])
    const [isAvailable, setIsAvailable] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_API_URL}/kost`, {
            slug: id
        }).then((res) => {
            const kost = res.data.kost
            if(kost.length !== 0){
                setDataKost([...kost])
                setIsAvailable(true)
                document.title = `${kost[0].name} - InfoKost Romang Lompoa`
            } else {
                navigate('/', { replace: true })
            }
        })
    }, [])
    
    return(
        <>
        <Banner />
        {isAvailable && 
            dataKost.map((data) => { 
                return <div key={data.id}>
                <Header img1={data.img_depan} img2={data.img_1} img3={data.img_2} img4={data.img_depan2} name={data.name} />
                <Informasi desc={data.desc} />
                <Contact name={data.name} alamat={data.alamat} notel={data.notel} long={data.long} lat={data.lat} gmaps={data.link_gmaps} />
                </div>
            })}
        <Footer />
        
        </>
    )
}

export default Kost