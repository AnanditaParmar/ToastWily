import * as firebase from "firebase"
import React from "react";
import { render } from "react-dom";
import { TouchableOpacity } from "react-native-gesture-handler";
require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyCRiY3ZcnKkXm1ZvozPuH-flDtUXeT0PMg",
    authDomain: "wily-7f43b.firebaseapp.com",
    projectId: "wily-7f43b",
    storageBucket: "wily-7f43b.appspot.com",
    messagingSenderId: "534856960082",
    appId: "1:534856960082:web:d45ebc5404bffe2b6e378b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore()


