import React from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign, FontAwesome5, Entypo } from "@expo/vector-icons";

export default class FabButton extends React.Component {
  // TODO: isso aqui fica no constructor
  animation = new Animated.Value(0);

  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleMenu = () => {
    // TODO: declarar `this.open` como state
    const toValue = this.open ? 0 : 1;

    Animated.spring(this.animation, {
      toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();

    // TODO: para atualizar valores de state, usar setState
    this.open = !this.open;
  };

  render() {
    // TODO: colocar como functions da classe
    const editTravel = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -130],
          }),
        },
      ],
    };

    // TODO: colocar como functions da classe
    const editProfile = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -90],
          }),
        },
      ],
    };

    // TODO: colocar como functions da classe
    const addTravel = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -50],
          }),
        },
      ],
    };

    // TODO: colocar como functions da classe
    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "180deg"],
          }),
        },
      ],
    };

    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableWithoutFeedback
          onPress={() => this.props.render.navigate("ResetPassword")}
        >
          <Animated.View style={[styles.button, styles.submenu, editTravel]}>
            <Entypo name="edit" size={20} color="#333C47"></Entypo>
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => this.props.render.navigate("EditProfile")}
        >
          <Animated.View style={[styles.button, styles.submenu, editProfile]}>
            <FontAwesome5 name="user-edit" size={18} color="#333C47" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => this.props.render.navigate("ResetPassword")}
        >
          <Animated.View style={[styles.button, styles.submenu, addTravel]}>
            <AntDesign name="addusergroup" size={24} color="#333C47" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.button, rotation]}>
            <FontAwesome5 name="ellipsis-h" size={24} color="#333C47" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "absolute",
  },

  button: {
    position: "absolute",
    width: 45,
    height: 45,
    borderRadius: 60 / 2,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 10,
    shadowColor: "#00213B",
    backgroundColor: "#1DA1F2",
    shadowOpacity: 0.3,
  },

  submenu: {
    width: 36,
    height: 36,
    borderRadius: 40 / 2,
    backgroundColor: "#1DA1F2",
  },
});
