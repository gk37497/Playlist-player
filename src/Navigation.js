import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {MyTabBar} from './components/tab-bar';
import {AboutScreen} from './screens/AboutScreen';
import {InstagramScreen} from './screens/GalleryScreen';
import {PlayerScreen} from './screens/PlayerScreen';
import {ThemesScreen} from './screens/ThemesScreen';

const Tab = createMaterialTopTabNavigator();

export function TopTabs() {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        tabBarScrollEnabled: true,
      }}>
      <Tab.Screen name="Player" component={PlayerScreen} />
      <Tab.Screen name="Gallery" component={InstagramScreen} />
      <Tab.Screen name="Themes" component={ThemesScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}
