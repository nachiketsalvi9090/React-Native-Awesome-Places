import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource('ios-map', 28),
    Icon.getImageSource('ios-share-alt', 28),
    Icon.getImageSource('ios-list', 28)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'awesome-places.FindPlaceScreen',
          label: 'Find Place',
          title: 'Find Place',
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                id: 'sideDrawerToggle',
                icon: sources[2],
                title: 'Menu'
              }
            ]
          }
        },
        {
          screen: 'awesome-places.SharePlaceScreen',
          label: 'Share Place',
          title: 'Share Place',
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                id: 'sideDrawerToggle',
                icon: sources[2],
                title: 'Menu'
              }
            ]
          }
        }
      ],
      drawer: {
        left: {
          screen: 'awesome-places.SideDrawer'
        }
      }
    });
  });
};

export default startTabs;
