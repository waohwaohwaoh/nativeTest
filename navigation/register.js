import { Navigation } from 'react-native-navigation';
import Screen1 from '../screens/Search';
import Screen2 from '../screens/Analytics';
import Screen3 from '../screens/PersonalArea';
import Screen4 from '../screens/Favorites';

export default (store, Provider) =>  {
    Navigation.registerComponent('Screen1', () => Screen1, store, Provider);
  Navigation.registerComponent('Screen2', () => Screen2, store, Provider);
  Navigation.registerComponent('Screen3', () => Screen3, store, Provider);
  Navigation.registerComponent('Screen4', () => Screen4, store, Provider);
}
  