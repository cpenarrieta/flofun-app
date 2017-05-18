import React, { Component } from 'react'
import { View, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { FormInput, FormLabel } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'
import { MaterialIcons } from '@expo/vector-icons'

import Footer from '../../commons/Footer'
import styles from './styles/ContactDetailsScreen'
import HeaderStack from '../../commons/HeaderStack'
import {
  handleChangeSender as handleChangeSenderAction,
  handleChangeRecipient as handleChangeRecipientAction,
} from './actions'
import {
  handleChangeMessage as handleChangeMessageAction,
} from '../flowersShop/actions'

@connect(
  state => ({
    selectedFlowers: state.flowerShop.selectedFlowers,
    contactDetails: state.contactDetails,
  }),
  {
    handleChangeSender: handleChangeSenderAction,
    handleChangeRecipient: handleChangeRecipientAction,
    handleChangeMessage: handleChangeMessageAction,
  }
)
export default class ContactDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Contact Info',
    drawerLabel: 'Contact Information',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons
        name="message"
        size={20}
        color={tintColor}
      />
    ),
    ...HeaderStack(navigation),
  })

  renderMessage = (flower, key) => (
    <View style={styles.messageView} key={flower._id}>
      <FormLabel labelStyle={styles.label}>{`Message for ${flower.title}`}</FormLabel>
      <FormInput
        value={flower.message}
        onChangeText={val => this.props.handleChangeMessage(val, key)}
        placeholder="Message"
        maxLength={250}
        multiline
        numberOfLines={5}
        containerStyle={styles.messageContainer}
        inputStyle={styles.messageInput}
      />
    </View>
  )

  render() {
    const { selectedFlowers, navigation, contactDetails, handleChangeSender, handleChangeRecipient } = this.props

    return (
      <TouchableWithoutFeedback style={styles.root} onPress={Keyboard.dismiss}>
        <View style={styles.root}>
          <StatusBar barStyle="light-content" />
          <KeyboardAwareScrollView
            contentContainerStyle={styles.rootTop}
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled
          >
            <FormLabel labelStyle={styles.label}>Sender</FormLabel>
            <FormInput
              value={contactDetails.senderName}
              onChangeText={val => handleChangeSender(val)}
              maxLength={200}
              placeholder="Sender Full Name"
              inputStyle={styles.input}
            />
            <FormLabel labelStyle={styles.label}>Receiver</FormLabel>
            <FormInput
              value={contactDetails.recipientName}
              onChangeText={val => handleChangeRecipient(val)}
              maxLength={200}
              placeholder="Receiver Full Name"
              inputStyle={styles.input}
            />
            {selectedFlowers.map((flower, key) => this.renderMessage(flower, key))}
          </KeyboardAwareScrollView>
          <Footer nextCallback={() => navigation.navigate('Payment')} />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
