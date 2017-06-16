import EStyleSheet from 'react-native-extended-stylesheet'
import { StyleSheet } from 'react-native'

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
    backgroundColor: '$quantityColor',
  },
  titleSection: {
    height: 45,
    width: '55%',
    justifyContent: 'center',
    backgroundColor: '$grayColor',
  },
  priceSection: {
    height: 45,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$purpleColor',
  },
  quantitySection: {
    height: 45,
    backgroundColor: '$quantityColor',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '0%',
  },
  quantityText: {
    fontSize: 20,
    fontFamily: 'montserratBold',
    color: '$purpleColor',
    paddingHorizontal: 15,
    backgroundColor: 'transparent',
  },
  quantitySelectorButton: {
    backgroundColor: '$purpleDarkColor',
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  quantitySelectorButtonText: {
    fontSize: 30,
    lineHeight: 30,
    color: '#f4efff',
  },
  addToCart: {
    height: 45,
    width: '15%',
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
  modal: {
    width: 300,
    height: 400,
    backgroundColor: '$whiteColor',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundModal: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
})

export default styles
