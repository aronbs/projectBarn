import React from "react";
import { Image } from "react-native";

const HeaderTitle = () => (
  <Image
    source={require("../assets/img/booking-logo.png")}
    style={{ height: 30, width: 120 }}
  />
);

export default HeaderTitle;
