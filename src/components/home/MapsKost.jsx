import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

/** @jsxImportSource @emotion/react */
import * as style from './MapsKost.style'

const MapsKost = () => {
    return(
        <div css={style.container}>
            <h1 css={style.title}>Semua Kost Romang Lompoa</h1>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} id="mapid">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default MapsKost