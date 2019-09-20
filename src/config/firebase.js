import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBeLMpcoFGCFJcir1ewCUzcsbpbElEX_w0",
  authDomain: "tesqui-320f6.firebaseapp.com",
  databaseURL: "https://tesqui-320f6.firebaseio.com",
  projectId: "tesqui-320f6",
  storageBucket: "tesqui-320f6.appspot.com",
  messagingSenderId: "838553491748"
};
firebase.initializeApp(config);

export default firebase;
