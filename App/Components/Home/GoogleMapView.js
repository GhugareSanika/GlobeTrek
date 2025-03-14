import { View, Text, Dimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { UserLocationContext } from "../../Context/UserLocationContext";
import PlaceMarker from "./PlaceMarker";

export default function GoogleMapView({ placeList = [] }) {
  const [mapRegion, setMapRegion] = useState(null);

  const { location } = useContext(UserLocationContext);

  useEffect(() => {
    if (location?.coords) {
      console.log("Location:", location);
      console.log("Setting mapRegion:", location.coords);
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0421,
      });
    }
  }, [location]);

  return (
    <View style={{ marginTop: 20 }}>
      <Text
        style={{
          fontSize: 19,
          marginBottom: 10,
          fontWeight: "600",
          fontFamily: "LatoBold",
        }}
      >
        Top Near By Places
      </Text>
      <View style={{ borderRadius: 8, overflow: "hidden" }}>
        {mapRegion ? (
          <MapView
            style={{
              width: Dimensions.get("screen").width * 0.89,
              height: Dimensions.get("screen").height * 0.23,
            }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            region={mapRegion}
          >
            <Marker title="You" coordinate={mapRegion} />
            {placeList.map(
              (item, index) =>
                index <= 10 && <PlaceMarker item={item} key={index} />
            )}
          </MapView>
        ) : null}
      </View>
    </View>
  );
}
