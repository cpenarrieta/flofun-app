import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  headerContainer: {
    flex: 0.1,
    backgroundColor: '$purpleDarkColor',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'montserratBold',
    color: '$whiteColor',
    textAlign: 'center',
  },
  iconBack: {
    marginLeft: '3%',
    marginRight: '1%',
  },
  menu: {
    marginLeft: '3%',
  },
  headerLeft: {
    flexDirection: 'row',
  },
})

export default styles
