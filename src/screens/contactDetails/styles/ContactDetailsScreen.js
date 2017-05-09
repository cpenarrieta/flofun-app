import EStyleSheet from 'react-native-extended-stylesheet'
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width * 0.9

const styles = EStyleSheet.create({
  messageView: {
    marginTop: 5,
  },
  root: {
    flex: 1,
  },
  rootBottom: {
    flex: 0.1,
    backgroundColor: '$purpleColor',
  },
  rootTop: {
    flex: 0.9,
  },
  input: {
    width,
    fontFamily: 'montserrat',
  },
  label: {
    fontFamily: 'montserratBold',
  },
  messageInput: {
    height: 95,
    width,
    fontFamily: 'montserrat',
  },
  messageContainer: {
    height: 100,
    width,
  },
})

export default styles
