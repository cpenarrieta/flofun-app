import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  root: {
    width: '95%',
    height: 160,
    marginTop: '1.5%',
    backgroundColor: '$flowerDesColor',
    flexDirection: 'row'
  },
  image: {
    flex: 1,
    width: 200
  },
  flowerDesc: {
    flex: 0.4,
    marginLeft: 5,
    marginTop: 5
  },
  title: {
    fontSize: 16,
    fontFamily: 'montserrat',
    color: '$whiteColor'
  },
  price: {
    fontSize: 16,
    fontFamily: 'montserrat',
    color: '$whiteColor'
  }
})

export default styles
