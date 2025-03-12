import { View, Text, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Home/Header";
import GoogleMapView from "../Components/Home/GoogleMapView";
import CategoryList from "../Components/Home/CategoryList";
import GlobalApi from "../Services/GlobalApi";
import PlaceList from "../Components/Home/PlaceList";
import { UserLocationContext } from "../Context/UserLocationContext";

export default function Home() {
  const [placeList, setPlaceList] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      // Ensure location is not null before calling APIconsole.log("Location in Home:", location);
      console.log("Location in Home:", location);

      GetNearBySearchPlace("restaurant");
    }
  }, [location]); // Run when location is available

  const GetNearBySearchPlace = (value) => {
    if (!location || !location.coords) return; // Prevent error

    console.log("Category:", value);
    GlobalApi.nearByPlace(
      location.coords.latitude,
      location.coords.longitude,
      value
    )
      .then((resp) => {
        if (resp.data && resp.data.results) {
          setPlaceList(resp.data.results);
          console.log("results", resp.data.results);
          console.log("placeList:", placeList);
        }
      })
      .catch((error) => console.error("Error fetching nearby places:", error));
  };

  return (
    <ScrollView
      style={{
        padding: 20,
      }}
    >
      <Header />
      <GoogleMapView placeList={placeList} />
      <CategoryList
        setSelectedCategory={(value) => GetNearBySearchPlace(value)}
      />
      {placeList.length > 0 && <PlaceList placeList={placeList} />}
    </ScrollView>
  );
}
