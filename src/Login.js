import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Image, Dimensions, TouchableOpacity} from 'react-native';
import chatLogo from './../assets/chat-logo.png';
// import Icons from "react-native-vector-icons/AntDesign";

const {width: WIDTH} = Dimensions.get('window');
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle} />
        <View style={{marginTop: 25, width: 200, height: 200}}>
          <Image source={chatLogo} style={styles.chatLogo} />
        </View>
        <View>
          <Text style={styles.usernameText}>Username</Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder={'Please Enter Username'}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
          />
        </View>
        <View>
            <TouchableOpacity>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F7',
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    position: 'absolute',
    top: -20,
    backgroundColor: '#ffff',
    left: -130,
  },
  chatLogo: {
    flex: 1,
    maxWidth: '100%',
    marginLeft: 80,
  },
  usernameText: {
    fontWeight: 'bold',
    fontSize: 26,
    marginLeft: 20,
    marginBottom: 20,
  },
  textInput: {
      alignSelf: "center",
      width: WIDTH - 60,
      height: 40,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: "#A3A3A3",
      borderRadius: 30,
      paddingHorizontal: 20,
      color: "#8A8A8A"
  },
});
