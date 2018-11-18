import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

//Guideline sizes are based on iPhone 6 screen
const guidelineBaseWidth = 375
const guidelineBaseHeight = 667

const defaultScaleFactor = width < guidelineBaseWidth ? 1 : 0.5

export const scale = size => (width / guidelineBaseWidth) * size

export const verticalScale = size => (height / guidelineBaseHeight) * size

export const moderateScale = (size, factor = defaultScaleFactor) => size + (scale(size) - size) * factor
