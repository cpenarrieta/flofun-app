import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  bottomContainer: {
    flex: 0.1,
    backgroundColor: '$purpleColor',
    flexDirection: 'row',
  },
  bottomText: {
    color: '$whiteColor',
    fontSize: 16,
    fontFamily: 'montserratMedium',
  },
  bottomLeft: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomRight: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: '$blackColor',
    borderWidth: 3,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedImage: {
    width: 76,
    height: 76,
    borderRadius: 38,
  },
  closeIcon: {
    position: 'absolute',
    top: 1,
    left: 6,
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
})

export default styles
