import React from "react";
import { TouchableOpacity, Icon } from "react-native";

export const HeaderIcon = ({ onpress, Iconname, IconStyle }) => {
  return (
    <TouchableOpacity onPress={() => onpress}>
      <Icon
        name={Iconname || "md-arrow-back"}
        size={20}
        color="#FFFFFF"
        style={{ top: "5.47%", left: "2.06%", zIdex: 1, ...IconStyle }}
      />
    </TouchableOpacity>
  );
};
