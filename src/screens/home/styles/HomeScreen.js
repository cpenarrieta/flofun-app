import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '$blackBackground'
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$blackBackground',
  },
  bottomContainer: {
    flex: 0.1,
    backgroundColor: '$bottomColor'
  },
  headerContainer: {
    flex: 0.1,
    backgroundColor: '$headerColor',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontFamily: 'montserratBold',
    color: '$whiteColor',
    textAlign: 'center',
    marginTop: 15
  }
})

export default styles
