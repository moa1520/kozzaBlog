import Vue from 'vue'
import * as firebase from 'firebase/app'
import firebaseConfig from '../../firebaseConfig'

// Add the Firebase services that you want to use
// import 'firebase/auth'
import 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyDn2DS68Cqj60ATDvLu8HIOkhdjrj75Cuo',
//   authDomain: 'kozzablog.firebaseapp.com',
//   databaseURL: 'https://kozzablog.firebaseio.com',
//   projectId: 'kozzablog',
//   storageBucket: 'kozzablog.appspot.com',
//   messagingSenderId: '411428373323',
//   appId: '1:411428373323:web:65a41133d6f8570a1fdece',
//   measurementId: 'G-Z7VLL9MZ3E'
// }
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

firebase.firestore().collection('test').add({ test: 'aaa' })
  .then(r => console.log(r))
  .catch(e => console.log(e))
