import {FlatList, StyleSheet, View} from 'react-native';
import CategoryGridTitle from '../component/CategoryGridTitle';
import {CATEGORIES} from '../data/data';

function CategoryScreen({navigation}) {
  function onPressHandler(id) {
    navigation.navigate('MealsOverView', {
      categoryId: id,
    });
  }
  function renderItem({item}) {
    return (
      <CategoryGridTitle
        title={item.title}
        color={item.color}
        onPress={onPressHandler.bind(this, item.id)}
      />
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CategoryScreen;
