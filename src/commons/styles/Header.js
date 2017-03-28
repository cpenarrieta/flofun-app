import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  headerContainer: {
    flex: 0.1,
    backgroundColor: '$headerColor',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontFamily: 'montserratBold',
    color: '$whiteColor',
    textAlign: 'center'
  }
})

export default styles
