import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

export const MapaBicing = () => {
    const defaultPlace = {
        "adr": "Barcelona",
        "lat": 41.3818,
        "long": 2.1685
    }

    const [address, setAddress] = useState(null);
    const [marcadors, setMarcadors] = useState([defaultPlace]);
    const [marcadoresBicis, setMarcadoresBicis] = useState([]);
    const [place, setPlace] = useState(defaultPlace);
    const [cerca, setCerca] = useState('')

    const [center, setCenter] = useState([place.lat, place.long]);

    function cercaAdr() {
        // const url = "https://nominatim.openstreetmap.org/search?format=json&q=";
        const url = "https://api.citybik.es/v2/networks/bicing";
        if (cerca) {
            fetch(url + encodeURI(cerca))
                .then(d => d.json())
                .then(data => data[0])
                .then(item => {

                    setPlace({ adr: item.display_name, lat: item.lat, long: item.lon })
                })
        }
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(coords);
        }
    }

    function coords(position) {

        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        setCenter([lat, long]);
        fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${long}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setAddress(data);
                setPlace({ "adr": data.display_name, lat: lat, long: long })
            });
    }

    useEffect(() => {
        //console.log("buscant geoloc", place)
        if (!place.lat || !place.long) {
            getLocation();
        }
    }, [])


    useEffect(() => {
        //console.log("place canviada:", place)
        if (place.lat || place.long) {
            setCenter([place.lat, place.long]);
        }

        //afegim marcador
        setMarcadors([...marcadors, place])
    }, [place])



    function GestioEventsMapa() {
        const map = useMapEvents({
            click: (e) => {
                const { lat, lng } = e.latlng;
                coords({ coords: { latitude: lat, longitude: lng } })
            },
            locationfound: (location) => {
                //console.log('location found:', location)
            },
        })
        return null
    }

    const CentraMapa = ({ centre }) => {
        const map = useMap();
        useEffect(() => {
            fetch(`https://api.citybik.es/v2/networks/bicing`).then(res => res.json()).then(bicis => setMarcadoresBicis([...bicis.network.stations]))
            map.setView(centre);
        }, centre);
        return null;
    }


    return (
        <>

            <br />
            <input className='border p-2 w-[300px]' name="cerca" onChange={(e) => setCerca(e.target.value)} />
            <button className="border p-2 m-8" onClick={cercaAdr}>Cerca adreça</button>
            <br />
            <h1 className="text-2xl" >{place.adr}</h1>
            <br />
            {marcadoresBicis.map(e => {
                return (
                    <div className="" key={e.location}>
                        <h1>{e.location}</h1>
                    </div>
                )
            })}
            <MapContainer
                className="el-mapa"
                center={center}
                zoom={20}
                scrollWheelZoom={true}
            >
                <CentraMapa centre={center} />
                <GestioEventsMapa />
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {
                    marcadors.map((e, i) => (
                        <Marker key={i} position={[e.lat, e.long]} >
                            <Popup>
                                {e.adr}
                            </Popup>
                        </Marker>
                    ))
                }

            </MapContainer >
        </>

    )
}

export default MapaBicing;