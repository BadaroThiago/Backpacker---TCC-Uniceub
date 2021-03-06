import Constants from "expo-constants";
import { Platform } from "react-native";

const localhost = Platform.OS === "ios" ? "http://localhost:8081" : "http://10.0.2.2:8081";
const firebaseUrl = Platform.OS === "ios" ? "http://localhost:9099" : "http://10.0.2.2:9099";

const ENV = {
  dev: {
    apiUrl: localhost,
    firebaseUrl: firebaseUrl,
    firebase: {
      apiKey: "AIzaSyC9bmfTTm7kPJnOHIXdC9da7WE5sRIVrHI",
      authDomain: "tcc-backpacker.firebaseapp.com",
      projectId: "tcc-backpacker",
      storageBucket: "tcc-backpacker.appspot.com",
      messagingSenderId: "659122628165",
      appId: "1:659122628165:web:4c4ac56609c007e0b1652c",
    },
  },
  staging: {
    apiUrl: "https://tcc-backpacker.herokuapp.com",
    firebaseUrl: firebaseUrl,
    firebase: {
      apiKey: "AIzaSyC9bmfTTm7kPJnOHIXdC9da7WE5sRIVrHI",
      authDomain: "tcc-backpacker.firebaseapp.com",
      projectId: "tcc-backpacker",
      storageBucket: "tcc-backpacker.appspot.com",
      messagingSenderId: "659122628165",
      appId: "1:659122628165:web:4c4ac56609c007e0b1652c",
    },
  },
  prod: {
    apiUrl: "https://tcc-backpacker.herokuapp.com",
    firebaseUrl: firebaseUrl,
    firebase: {
      apiKey: "AIzaSyC9bmfTTm7kPJnOHIXdC9da7WE5sRIVrHI",
      authDomain: "tcc-backpacker.firebaseapp.com",
      projectId: "tcc-backpacker",
      storageBucket: "tcc-backpacker.appspot.com",
      messagingSenderId: "659122628165",
      appId: "1:659122628165:web:4c4ac56609c007e0b1652c",
    },
  },
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  if (__DEV__) {
    return ENV.dev;
  }
  if (env == "staging") {
    return ENV.staging;
  }
  if (env == "prod") {
    return ENV.prod;
  }
  return ENV.staging;
};

export default getEnvVars;
