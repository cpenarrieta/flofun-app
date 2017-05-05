import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Ionicons, Entypo } from '@expo/vector-icons'
import styles from './styles/Header'

import Colors from '../../constants/colors'

const HeaderStack = (navigation, { hideBack } = {}) => {
  const headerStyle = { backgroundColor: Colors.purpleDarkColor }

  const headerTitleStyle = {
    fontSize: 20,
    fontFamily: 'montserratBold',
    color: Colors.whiteColor,
    textAlign: 'center',
  }

  const arrowBack = hideBack ? null : (
    <TouchableOpacity style={styles.iconBack} onPress={() => navigation.goBack()}>
      <Ionicons
        name="ios-arrow-back"
        size={30}
        color="#fff"
      />
    </TouchableOpacity>
  )

  const headerLeft = (
    <View style={styles.headerLeft}>
      {arrowBack}
      <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('DrawerOpen')}>
        <Entypo
          name="menu"
          size={30}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  )

  return { headerStyle, headerTitleStyle, headerLeft }
}

export default HeaderStack
