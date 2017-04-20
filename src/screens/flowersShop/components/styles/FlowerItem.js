import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  root: {
    width: '95%',
    height: 200,
    marginTop: '1.5%',
    backgroundColor: '$whiteColor',
    flexDirection: 'column',
  },
  lastFlower: {
    marginBottom: '1.5%',
  },
  imageSection: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  flowerDesc: {
    flexDirection: 'row',
    height: 45,
    alignItems: 'center',
  },
  titleSection: {
    height: 45,
    flex: 0.55,
    paddingLeft: 5,
    justifyContent: 'center',
    backgroundColor: '$grayColor',
  },
  priceSection: {
    height: 45,
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$purpleColor',
  },
  addToCart: {
    height: 45,
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$purpleDarkColor',
  },
  title: {
    fontSize: 15,
    fontFamily: 'montserratBold',
    color: '$whiteColor',
  },
  subTitle: {
    fontSize: 12,
    fontFamily: 'montserrat',
    color: '$whiteColor',
  },
  price: {
    fontSize: 16,
    fontFamily: 'montserratMedium',
    color: '$whiteColor',
  },
  priceSelected: {
    backgroundColor: '$greenColor',
  },
})

export default styles
