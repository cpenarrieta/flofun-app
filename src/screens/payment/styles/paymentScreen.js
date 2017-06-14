import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  contentContainer: {
    flex: 0.9,
    flexDirection: 'column',
    padding: 10,
    alignContent: 'flex-start',
  },
  paymentButtons: {
    flex: 1,
    flexDirection: 'row',
  },
  paymentButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  checkoutItems: {
  },
  priceDetails: {
    marginTop: 5,
    alignItems: 'flex-end',
  },
  checkoutItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  priceItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: '$blackColor',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  selectedImage: {
    width: 76,
    height: 76,
    borderRadius: 38,
  },
  itemDesc: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 18,
    fontFamily: 'montserratLight',
  },
})

export default styles
