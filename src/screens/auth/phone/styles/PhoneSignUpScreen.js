import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$whiteColor',
  },
  authTitle: {
    fontSize: 30,
    fontFamily: 'montserratBold',
    color: '$purpleDarkColor',
    backgroundColor: 'transparent',
  },
  phoneRoot: {
    flex: 1,
  },
})

export default styles
