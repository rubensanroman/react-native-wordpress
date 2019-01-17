import React from 'react'
import { Image } from 'react-native'
import Styles from './styles'

const PreloaderComponent = () => (
  <Image source={require('./image_preloader.gif')} style={Styles.preloader} />
)

export default PreloaderComponent
