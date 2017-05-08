import React, { Component } from 'react'
import { View, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { FormInput, FormLabel } from 'react-native-elements'
import { connect } from 'react-redux'
import { MaterialIcons } from '@expo/vector-icons'

import Footer from '../../commons/Footer'
import styles from './styles/ContactDetailsScreen'
import HeaderStack from '../../commons/HeaderStack'

@connect(
  state => ({
    selectedFlowers: state.flowerShop.selectedFlowers,
    contactDetails: state.contactDetails,
  }),
  {}
)
export default class ContactDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Provide Message',
    drawerLabel: 'Provide Message',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons
        name="message"
        size={20}
        color={tintColor}
      />
    ),
    ...HeaderStack(navigation),
  })

  renderMessage = (flower) => (
    <View style={styles.messageView} key={flower._id}>
      <FormInput
        placeholder="Message"
        maxLength={250}
        multiline
        numberOfLines={5}
        containerStyle={{ height: 100 }}
        inputStyle={{ height: 95 }}
      />
    </View>
  )

  render() {
    return (
      <TouchableWithoutFeedback style={styles.root} onPress={Keyboard.dismiss}>
        <View style={styles.root}>
          <StatusBar barStyle="light-content" />
          <View style={styles.rootTop}>
            <FormLabel>Sender</FormLabel>
            <FormInput
              // value={code}
              // onChangeText={val => handleChangeCode(val)}
              // inputStyle={styles.input}
              maxLength={200}
              placeholder="Sender Full Name"
              // keyboardType="phone-pad"
            />
            <FormLabel>Receiver</FormLabel>
            <FormInput
              // value={code}
              // onChangeText={val => handleChangeCode(val)}
              // inputStyle={styles.input}
              maxLength={200}
              placeholder="Receiver Full Name"
              // keyboardType="phone-pad"
            />
            {this.props.selectedFlowers.map(flower => this.renderMessage(flower))}
          </View>
          <Footer nextCallback={() => this.props.navigation.navigate('Payment')} />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
