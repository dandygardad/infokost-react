/** @jsxImportSource @emotion/react */
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import * as style from './Contact.style'
import * as global from '../GlobalComp.style'

const Contact = () => {
    return(
        <div css={[global.container, style.container]}>
            <h4>Informasi Kost</h4>
            <div css={style.contact_list}>
                <p>Alamat:</p>
                <a href="google.com" target={"_blank"} rel="noreferrer">Jl. Jeruk No. antara 20 sama 40 gatau deh</a>
            </div>
            <div css={style.contact_list}>
                <p>No. Telepon:</p>
                <a href="tel:08124212121212">081242121212</a>
            </div>
            <MapContainer center={[-5.223756088080829, 119.50632867393728]} zoom={14} scrollWheelZoom={false} id="mapid">
                
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* This could be used for loop data from API */}
                <Marker position={[-5.226498506297373, 119.50288189865357]}>
                    <Popup>
                        <a href="https://goo.gl/maps/54kMkUHbggwPDQu47" rel='noreferrer' target="_blank"><b>Kost Ernias</b></a>
                    </Popup>
                </Marker>

            </MapContainer>
        </div>
    )
}

export default Contact