import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

/** @jsxImportSource @emotion/react */
import * as style from './MapsKost.style'
import * as global from '../GlobalComp.style'

const MapsKost = () => {
    return(
        <div css={[global.container, style.container]}>
            <h1 css={global.title}>Semua Kost Romang Lompoa</h1>
            <MapContainer center={[-5.223756088080829, 119.50632867393728]} zoom={14} scrollWheelZoom={true} id="mapid">
                
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

export default MapsKost