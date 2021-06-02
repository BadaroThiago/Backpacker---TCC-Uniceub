import React from "react";
import { ActivityIndicator, View } from "react-native";

const LoadingView = () => {
  return (
    <View
      style={{
        zIndex: 1,
        backgroundColor: "white",
        opacity: 0.2,
        height: "100%",
        width: "100%",
        position: "absolute",
        justifyContent: "center",
      }}
    >
      <ActivityIndicator size="large" color="black" />
    </View>
  );
};

export const BPLoadingView = ({ children, isLoading }) => {
  return (
    <View style={{ flex: 1 }}>
      {isLoading ? <LoadingView /> : <View />}
      {children}
    </View>
  );
};
