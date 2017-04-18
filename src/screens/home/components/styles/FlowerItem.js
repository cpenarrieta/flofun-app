import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  root: {
    width: '95%',
    height: 160,
    marginTop: '1.5%',
    backgroundColor: '$purpleColor',
    flexDirection: 'row',
  },
  imageSection: {
    flex: 0.7,
  },
  image: {
    flex: 1,
  },
  flowerDesc: {
    flex: 0.3,
    flexDirection: 'column',
  },
  titleSection: {
    flex: 0.7,
    paddingLeft: 5,
    paddingTop: 5,
    backgroundColor: '$grayColor',
  },
  priceSection: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$purpleColor',
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
