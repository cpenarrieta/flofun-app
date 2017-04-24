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
  authWelcomeTitle: {
    fontSize: 24,
    fontFamily: 'montserratBold',
    color: '$purpleColor',
    backgroundColor: 'transparent',
  },
  authWelcomeText: {
    fontSize: 16,
    fontFamily: 'montserrat',
    color: '$purpleColor',
    backgroundColor: 'transparent',
    textAlign: 'center',
    width: '70%',
  },
  bottomButtonWrapper: {
    flex: 0.2,
    flexDirection: 'row',
  },
  buttonAuth: {
    fontSize: 16,
    color: '$whiteColor',
    fontFamily: 'montserrat',
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  signUp: {
    backgroundColor: '$purpleColor',
  },
  signIn: {
    backgroundColor: '$purpleDarkColor',
  },
})

export default styles
