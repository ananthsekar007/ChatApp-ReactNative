import firebase from 'firebase';
import React from 'react';

class Fire extends React.Component {
  constructor() {
    super();
    this.init = this.init.bind(this);
    this.checkAuth = this.checkAuth.bind(this);
    this.sendMessages = this.sendMessages.bind(this);
    this.parse = this.parse.bind(this);
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyCsENVkukxc2NRTivN16GJW996vDVEdwo4',
        authDomain: 'chatapp-dbac9.firebaseapp.com',
        databaseURL: 'https://chatapp-dbac9.firebaseio.com',
        projectId: 'chatapp-dbac9',
        storageBucket: 'chatapp-dbac9.appspot.com',
        messagingSenderId: '667270153505',
        appId: '1:667270153505:web:f3a8379013a5cd9227ea60',
        measurementId: 'G-5K7PEHSDWB',
      });
    }
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };

  sendMessages = (message) => {
    message.map((item, index) => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
      };
      this.db.push(message);
    });
  };

  parse = (message) => {
    const {user, text, timestamp} = message.val();
    const {key: _id} = message;
    const createdAt = new Date(timestamp);

    return {
      _id,
      createdAt,
      text,
      user,
    };
  };

  get = (callback) => {
    this.db.on('child_added', (snapshot) => callback(this.parse(snapshot)));
  };

  off = () => {
    this.db.off();
  };

  get db() {
    return firebase.database().ref('message');
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  };
}

export default new Fire();
