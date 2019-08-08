import { Navigation } from 'react-native-navigation';

import registerScreens from './navigation/register'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './reducers'
import ReduxThunk from 'redux-thunk'

const initialState={
  rangePrice:{
    startPrice:null,
    endPrice:null
  }
}
const store=createStore(reducer, initialState,applyMiddleware(ReduxThunk))
registerScreens(store,Provider);


export default () => {
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

