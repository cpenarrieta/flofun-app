import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  root: {
    flex: 0.1,
    backgroundColor: '$purpleColor',
    flexDirection: 'row',
  },
  bottomRight: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bottomLeft: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '2%',
  },
})

export default styles
