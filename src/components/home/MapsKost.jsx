import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useEffect, useState } from 'react'
import axios from 'axios'

/** @jsxImportSource @emotion/react */
import * as style from './MapsKost.style'
import * as global from '../GlobalComp.style'

const MapsKost = () => {
    const [locKost, setLocKost] = useState([])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/kost/mapskost`)
            .then(res => {
                if(res.status === 200){
                    setLocKost(res.data.kost)
                } else { console.log("No Data!") }
            })
    }, [])
    return(
        <div css={[global.container, style.container]}>
            <h1 css={global.title}>Semua Kost Romang Lompoa</h1>
            <MapContainer center={[-5.223756088080829, 119.50632867393728]} zoom={15} scrollWheelZoom={false} id="mapid">
                
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* This could be used for loop data from API */}
                {locKost.map((item, index) => {
                    return (<Marker key={index} position={[item.long, item.lat]}>
                        <Popup>
                            <a href={item.link_gmpas} rel='noreferrer' target="_blank"><b>{item.name}</b></a>
                        </Popup>
                    </Marker>)
                })}

            </MapContainer>
        </div>
    )
}

export default MapsKost