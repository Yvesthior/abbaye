import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default class LecturesScreen extends React.Component {
  state = {
    text: "",
  };
  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);
    fetch("https://api.aelf.org/v1/sexte/2021-07-18/afrique")
      .then((response) => response.json())
      .then((response) => {
        const regex = /(<([^>]+)>)/gi;
        const result = response.sexte.hymne.texte.replace(regex, "\n");
        console.log(response.informations);
        this.setState({ text: result });
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  }

  render() {
    return (
      <Container>
        <StatusBar
          animated={false}
          backgroundColor="black"
          barStyle="dark-content"
        />
        <HeaderNav>
          <TitleBar>
            <Ionicons name="menu-outline" size={30} color="white" />
            <Title>Lectures</Title>
            <Wrapper>
              <Date>Aujourd'hui</Date>
              <Entypo name="dots-three-horizontal" size={24} color="white" />
            </Wrapper>
          </TitleBar>
        </HeaderNav>

        <Content>
          <Text>{this.state.text}</Text>
        </Content>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background: white;
`;

const HeaderNav = styled.View`
  background: #bc2d24;
`;

const Text = styled.Text`
  font-size: 20px;
`;

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
