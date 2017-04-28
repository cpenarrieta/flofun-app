import EStyleSheet from 'react-native-extended-stylesheet'

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
})

export default styles
