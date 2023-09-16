import { Dimension } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ww = (a)=>windowWidth*a/428;
export const wp = (a)=>a/428*100;
export const hp = (a)=>a/1024*100