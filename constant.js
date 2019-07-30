import {Dimensions} from 'react-native'


//width height
const window=Dimensions.get('window');

export const heightWindow=window.height;
export const widthWindow=window.width;

//colors

export const WHITE='#fff';
export const BLACK='#000';
export const LIGHTBLUE='#2d85ed';
export const BLUE='#315DFA';
export const LIGHTGREY='#A6B1C6';

//icons
export const searchBarImage=require('./images/icon_serch_small.png');
export const acceptImage=require('./images/accept.png');
export const acceptImageActive=require('./images/accept_check.png');
export const arrowRight=require('./images/arrow_right.png');