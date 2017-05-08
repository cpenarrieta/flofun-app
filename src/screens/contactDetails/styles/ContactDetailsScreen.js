import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  messageView: {
    marginTop: 15,
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
})

export default styles
