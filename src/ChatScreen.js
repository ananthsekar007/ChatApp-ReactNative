import React, {Component} from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import Fire from './../Fire';

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
    this.user = this.user.bind(this);
  }

  componentDidMount = () => {
    Fire.get((message) =>
      this.setState((previous) => {
        messages: GiftedChat.append(previous.message, message);
      }),
    );
  };

  componentWillUnmount = () => {
    Fire.off();
  };

  get user() {
    return {
      _id: Fire.uid,
      name: this.props.route.params.name,
    };
  }

  render() {
    const chat = (
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.sendMessages}
        user={this.user}
      />
    );

    if (Platform.OS === 'android') {
      retrun(
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior="padding"
          keyboardVerticalOffset={30}
          enabled={true}>
          {chat}
        </KeyboardAvoidingView>,
      );
    }
    return (
        <SafeAreaView style={{ flex: 1 }} >
            {chat}
        </SafeAreaView>
    );
  }
}
