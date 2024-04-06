import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import styles from "./Map.module.css";
import Spinner from "./Spinner";
import { useParams } from "react-router-dom";
import { useGetApi } from "../Hooks/Get/useGetApi";
import { useGet } from "../Hooks/Get/useGet";

function UserMap() {
  const { alphaCode: ticketId } = useParams();
  const { fetch: fn } = useGetApi({ key: 'pmsPosition' });

  const { isFetching, fetch: data } = useGet({ key: ['pmsPosition', ticketId], fn });


  if (isFetching) return <Spinner />;
  const location = data.find(item => item.ticketId === ticketId);
  console.log(location);

  return (
    <div className={styles.mapContainer + ' relative'}>
      <MapContainer
        center={[location?.lat, location?.lng]}
        zoom={4}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        <Marker
          position={[location?.lat, location?.lng]}
        >
          <Popup className=" bg-indigo-200">
            <span>Current location</span>
          </Popup>
        </Marker>

      </MapContainer>
    </div>
  );
}


export default UserMap;
