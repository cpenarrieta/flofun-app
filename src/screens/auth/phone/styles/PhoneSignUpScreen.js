import EStyleSheet from 'react-native-extended-stylesheet'
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width * 0.6

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$whiteColor',
  },
  titleRoot: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authTitle: {
    fontSize: 30,
    fontFamily: 'montserratBold',
    color: '$purpleDarkColor',
    backgroundColor: 'transparent',
  },
  phoneRoot: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRoot: {
    flex: 2,
  },
  input: {
    width,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'montserrat',
  },
  buttonStyle: {
    width,
  },
  goBack: {
    marginLeft: 10,
  },
  headerStyle: {
    backgroundColor: '$whiteColor',
  },
})

export default styles
