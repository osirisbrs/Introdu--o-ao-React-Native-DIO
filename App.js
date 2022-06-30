import React from "react";
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Button,
  Pressable,
  Linking,
} from "react-native";

const colorGitHub = "gray";
const imageProfileLinkein =
  "https://media-exp1.licdn.com/dms/image/C4E03AQENKTVAxcJYYw/profile-displayphoto-shrink_800_800/0/1654217113039?e=1661990400&v=beta&t=EOfgLxrYZSJGbdSWQYXUXcmLjy_9llDFLFbAQm2HSUo";
const urltoGitHub = "https://github.com/osirisbrs";
const urltoLinkeId = "https://www.linkedin.com/in/lclucascouto/";
const App = () => {
  const handlePressGoToGithub = async () => {
    const res = await Linking.canOpenURL(urltoGitHub);
    if (res) {
      await Linking.openURL(urltoGitHub);
    }
  };
  const handlePressGoToLinkeId = async () => {
    const res = await Linking.canOpenURL(urltoLinkeId);
    if (res) {
      await Linking.openURL(urltoLinkeId);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGitHub} barStyle="light-content" />
      <View style={style.content}>
        <Image style={style.avatar} source={{ uri: imageProfileLinkein }} />
        <Text style={[style.defaultText, style.name]}>Lucas Couto</Text>
        <Text style={[style.defaultText, style.descrition]}>
          Software Engineering | Backend | SRE | DevOps | NODEJS |
        </Text>
        <Pressable onPress={handlePressGoToLinkeId}>
          <View style={style.button}>
            <Text>Open in LinkedIn!</Text>
          </View>
          </Pressable>
          <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text>Open in GitHub!</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGitHub,
    flex: 1, //expandir para tela inteira
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  defaultText: {
    color: "white",
  },
  name: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 24,
  },
  descrition: {
    fontWeight: "bold",
    fontSize: 14,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    marginTop: 15,
  },
});
