import React from "react";
import {
  MapContainer,
  TileLayer,
  ImageOverlay,
  Marker,
  Popup
} from "react-leaflet";
import { CRS, Icon } from "leaflet";
import { useMap } from "./map-context";
import iconCircle from "./shared/CircleIcon"

function Map({ markerInfo }){
  //const [mapFly, setMapFly] = useState(null);
  const { setMapFly } = useMap();

  return (
    <>
      <div
        style={{
          height: "50%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MapContainer
          doubleClickZoom={false}
          id="mapId"
          zoom={0}
          center={[241, 250]}
          crs={CRS.Simple}
          whenCreated={(theMap) => setMapFly(theMap)}
        >
          <ImageOverlay
            url="https://i.imgur.com/kbgtLlk.png"
            bounds={[
              [0, 0],
              [482.5, 500]
            ]}
          />

          <Marker icon={iconCircle} position={[50, 330]}>
            <Popup>Beacon 1</Popup>
          </Marker>
          <Marker icon={iconCircle} position={[325, 300]}> //9.03, 8.33
            <Popup>Beacon 2</Popup>
          </Marker>
          <Marker icon={iconCircle} position={[250, 400]}> //6.94, 11.11
            <Popup>Beacon 3</Popup>
          </Marker>
          {/*<Marker position={[200.5, 672.5]}>
            <Popup>WD113</Popup>
          </Marker>
          <Marker position={[260, 900]}>
            <Popup>Single Bed Includision Ward</Popup>
          </Marker>*/}
          {markerInfo.map((marker) => (
            <Marker key={marker.ID} position={marker.posCoords}>
              <Popup>{marker.ID}</Popup>
            </Marker>
          ))
          }
            
        </MapContainer>
      </div>
      <div
        style={{
          flexDirection: "column",
          width: "100px",
          margin: "auto",
          textAlign: "center"
        }}
      >
        {/* <MarkerButton btnLabel="Transmitter 1" pos={[260, 900]} map={mapFly} />
        <MarkerButton
          btnLabel="Transmitter 2"
          pos={[200.5, 672.5]}
          map={mapFly}
        /> */}
      </div>
    </>
  );
};

export default Map;
