/**
 *
 * isIPhoneX
 *
 */

import { Dimensions, Platform } from 'react-native'

export const isIPhoneX = () => {
  const { height } = Dimensions.get('window')

  return Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && (height === 812 || height === 896)
}

export const isIPhoneXs = () => {
  const { height } = Dimensions.get('window')

  return Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && height === 812
}

export const isIPhoneXsMax = () => {
  const { height } = Dimensions.get('window')

  return Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && height === 896
}
