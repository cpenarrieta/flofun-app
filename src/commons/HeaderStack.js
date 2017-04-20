import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import styles from './styles/Header'

import Colors from '../../constants/colors'

const HeaderStack = (goBack, { hideBack } = {}) => {
  const style = { backgroundColor: Colors.purpleDarkColor }

  const titleStyle = {
    fontSize: 20,
    fontFamily: 'montserratBold',
    color: Colors.whiteColor,
    textAlign: 'center',
  }

  const left = hideBack ? null : (
    <TouchableOpacity style={styles.iconBack} onPress={() => goBack()}>
      <Ionicons
        name="ios-arrow-back"
        size={30}
        color="#fff"
      />
    </TouchableOpacity>
  )

  return { style, titleStyle, left }
}

export default HeaderStack
