import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import CategoryScreen from './app/screens/CategoryScreen';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MealsOverViewScreen from './app/screens/MealsOverViewScreen';
import MealsDetailsScreen from './app/screens/MealsDetailsScreen';
import FavuoriteScreen from './app/screens/FavouriteScreen';
import IconButton from './app/component/IconButton';
import FavouriteContextProvider from './app/store/context/favourite-context';
import {Provider} from 'react-redux';
import store from './app/store/redux/store';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  function MealDrawer() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#512DA8'},
          headerBackTitleStyle: {color: 'white'},
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          sceneContainerStyle: {backgroundColor: '#ddd'},
          drawerActiveTintColor: '#512DA8',
          drawerInactiveTintColor: '#9A9A9A',
          drawerContentStyle: {backgroundColor: '#ddd'},
          drawerTintColor: '#512DA8',
        }}>
        <Drawer.Screen
          name='Meal Categories'
          component={CategoryScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <IconButton color={color} icon={'list'} />
            ),
          }}
        />
        <Drawer.Screen
          name='Favuorite Meals'
          component={FavuoriteScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <IconButton color={color} icon={'star'} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }
  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: '#512DA8'},
              headerBackTitleStyle: {color: 'white'},
              headerTitleAlign: 'center',
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#ddd'},
            }}>
            <Stack.Screen
              name='MealsCategories'
              component={MealDrawer}
              options={{
                title: 'Categories',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='MealsOverView'
              component={MealsOverViewScreen}
              options={{
                title: 'Meals Overview',
                headerBackTitle: 'Meal Categories',
              }}
            />

            <Stack.Screen name='Meal Details' component={MealsDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
