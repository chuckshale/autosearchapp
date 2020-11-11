import React, { useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import { styles } from "./Styles";
const WebViewContainer = (props) => {
  const [loading, setLoader] = useState(props.validURL);

  return (
    <View style={styles.container}>
      {loading && (
        <View style={WebViewStyles.indicatorContainer}>
          <ActivityIndicator style={WebViewStyles.indicator} size="large" />
        </View>
      )}
      <View style={styles.innerContainer}>
        <WebView
          onLoadStart={() => setLoader(true)}
          onLoadEnd={() => setLoader(false)}
          onError={(e) => console.log(e)}
          source={{ uri: props.url }}
          style={{ marginTop: 0 }}
        />
      </View>
    </View>
  );
};

export default WebViewContainer;

const WebViewStyles = StyleSheet.create({
  indicatorContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  indicator: {
    position: "absolute",
    alignSelf: "center",
  },
});
