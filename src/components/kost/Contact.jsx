/** @jsxImportSource @emotion/react */
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import * as style from './Contact.style'
import * as global from '../GlobalComp.style'

const Contact = (props) => {
    return(
        <div css={[global.container, style.container]}>
            <h4>Informasi Kost</h4>
            <div css={style.contact_list}>
                <p>Alamat:</p>
                <a href={props.gmaps} target={"_blank"} rel="noreferrer">{props.alamat}</a>
            </div>
            <div css={style.contact_list}>
                <p>No. Telepon:</p>
                <a href={`tel:${props.notel}`}>{props.notel}</a>
            </div>
            <MapContainer center={[-5.223756088080829, 119.50632867393728]} zoom={14} scrollWheelZoom={false} id="mapid">
                
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* This could be used for loop data from API */}
                <Marker position={[props.lat, props.long]}>
                    <Popup>
                        <a href={props.gmaps} rel='noreferrer' target="_blank"><b>{props.name}</b></a>
                    </Popup>
                </Marker>

            </MapContainer>
        </div>
    )
}

export default Contact