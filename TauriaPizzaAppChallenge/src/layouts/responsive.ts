import { Dimensions, PixelRatio } from 'react-native';
const { width, height } = Dimensions.get('window');

const screenWidth = parseFloat(width.toFixed(1)),
  screenHeight = parseFloat(height.toFixed(1)),
  guideLineBaseWidth = 350,
  guideLineBaseHeight = 680,
  scale = screenWidth / guideLineBaseWidth;

const normalize = (size: number) => {
  const newSize = size * scale
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) -2 ;
}


export { normalize };