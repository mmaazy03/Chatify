import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const IconMap = {
  MaterialCommunityIcons,
};

// export type IconType = 'MaterialCommunityIcons';

const Icon = ({ type = "FontAwesome", name, size, color, customStyles }) => {
  const IconComponent = IconMap[type];

  return (
    <IconComponent name={name} style={customStyles} size={size} color={color} />
  );
};

export default Icon;
