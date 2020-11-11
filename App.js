import React, { useState, useEffect } from "react";
import { Text, View, TextInput } from "react-native";
import { styles } from "./components/Styles";
import WebViewContainer from "./components/WebViewContainer";

const App = () => {
  const [url, setUrl] = useState("");
  const [valid, setValidURL] = useState(false);

  const validateUrl = (textval) => {
    var urlregex = new RegExp(
      "^(http|https|ftp)://([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&amp;%$-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0).(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9-]+.)*[a-zA-Z0-9-]+.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(/($|[a-zA-Z0-9.,?'\\+&amp;%$#=~_-]+))*$"
    );
    if (urlregex.test(textval.toLowerCase())) {
      setValidURL(true);
    } else {
      setValidURL(false);
    }
    setUrl(textval);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Auto Search App</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.label}> Please enter text </Text>
        <TextInput
          onChangeText={(text) => validateUrl(text)}
          style={styles.input}
          value={url}
        />
        {valid !== true && (
          <Text style={styles.error}>Invalid url typed / passed</Text>
        )}
        {valid && <WebViewContainer validURL={valid} url={url} />}
      </View>
    </View>
  );
};

export default App;
