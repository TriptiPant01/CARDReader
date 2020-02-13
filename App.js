import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Platform } from 'react-native';
import { CardIOModule, CardIOUtilities } from 'react-native-awesome-card-io';

class CardIOExample extends Component {

  componentWillMount() {
    if (Platform.OS === 'ios') {
      CardIOUtilities.preload();
    }
  }

  scanCard() {
    CardIOModule
      .scanCard()
      .then(card => {
        alert(`your card number is ${card.cardNumber}`)
        // console.log(card)
        // // the scanned card
      })
      .catch(() => {
        alert('user has cancel')
        // the user cancelled
      })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={this.scanCard.bind(this)}>
          <Text style={{ backgroundColor: 'lightgrey', padding: 20, borderRadius: 10 }}>Tap to open card reader screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default CardIOExample