import { Navigation } from 'react-native-navigation';

import Screen1 from './screens/Search';
import Screen2 from './screens/Analytics';
import Screen3 from './screens/PersonalArea';
import Screen4 from './screens/Favorites';

export default () => {
  Navigation.registerComponent('Screen1', () => Screen1);
  Navigation.registerComponent('Screen2', () => Screen2);
  Navigation.registerComponent('Screen3', () => Screen3);
  Navigation.registerComponent('Screen4', () => Screen4);
  Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Поиск',
          screen: 'Screen1',
          icon: require('./images/seacrh.png'),
          selectedIcon: require('./images/favorites_active.png'),
          title: 'Поиск закупок'
        },
        {
          label: 'Избранное',
          screen: 'Screen2',
          icon: require('./images/favorites.png'),
          selectedIcon: require('./images/favorites_active.png'),
          title: 'Избранное'
        },
        {
          label:'Аналитика',
          screen:'Screen3',
          icon: require('./images/graph.png'),
          selectedIcon: require('./images/graph_active.png'),
          title: 'Аналитика'
        },
        {
          label:'Кабинет',
          screen:'Screen4',
          icon:require('./images/personal_area.png'),
          selectedIcon:require('./images/personal_area_active.png'),
          title:'Кабинет'
        }
      ]
    });
};

