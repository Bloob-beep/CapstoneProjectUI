import React, { useState } from "react";
import "./styles.css";
import { MapProvider } from "./map-context";
import UserData from "./scenes/UserData";

export default function App() {
  return (
      <div className="App" style={{ height: "100%" }}>
        <MapProvider>
          <UserData />
          
        </MapProvider>
      </div>
  );
}
