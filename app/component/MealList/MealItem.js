import {useNavigation} from '@react-navigation/native';
import {Text, View, StyleSheet, Pressable, Image, Platform} from 'react-native';
import MealsDetails from '../MealDetails';

function MealItem({title, imageUrl, duration, complexity, affordability, id}) {
  const navigation = useNavigation();
  function onPressHandle() {
    navigation.navigate('Meal Details', {mealId: id});
  }
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{color: '#ddd'}}
        style={({pressed}) => (pressed ? styles.pressed : null)}
        onPress={onPressHandle}>
        <View>
          <Image style={styles.image} source={{uri: imageUrl}} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealsDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 8,
  },
  pressed: {
    opacity: 0.75,
  },
  image: {
    height: 180,
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
  },
});

export default MealItem;
