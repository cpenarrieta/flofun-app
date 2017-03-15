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
    backgroundColor: 'yellow',
    marginTop: '10%',
  },
  bottomContainer: {
    flex: 0.2,
    backgroundColor: 'peru'
  }
})

export default styles
