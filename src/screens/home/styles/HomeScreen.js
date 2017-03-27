import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '$blackBackground'
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$blackBackground',
    marginTop: '3%',
  },
  bottomContainer: {
    flex: 0.1,
    marginTop: '3%',
    backgroundColor: 'peru'
  }
})

export default styles
