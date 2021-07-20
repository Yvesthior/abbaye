import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  state = {
    text: "",
  };
  componentDidMount() {
    fetch("https://api.aelf.org/v1/sexte/2021-07-18/afrique")
      .then((response) => response.json())
      .then((response) => {
        const regex = /(<([^>]+)>)/gi;
        const result = response.sexte.hymne.texte.replace(regex, "");
        const data = Object.values(response);
        console.log(data);
        this.setState({ text: result });
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    paddingLeft: 40,
  },
});

const Container = styled.View`
  flex: 1;
  background: white;
`;

const TopC = styled.View`
  background: #bc2d24;
  padding-top: 0;
`;

const Text = styled.Text``;

const TitleBar = styled.View`
  margin-top: 50px;
  flex-direction: row;
  align-items: center;
  background-color: #bc2d24;
  height: 50px;
`;

const Title = styled.Text`
  margin-left: 20px;
  font-size: 24px;
  color: white;
`;

const Date = styled.Text`
  margin-right: 20px;
  font-size: 18px;
  color: white;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 10px;
`;

const Content = styled.View``;
