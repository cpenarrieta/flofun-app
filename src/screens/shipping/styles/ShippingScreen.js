import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
  },
  mapView: {
    flex: 1,
  },
  addressText: {
    fontSize: 14,
    fontFamily: 'montserrat',
    color: '$whiteColor',
  },
})

export default styles
