'use strict'

console.log('$$$$$$$')

const imageGallery = jest.genMockFromModule('@expo/react-native-image-gallery')

imageGallery.ImageGallery = () => {
  console.log('================================')
}
imageGallery.openImageGallery = () => {
  console.log('================================')
}

module.exports = imageGallery
