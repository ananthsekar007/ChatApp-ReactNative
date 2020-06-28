import firebase from "firebase";
import React from "react";

class Fire extends React.Component {
    constructor() {
        super();
        this.init = this.init.bind(this);
        this.checkAuth = this.checkAuth.bind(this);
    }

    init = () => {
        if(!firebase.apps.length) {
            firebase.initializeApp({
                
            })
        }
    }
}
