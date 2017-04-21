import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles/Header'

import Colors from '../../constants/colors'

const HeaderStack = (goBack, { hideBack } = {}) => {
  const headerStyle = { backgroundColor: Colors.purpleDarkColor }

  const headerTitleStyle = {
    fontSize: 20,
    fontFamily: 'montserratBold',
    color: Colors.whiteColor,
    textAlign: 'center',
  }

  const headerLeft = hideBack ? null : (
    <TouchableOpacity style={styles.iconBack} onPress={() => goBack()}>
      <Ionicons
        name="ios-arrow-back"
        size={30}
        color="#fff"
      />
    </TouchableOpacity>
  )

  return { headerStyle, headerTitleStyle, headerLeft }
}

export default HeaderStack
