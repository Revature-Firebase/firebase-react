import React from "react";
import "./App.css";
import MainTabPanel from "./components/MainTabPanel";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import logo from "./logo.svg";
import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd,
} from "@react-firebase/auth";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "rgb(41, 114, 255)",
    },
  },
});

const config = {
  apiKey: "AIzaSyD_ybaiHaGC0LobWwODnBwS9hKYg1ltOcs",
  authDomain: "fir-demo-1c557.firebaseapp.com",
  projectId: "fir-demo-1c557",
  storageBucket: "fir-demo-1c557.appspot.com",
  messagingSenderId: "68185354875",
  appId: "1:68185354875:web:e01f97050875f4b97228de",
  measurementId: "G-L9CB6SL6NL",
  databaseURL: "https://fir-demo-1c557-default-rtdb.firebaseio.com/",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  // firebase.analytics();
}

function App() {
  return (
    <FirebaseAuthProvider firebase={firebase} {...config}>
      <ThemeProvider theme={theme}>
        <img src={logo} className="App-logo" alt="logo" />
        <MainTabPanel />
      </ThemeProvider>
    </FirebaseAuthProvider>
  );
}

export default App;
