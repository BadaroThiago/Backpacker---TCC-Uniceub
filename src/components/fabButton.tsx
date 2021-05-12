import React from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign, FontAwesome5, Entypo } from "@expo/vector-icons";

export default class FabButton extends React.Component {

  constructor(props) {
    super(props);
    this.animation = new Animated.Value(0),
    this.state = {
      open: false
    };
  }

  toggleMenu = () => {
    const toValue = this.state.open ? 0 : 1;

    //console.log('To value',toValue);
    //console.log('State open',this.state.open);
    Animated.spring(this.animation, {
      toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();

    this.setState({
        open : !this.state.open
    });
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
